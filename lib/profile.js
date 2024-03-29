var swiz = require('swiz');
var O = swiz.struct.Obj;
var F = swiz.struct.Field;
var Valve = swiz.Valve;
var Chain = swiz.Chain;
var extend = require('xtend')

function Profile(prof){
	var defaults = {
		"OrbitalConnectionUsername":"",
			"orbitalConnectionPassword":"",
			"customerBin":"",
			"customerMerchantID":"",
			"customerName":"",
			"customerRefNum":"",
			"customerAddress1":"",
			"customerAddress2":"",
			"customerCity":"",
			"customerState":"",
			"customerZIP":"",
			"customerEmail":"",
			"customerPhone":"",
			"customerCountryCode":"",
			"customerProfileAction":"",
			"customerProfileOrderOverrideInd":"OI",
			"customerProfileFromOrderInd":"A",
			"orderDefaultDescription":"",
			"orderDefaultAmount":"",
			"customerAccountType":"CC",
			"status":"",
			"ccAccountNum":"",
			"ccExpireDate":"",
			"ecpAccountDDA":"",
			"ecpAccountType":"",
			"ecpAccountRT":"",
			"ecpBankPmtDlv":"",
			"switchSoloStartDate":"",
			"switchSoloIssueNum":"",
			"mbType":"",
			"mbOrderIdGenerationMethod":"",
			"mbRecurringStartDate":"",
			"mbRecurringEndDate":"",
			"mbRecurringNoEndDateFlag":"",
			"mbRecurringMaxBillings":"",
			"mbRecurringFrequency":"",
			"mbDeferredBillDate":"",
			"mbMicroPaymentMaxDollarValue":"",
			"mbMicroPaymentMaxBillingDays":"",
			"mbMicroPaymentMaxTransactions":"",
			"mbCancelDate":"",
			"mbRestoreBillingDate":"",
			"mbRemoveFlag":"",
			"EUDDCountryCode":"",
			"EUDDBankSortCode":"",
			"EUDDRibCode":"",
			"sdMerchantName":"",
			"sdProductDescription":"",
			"sdMerchantCity":"",
			"sdMerchantPhone":"",
			"sdMerchantURL":"",
			"sdMerchantEmail":"",
			"billerReferenceNumber":"",
			"accountUpdaterEligibility":"",
			"EUDDBankBranchCode":"",
			"EUDDIBAN":"",
			"EUDDBIC":"",
			"EUDDMandateSignatureDate":"",
			"EUDDMandateID":"",
			"EUDDMandateType":"",
			"mitMsgType":"",
	}
	var obj = extend({},defaults, prof);
	for(var prop in obj){
		this[prop] = obj[prop];
	}

}
Profile._defs = Profile.prototype._defs = [
  O('Request',{
  	'fields':[
  		F("Profile" )
  	],
  	'singular':'Request'
  }),
  O('Profile',
    {
      'fields': [
      	F("OrbitalConnectionUsername", {'val':Chain().isString().notEmpty()}),
			F("OrbitalConnectionPassword", {'val':Chain().isString().notEmpty()}),
			F("CustomerBin", {'val':Chain().isString().inArray(["000001", "000002"])}),
			F("CustomerMerchantID", {'val':Chain().isString().notEmpty()}),
			F("CustomerName", {coerceTo:'string'}),
			F("CustomerRefNum", {coerceTo:'string'}),
			F("CustomerAddress1", {coerceTo:'string'}),
			F("CustomerAddress2", {coerceTo:'string'}),
			F("CustomerCity", {}),
			F("CustomerState", {}),
			F("CustomerZIP", {}),
			F("CustomerEmail", {}),
			F("CustomerPhone", {}),
			F("CustomerCountryCode", {}),
			F("CustomerProfileAction", {'val':Chain().isString().notEmpty().inArray(["C","R","U","D"])}),
			F("CustomerProfileOrderOverrideInd", {'val': Chain().isString().notEmpty().inArray(["NO","OI","OD","OA"])}),
			F("CustomerProfileFromOrderInd", {'val':Chain().isString().notEmpty().inArray(["A","S"])}),
			F("OrderDefaultDescription", {}),
			F("OrderDefaultAmount", {}),
			F("CustomerAccountType", {'val': Chain().isString().notEmpty().inArray(["CC","SW","EC","DP","ED","IM"])}),
			F("Status", {}),
			F("CCAccountNum", {}),
			F("CCExpireDate", {coerceTo:'string', 'val':Chain().isString()}),
			F("ECPAccountDDA", {coerceTo:'string', 'val':Chain().isString()}),
			F("ECPAccountType", {coerceTo:'string', 'val':Chain().isString()}),
			F("ECPAccountRT", {coerceTo:'string', 'val':Chain().isString()}),
			F("ECPBankPmtDlv", {}),
			F("SwitchSoloStartDate", {}),
			F("SwitchSoloIssueNum", {}),
			F("MBType", {}),
			F("MBOrderIdGenerationMethod", {}),
			F("MBRecurringStartDate", {}),
			F("MBRecurringEndDate", {}),
			F("MBRecurringNoEndDateFlag", {}),
			F("MBRecurringMaxBillings", {}),
			F("MBRecurringFrequency", {}),
			F("MBDeferredBillDate", {}),
			F("MBMicroPaymentMaxDollarValue", {}),
			F("MBMicroPaymentMaxBillingDays", {}),
			F("MBMicroPaymentMaxTransactions", {}),
			F("MBCancelDate", {}),
			F("MBRestoreBillingDate", {}),
			F("MBRemoveFlag", {}),
			F("EUDDCountryCode", {}),
			F("EUDDBankSortCode", {}),
			F("EUDDRibCode", {}),
			F("SDMerchantName", {}),
			F("SDProductDescription", {}),
			F("SDMerchantCity", {}),
			F("SDMerchantPhone", {}),
			F("SDMerchantURL", {}),
			F("SDMerchantEmail", {}),
			F("BillerReferenceNumber", {}),
			F("AccountUpdaterEligibility", {}),
			F("EUDDBankBranchCode", {}),
			F("EUDDIBAN", {}),
			F("EUDDBIC", {}),
			F("EUDDMandateSignatureDate", {}),
			F("EUDDMandateID", {}),
			F("EUDDMandateType", {}),
	      		F("MITMsgType",{}),
        ],
      'plural': 'Profiles',
      'singular':'Profile'
  }),
	O('QuickResponse',{
		'fields':[
			F("ProfileProcStatus", {}),
			F("StatusMsg", {})
		],
		'singular': "QuickResponse"
	}),
	O('ProfileResp',
    {
      'fields': [
      		F("OrbitalConnectionUsername", {'val':Chain().isString().notEmpty()}),
			F("OrbitalConnectionPassword", {'val':Chain().isString().notEmpty()}),
			F("CustomerBin", {'val':Chain().isString().inArray(["000001", "000002"])}),
			F("CustomerMerchantID", {'val':Chain().isString().notEmpty()}),
			F("ProfileProcStatus", {}),
			F("CustomerProfileMessage", {}),
			F("CustomerName", {coerceTo:'string'}),
			F("CustomerRefNum", {coerceTo:'string'}),
			F("CustomerAddress1", {coerceTo:'string'}),
			F("CustomerAddress2", {coerceTo:'string'}),
			F("CustomerCity", {}),
			F("CustomerState", {}),
			F("CustomerZIP", {}),
			F("CustomerEmail", {}),
			F("CustomerPhone", {}),
			F("CustomerCountryCode", {}),
			F("CustomerProfileAction", {'val':Chain().isString().notEmpty().inArray(["C","R","U","D"])}),
			F("CustomerProfileOrderOverrideInd", {'val': Chain().isString().notEmpty().inArray(["NO","OI","OD","OA"])}),
			F("CustomerProfileFromOrderInd", {'val':Chain().isString().notEmpty().inArray(["A","S"])}),
			F("OrderDefaultDescription", {}),
			F("OrderDefaultAmount", {}),
			F("CustomerAccountType", {'val': Chain().isString().notEmpty().inArray(["CC","SW","EC","DP","ED","IM"])}),
			F("Status", {}),
			F("CCAccountNum", {'val':Chain().isString()}),
			F("CCExpireDate", {'val':Chain().isString()}),
			F("ECPAccountDDA", {coerceTo:'string', 'val':Chain().isString()}),
			F("ECPAccountType", {coerceTo:'string', 'val':Chain().isString()}),
			F("ECPAccountRT", {coerceTo:'string', 'val':Chain().isString()}),
			F("ECPBankPmtDlv", {}),
			F("SwitchSoloStartDate", {}),
			F("SwitchSoloIssueNum", {}),
			F("MBType", {}),
			F("MBOrderIdGenerationMethod", {}),
			F("MBRecurringStartDate", {}),
			F("MBRecurringEndDate", {}),
			F("MBRecurringNoEndDateFlag", {}),
			F("MBRecurringMaxBillings", {}),
			F("MBRecurringFrequency", {}),
			F("MBDeferredBillDate", {}),
			F("MBMicroPaymentMaxDollarValue", {}),
			F("MBMicroPaymentMaxBillingDays", {}),
			F("MBMicroPaymentMaxTransactions", {}),
			F("MBCancelDate", {}),
			F("MBRestoreBillingDate", {}),
			F("MBRemoveFlag", {}),
			F("EUDDCountryCode", {}),
			F("EUDDBankSortCode", {}),
			F("EUDDRibCode", {}),
			F("SDMerchantName", {}),
			F("SDProductDescription", {}),
			F("SDMerchantCity", {}),
			F("SDMerchantPhone", {}),
			F("SDMerchantURL", {}),
			F("SDMerchantEmail", {}),
			F("BillerReferenceNumber", {}),
			F("AccountUpdaterEligibility", {}),
			F("EUDDBankBranchCode", {}),
			F("EUDDIBAN", {}),
			F("EUDDBIC", {}),
			F("EUDDMandateSignatureDate", {}),
			F("EUDDMandateID", {}),
			F("EUDDMandateType", {}),
	      		F("MITMsgType",{}),
        ],      
      'singular':'ProfileResp'
  }),
	O('Response',{
  	'fields':[
  		F("ProfileResp" ),
  		F("QuickResponse")
  	],
  	'singular':'Response'
  })
];



Profile.prototype.getSerializerType = function() {return 'Profile';};

Profile.prototype._create = function(orbital){
	this.CustomerProfileAction = "C";
	this.CustomerMerchantID = orbital.settings.mid;
	this.CustomerBin = orbital.settings.bin;
	
}

Profile.prototype._remove = function(){
	this.CustomerProfileAction = "D";
	this.MBRecurringFrequency = null;		// remove recurring frequency on delete
}

Profile.prototype._update = function(){
	this.CustomerProfileAction = "U";
}
Profile.prototype.response = function(response, orbital, cb){
	// add back in the connection settings
  	response.ProfileResp.OrbitalConnectionUsername = orbital.settings.username;
	response.ProfileResp.OrbitalConnectionPassword = orbital.settings.password;
	response.ProfileResp.CustomerMerchantID = orbital.settings.mid;
	response.ProfileResp.CustomerBin = orbital.settings.bin;
	if(response.QuickResponse){
		return cb(new ChaseError(response.QuickResponse.ProfileProcStatus, response.QuickResponse.CustomerProfileMessage), response)
	}				
	if(response.ProfileResp.ProfileProcStatus > 0){
		return cb(new ChaseError(response.ProfileResp.ProfileProcStatus, response.ProfileResp.CustomerProfileMessage), response)
	}
	response.ProfileResp.CustomerProfileAction = "C"; //switch the CREATE response from chase back to "C" when everything is good.
	console.log("Profile response:")
	console.log(response.ProfileResp)
  	cb(null, new Profile(response.ProfileResp));
}
Profile.prototype.valid = function(cb){
	var validity = swiz.defToValve(Profile._defs), v = new Valve(validity.Profile);
	v.check(this, cb);
}
module.exports = Profile
