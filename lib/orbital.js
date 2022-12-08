var request = require('request');
var extend = require('xtend');
var Profile = require("./profile");
var QuickResponse = require("./quick-response");
var Jsonix = require('jsonix').Jsonix;
var ChaseRequest = require('./models/request').request;
var ChaseResponse = require('./models/response').response;

var requestContext = new Jsonix.Context([ ChaseRequest ]);
var responseContext = new Jsonix.Context([ ChaseResponse ]);

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

 function camelCase(o){
	var newObj = {};
	for (var p in o) {
		newObj[p.substring(0,1).toLowerCase()+p.substring(1)] = o[p];
	}
	return newObj;
 }

 function pascalCase(o){
	var newObj = {};
	for (var p in o) {
		newObj[p.substring(0,1).toUpperCase()+p.substring(1)] = o[p];
	}
	return newObj
 }
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
	this.settings.url = this.settings.url || default_urls[process.env.NODE_ENV || "development"].primary;
}


Orbital.prototype.create = function create(obj, cb){
	//ensure common elements are set based on orbital connection
	var self = this;
	obj.OrbitalConnectionUsername = self.settings.username;
	obj.OrbitalConnectionPassword = self.settings.password;
	if(typeof(obj._create) == "function") obj._create(self);
	obj = camelCase(obj);
	var payload = {}
	payload[obj.getSerializerType()] = obj;
	var marshaller = requestContext.createMarshaller();
	var marshalled = {
		name: {
			localPart: "Request"
		},
		value: camelCase(payload)
	};
	console.log(marshalled);
	var doc = marshaller.marshalString(marshalled);
	var headers = {
	'Content-Type':"application/PTI92",
	'MIME-Version':'1.1',
	'Content-transfer-encoding':'text',
	'Request-number': 1,
	'Document-type':'Request'
	}
	console.log(doc);
	request({uri:self.settings.url, body:doc,method:"POST", headers: headers}, function(err, response, body){
		if(err) return cb(err, null);
		try{
			var unmarshaller = responseContext.createUnmarshaller();
			var objresp = unmarshaller.unmarshalString(body);  
			return cb(null, pascalCase(objresp));
		}catch(e){
			console.log(e);
			return cb(e, null);  
		}
			
	});
	
}

Orbital.prototype.update = function updateProfile(profile, cb){
	//ensure common elements are set based on orbital connection
	var self = this;
	profile.OrbitalConnectionUsername = self.settings.username;
	profile.OrbitalConnectionPassword = self.settings.password;
	profile.CustomerMerchantID = self.settings.mid;
	profile.CustomerBin = self.settings.bin;
	if(typeof(profile._update) == "function") profile._update();
	profile = camelCase(profile);
	var marshaller = requestContext.createMarshaller();
	var payload = {}
	payload[obj.getSerializerType()] = profile;
	var marshalled = {
		name: {
			localPart: "Request"
		},
		value: camelCase(payload)
	};
	console.log(marshalled);
	var doc = marshaller.marshalString(marshalled);
	var headers = {
		'Content-Type':"application/PTI92",
		'MIME-Version':'1.1',
		'Content-transfer-encoding':'text',
		'Request-number': 1,
		'Document-type':'Request'
		}
	request({uri:self.settings.url, body:doc,method:"POST", headers: headers}, function(err, response, body){
		console.log(err);
		console.log(body);
		if(err) return cb(err, null);
		try{
			var unmarshaller = responseContext.createUnmarshaller();
			var obj = unmarshaller.unmarshalString(body);
			obj.ProfileResp.OrbitalConnectionUsername = self.settings.username;
			obj.ProfileResp.OrbitalConnectionPassword = self.settings.password;
			obj.ProfileResp.CustomerMerchantID = self.settings.mid;
			obj.ProfileResp.CustomerBin = self.settings.bin;
			if(obj.ProfileResp.ProfileProcStatus > 0){
				return cb(new ChaseError(obj.ProfileResp.ProfileProcStatus, obj.ProfileResp.CustomerProfileMessage), pascalCase(obj))
			}
			return cb(null, new Profile(pascalCase(obj.profileResp)));  
		}catch(e){
			console.log(e);
			return cb(e, null);  
		}
			  	
	})		
}

Orbital.prototype.remove = function deleteProfile(obj, cb){
	var self = this;
	obj.OrbitalConnectionUsername = this.settings.username;
	obj.OrbitalConnectionPassword = this.settings.password;
	obj.CustomerMerchantID = this.settings.mid;
	obj.CustomerBin = this.settings.bin;
	obj.CustomerProfileAction = "D"; // set to delete profile.	
	if(typeof(obj._remove) == "function") obj._remove();
	obj = camelCase(obj);
	var marshaller = requestContext.createMarshaller();
	var payload = {}
	payload[obj.getSerializerType()] = obj;
	var marshalled = {
		name: {
			localPart: "Request"
		},
		value: camelCase(payload)
	};
	console.log(marshalled);
	var doc = marshaller.marshalString(marshalled);
	var headers = {
	'Content-Type':"application/PTI92",
	'MIME-Version':'1.1',
	'Content-transfer-encoding':'text',
	'Request-number': 1,
	'Document-type':'Request'
	}
	console.log("sending:")
	console.log(doc)
	request({uri:self.settings.url, body:doc,method:"POST", headers: headers}, function(err, response, body){
		if(err) return cb(err, null);
		console.log("response:");
		console.log(body);
		var unmarshaller = responseContext.createUnmarshaller();
		var obj = unmarshaller.unmarshalString(body).value;
		obj.profileResp.orbitalConnectionUsername = self.settings.username;
		obj.profileResp.orbitalConnectionPassword = self.settings.password;
		obj.profileResp.customerMerchantID = self.settings.mid;
		obj.profileResp.customerBin = self.settings.bin;
		if(obj.profileResp.profileProcStatus > 0){
				return cb(new ChaseError(obj.profileResp.profileProcStatus, obj.profileResp.customerProfileMessage))
			}		
		cb(err, new Profile(pascalCase(obj.profileResp)));
	})
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
	var marshaller = requestContext.createMarshaller();
	var payload = {}
	payload[obj.getSerializerType()] = obj;
	var marshalled = {
		name: {
			localPart: "Request"
		},
		value: camelCase(payload)
	};
	console.log(marshalled);
	var doc = marshaller.marshalString(marshalled);
	var headers = {
	'Content-Type':"application/PTI92",
	'MIME-Version':'1.1',
	'Content-transfer-encoding':'text',
	'Request-number': 1,
	'Document-type':'Request'
	}
	request({uri:self.settings.url, body:serialized,method:"POST", headers: headers}, function(err, response, body){	  	
		if(err) return cb(err, null);
		console.log(body);
		var unmarshaller = responseContext.createUnmarshaller();
		var obj = unmarshaller.unmarshalString(body);
		obj.profileResp.orbitalConnectionUsername = self.settings.username;
		obj.profileResp.OrbitalConnectionPassword = self.settings.password;
		obj.profileResp.customerMerchantID = self.settings.mid;
		obj.profileResp.customerBin = self.settings.bin;
		if(obj.profileResp.profileProcStatus > 0){
			return cb(new ChaseError(obj.profileResp.profileProcStatus, obj.profileResp.customerProfileMessage))
		}		
		cb(null, new Profile(pascalCase(obj.orofileResp)));
	});	  	
}

module.exports = Orbital;