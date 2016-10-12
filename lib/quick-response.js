var swiz = require('swiz');
var O = swiz.struct.Obj;
var F = swiz.struct.Field;
var Valve = swiz.Valve;
var Chain = swiz.Chain;
var extend = require('xtend')

function QuickResponse(prof){
	var defaults = {
		"MerchantID":"",
		"TerminalID":"",
		"OrderID":"",
		"AccountNum":"",
		"StartAccountNum":"",
		"TxRefNum":"",
		"TxRefIdx":"",
		"ProcStatus":"",
		"StatusMsg":"",
		"ApprovalStatus":"",
		"CustomerBin":"",
		"CustomerMerchantID":"",
		"CustomerName":"",
		"CustomerRefNum":"",
		"CustomerProfileAction":"",
		"ProfileProcStatus":"",
		"CustomerProfileMessage":"",
		"CustomerAddress1":"",
		"CustomerAddress2":"",
		"CustomerCity":"",
		"CustomerState":"",
		"CustomerZIP":"",
		"CustomerEmail":"",
		"CustomerPhone":"",
		"CustomerProfileOrderOverrideInd":"",
		"OrderDefaultDescription":"",
		"CCAccountNum":"",
		"CCExpireDate":"",
		"ECPAccountDDA":"",
		"ECPAccountType":"",
		"ECPAccountRT":"",
		"ECPBankPmtDlv":"",
		"RespTime":""
	}
	var obj = extend({},defaults, prof);
	for(var prop in obj){
		this[prop] = obj[prop];
	}

}
QuickResponse._defs = QuickResponse.prototype._defs = [
  O('QuickResp',
    {
      'fields': [
      	F("MerchantID",{}),
		F("TerminalID",{}),
		F("OrderID",{}),
		F("AccountNum",{}),
		F("StartAccountNum",{}),
		F("TxRefNum",{}),
		F("TxRefIdx",{}),
		F("ProcStatus",{}),
		F("StatusMsg",{}),
		F("ApprovalStatus",{}),
		F("CustomerBin",{}),
		F("CustomerMerchantID",{}),
		F("CustomerName",{}),
		F("CustomerRefNum",{}),
		F("CustomerProfileAction",{}),
		F("ProfileProcStatus",{}),
		F("CustomerProfileMessage",{}),
		F("CustomerAddress1",{}),
		F("CustomerAddress2",{}),
		F("CustomerCity",{}),
		F("CustomerState",{}),
		F("CustomerZIP",{}),
		"CustomerEmail",
		F("CustomerPhone",{}),
		F("CustomerProfileOrderOverrideInd",{}),
		F("OrderDefaultDescription",{}),
		F("CCAccountNum",{}),
		F("CCExpireDate",{}),
		F("ECPAccountDDA",{}),
		F("ECPAccountType",{}),
		F("ECPAccountRT",{}),
		F("ECPBankPmtDlv",{}),
		F("RespTime",{})
        ],
      'plural': 'QuickResponses',
      'singular':'QuickResponse'
  }),
	O('Response',{
  	'fields':[
  		F("QuickResp" )
  	],
  	'singular':'Response'
  })
];



QuickResponse.prototype.getSerializerType = function() {return 'QuickResponse';};

/*QuickResponse.prototype.response = function(response, orbital, cb){
	// add back in the connection settings
  	response.ProfileResp.OrbitalConnectionUsername = orbital.settings.username;
	response.ProfileResp.OrbitalConnectionPassword = orbital.settings.password;
	response.ProfileResp.CustomerMerchantID = orbital.settings.mid;
	response.ProfileResp.CustomerBin = orbital.settings.bin;				
	if(response.ProfileResp.ProfileProcStatus > 0){
		return cb(new ChaseError(response.ProfileResp.ProfileProcStatus, response.ProfileResp.CustomerProfileMessage), response)
	}
	response.ProfileResp.CustomerProfileAction = "C"; //switch the CREATE response from chase back to "C" when everything is good.
	console.log("QuickResponse response:")
	console.log(response.ProfileResp)
  	cb(null, new QuickResponse(response.ProfileResp));
}
QuickResponse.prototype.valid = function(cb){
	var validity = swiz.defToValve(QuickResponse._defs), v = new Valve(validity.QuickResponse);
	v.check(this, cb);
}
*/
module.exports = QuickResponse
