var request = require('request');
var swiz = require('swiz');
var O = swiz.struct.Obj;
var F = swiz.struct.Field;
var extend = require('xtend');
var Profile = require("./profile");
var default_urls = {
	development:{
		primary: "https://orbitalvar1.paymentech.net/authorize",
		secondary: "https://orbitalvar2.paymentech.net/authorize"
	},
	production:{
		primary: "https://orbital1.paymentech.net/authorize",
		secondary: "https://orbital2.paymentech.net/authorize"
	},
	test:{
		primary: "https://orbitalvar1.paymentech.net/authorize",
		secondary: "https://orbitalvar2.paymentech.net/authorize"	
	}


}


/**
 * Custom Error object for chase errors
 * @param {number} code    The numeric chase response code
 * @param {string} message The error explanation message
 */
function ChaseError (code, message) {
  Error.call(this)

  this.name    = 'Chase Error'
  this.code    = code
  this.message = message || 'An unkown chase error has occurred.'
  Error.captureStackTrace(this, arguments.callee)
}

ChaseError.prototype.__proto__ = Error.prototype

/**
 * Create an orbital connection object that will allow communication with the orbital gateway soap webservice.
 * @param {object} config - The connection prameter object see defaults for explanation
 *
 * var defaults = {
		username: null,			//required username when using user authentication
		password: null,			//required password when using user authentication
		mid: null,				//required merchant id
		bin: "000001"			// bin number
	}
 */

function Orbital(config){
	var defaults = {
		username: null,			//required
		password: null,			//required
		mid: null,				//required
		bin: "000001"
	}
	this.settings = extend(defaults, config);
	if(!this.settings.username) throw new Error("Must specify username!");
	if(!this.settings.password) throw new Error("Must specify password!");
	if(!this.settings.mid) throw new Error("Must specify mid!");
	this.settings.url = default_urls[process.env.NODE_ENV || "development"].primary;
}


Orbital.prototype.create = function create(obj, cb){
	//ensure common elements are set based on orbital connection
	var self = this;
	obj.OrbitalConnectionUsername = self.settings.username;
	obj.OrbitalConnectionPassword = self.settings.password;
	obj.CustomerMerchantID = self.settings.mid;
	obj.CustomerBin = self.settings.bin;
	var payload = {};
	payload.getSerializerType = function() {return 'Request';};
	payload[obj.getSerializerType()] = obj;
	if(typeof(obj._create) == "function") obj._create();
	if(typeof(obj.valid) == "function") obj.valid(function(err, cleaned){
		if(err) return cb(err, null);
		var doc = swiz.Swiz(obj._defs, {'stripNulls':false})
		doc.serialize(swiz.SERIALIZATION.SERIALIZATION_XML, 1, payload, function(err, serialized) {
		  var headers = {
		  	'Content-Type':"application/PTI59",
		  	'MIME-Version':'1.1',
		  	'Content-transfer-encoding':'text',
		  	'Request-number': 1,
		  	'Document-type':'Request'
		  }
		  request({uri:self.settings.url, body:serialized,method:"POST", headers: headers}, function(err, response, body){
		  	if(err) return cb(err, null);
		  	var sw = new swiz.Swiz(obj._defs, {stripNulls: true});
			sw.deserialize(swiz.SERIALIZATION.SERIALIZATION_XML, 1, body, function(err, obj) {
				// add back in the connection settings
			  	obj.ProfileResp.OrbitalConnectionUsername = self.settings.username;
				obj.ProfileResp.OrbitalConnectionPassword = self.settings.password;
				obj.ProfileResp.CustomerMerchantID = self.settings.mid;
				obj.ProfileResp.CustomerBin = self.settings.bin;				
				if(obj.ProfileResp.ProfileProcStatus > 0){
					return cb(new ChaseError(obj.ProfileResp.ProfileProcStatus, obj.ProfileResp.CustomerProfileMessage), obj)
				}
				obj.ProfileResp.CustomerProfileAction = "C"; //switch the CREATE response from chase back to "C" when everything is good.
			  	cb(null, new Profile(obj.ProfileResp));
			});		  	
		  })
		});	
	})
	
}

Orbital.prototype.update = function updateProfile(profile, cb){
	//ensure common elements are set based on orbital connection
	var self = this;
	profile.OrbitalConnectionUsername = self.settings.username;
	profile.OrbitalConnectionPassword = self.settings.password;
	profile.CustomerMerchantID = self.settings.mid;
	profile.CustomerBin = self.settings.bin;
	var payload = {};
	payload.getSerializerType = function() {return 'Request';};
	payload[profile.getSerializerType()] = Profile;
	if(typeof(profile._update) == "function") profile._update();
	if(typeof(profile.valid) == "function") profile.valid(function(err, cleaned){
		if(err) return cb(err, null);
		var doc = swiz.Swiz(profile._defs, {'stripNulls':false})
		doc.serialize(swiz.SERIALIZATION.SERIALIZATION_XML, 1, payload, function(err, serialized) {
		  var headers = {
		  	'Content-Type':"application/PTI59",
		  	'MIME-Version':'1.1',
		  	'Content-transfer-encoding':'text',
		  	'Request-number': 1,
		  	'Document-type':'Request'
		  }
		  request({uri:self.settings.url, body:serialized,method:"POST", headers: headers}, function(err, response, body){
		  	if(err) return cb(err, null);
		  	var sw = new swiz.Swiz(profile._defs, {stripNulls: true});
			sw.deserialize(swiz.SERIALIZATION.SERIALIZATION_XML, 1, body, function(err, obj) {
				// add back in the connection settings
			  	obj.ProfileResp.OrbitalConnectionUsername = self.settings.username;
				obj.ProfileResp.OrbitalConnectionPassword = self.settings.password;
				obj.ProfileResp.CustomerMerchantID = self.settings.mid;
				obj.ProfileResp.CustomerBin = self.settings.bin;
				if(obj.ProfileResp.ProfileProcStatus > 0){
					cb(new ChaseError(obj.ProfileResp.ProfileProcStatus, obj.ProfileResp.CustomerProfileMessage), obj)
				}
			  	cb(null, new Profile(obj.ProfileResp));
			});		  	
		  })
		});	
	})
}

Orbital.prototype.remove = function deleteProfile(obj, cb){
	var self = this;
	obj.OrbitalConnectionUsername = this.settings.username;
	obj.OrbitalConnectionPassword = this.settings.password;
	obj.CustomerMerchantID = this.settings.mid;
	obj.CustomerBin = this.settings.bin;
	obj.CustomerProfileAction = "D"; // set to delete profile.	
	var payload = {};
	payload.getSerializerType = function() {return 'Request';};
	payload[obj.getSerializerType()] = obj;
	if(typeof(obj._remove) == "function") obj._remove();
	var doc = swiz.Swiz(obj._defs, {'stripNulls':false})
	doc.serialize(swiz.SERIALIZATION.SERIALIZATION_XML, 1, payload, function(err, serialized) {
	  var headers = {
	  	'Content-Type':"application/PTI59",
	  	'MIME-Version':'1.1',
	  	'Content-transfer-encoding':'text',
	  	'Request-number': 1,
	  	'Document-type':'Request'
	  }
	  request({uri:self.settings.url, body:serialized,method:"POST", headers: headers}, function(err, response, body){
	  	if(err) return cb(err, null);
	  	var sw = new swiz.Swiz(obj._defs, {stripNulls: true});
		sw.deserialize(swiz.SERIALIZATION.SERIALIZATION_XML, 1, body, function(err, obj) {
			obj.ProfileResp.OrbitalConnectionUsername = self.settings.username;
			obj.ProfileResp.OrbitalConnectionPassword = self.settings.password;
			obj.ProfileResp.CustomerMerchantID = self.settings.mid;
			obj.ProfileResp.CustomerBin = self.settings.bin;
			if(obj.ProfileResp.ProfileProcStatus > 0){
					return cb(new ChaseError(obj.ProfileResp.ProfileProcStatus, obj.ProfileResp.CustomerProfileMessage))
				}		
			cb(err, new Profile(obj.ProfileResp));
		});	  	
	  })
	});	
}

/**
 * Retrieves a profile from the orbital system.
 * @param  {[Profile]}   obj a profile object that at minimum specifies the bin and the CustomerRefNum
 * @param  {Function} cb  The callback function that receives err and profile
 * @return {[type]}       [description]
 */
Orbital.prototype.retrieve = function getProfile(obj, cb){
	var self = this;
	obj.OrbitalConnectionUsername = this.settings.username;
	obj.OrbitalConnectionPassword = this.settings.password;
	obj.CustomerMerchantID = this.settings.mid;
	obj.CustomerBin = this.settings.bin;
	obj.CustomerProfileAction = "R"; // set to retrieve profile.	
	var payload = {};
	payload.getSerializerType = function() {return 'Request';};
	payload[obj.getSerializerType()] = obj;
	var doc = swiz.Swiz(obj._defs, {'stripNulls':false})
	doc.serialize(swiz.SERIALIZATION.SERIALIZATION_XML, 1, payload, function(err, serialized) {
	  var headers = {
	  	'Content-Type':"application/PTI59",
	  	'MIME-Version':'1.1',
	  	'Content-transfer-encoding':'text',
	  	'Request-number': 1,
	  	'Document-type':'Request'
	  }
	  request({uri:self.settings.url, body:serialized,method:"POST", headers: headers}, function(err, response, body){	  	
	  	if(err) return cb(err, null);
	  	var sw = new swiz.Swiz(obj._defs, {stripNulls: false});
		sw.deserialize(swiz.SERIALIZATION.SERIALIZATION_XML, 1, body, function(err, obj) {
			obj.ProfileResp.OrbitalConnectionUsername = self.settings.username;
			obj.ProfileResp.OrbitalConnectionPassword = self.settings.password;
			obj.ProfileResp.CustomerMerchantID = self.settings.mid;
			obj.ProfileResp.CustomerBin = self.settings.bin;
			if(obj.ProfileResp.ProfileProcStatus > 0){
				return cb(new ChaseError(obj.ProfileResp.ProfileProcStatus, obj.ProfileResp.CustomerProfileMessage))
			}		
		  	cb(null, new Profile(obj.ProfileResp));
		});	  	
	  })
	});	
}

module.exports = Orbital;