var swiz = require('swiz');
var O = swiz.struct.Obj;
var F = swiz.struct.Field;
var Valve = swiz.Valve;
var Chain = swiz.Chain;
var extend = require('xtend')

function Profile(prof){
	var defaults = {
		"OrbitalConnectionUsername":"",
			"OrbitalConnectionPassword":"",
			"CustomerBin":"",
			"CustomerMerchantID":"",
			"CustomerName":"",
			"CustomerRefNum":"",
			"CustomerAddress1":"",
			"CustomerAddress2":"",
			"CustomerCity":"",
			"CustomerState":"",
			"CustomerZIP":"",
			"CustomerEmail":"",
			"CustomerPhone":"",
			"CustomerCountryCode":"",
			"CustomerProfileAction":"",
			"CustomerProfileOrderOverrideInd":"OI",
			"CustomerProfileFromOrderInd":"A",
			"OrderDefaultDescription":"",
			"OrderDefaultAmount":"",
			"CustomerAccountType":"CC",
			"Status":"",
			"CCAccountNum":"",
			"CCExpireDate":"",
			"ECPAccountDDA":"",
			"ECPAccountType":"",
			"ECPAccountRT":"",
			"ECPBankPmtDlv":"",
			"SwitchSoloStartDate":"",
			"SwitchSoloIssueNum":"",
			"MBType":"",
			"MBOrderIdGenerationMethod":"",
			"MBRecurringStartDate":"",
			"MBRecurringEndDate":"",
			"MBRecurringNoEndDateFlag":"",
			"MBRecurringMaxBillings":"",
			"MBRecurringFrequency":"",
			"MBDeferredBillDate":"",
			"MBMicroPaymentMaxDollarValue":"",
			"MBMicroPaymentMaxBillingDays":"",
			"MBMicroPaymentMaxTransactions":"",
			"MBCancelDate":"",
			"MBRestoreBillingDate":"",
			"MBRemoveFlag":"",
			"EUDDCountryCode":"",
			"EUDDBankSortCode":"",
			"EUDDRibCode":"",
			"SDMerchantName":"",
			"SDProductDescription":"",
			"SDMerchantCity":"",
			"SDMerchantPhone":"",
			"SDMerchantURL":"",
			"SDMerchantEmail":"",
			"BillerReferenceNumber":"",
			"AccountUpdaterEligibility":"",
			"EUDDBankBranchCode":"",
			"EUDDIBAN":"",
			"EUDDBIC":"",
			"EUDDMandateSignatureDate":"",
			"EUDDMandateID":"",
			"EUDDMandateType":"",			
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
			F("CCExpireDate", {}),
			F("ECPAccountDDA", {}),
			F("ECPAccountType", {}),
			F("ECPAccountRT", {}),
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
        ],
      'plural': 'Profiles',
      'singular':'Profile'
  }),
	O('ProfileResp',
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
			F("CCExpireDate", {}),
			F("ECPAccountDDA", {}),
			F("ECPAccountType", {}),
			F("ECPAccountRT", {}),
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
        ],      
      'singular':'ProfileResp'
  }),
	O('Response',{
  	'fields':[
  		F("ProfileResp" )
  	],
  	'singular':'Response'
  })
];



Profile.prototype.getSerializerType = function() {return 'Profile';};

Profile.prototype._create = function(){
	this.CustomerProfileAction = "C";
}

Profile.prototype._remove = function(){
	this.CustomerProfileAction = "D";
}

Profile.prototype._update = function(){
	this.CustomerProfileAction = "U";
}

Profile.prototype.valid = function(cb){
	var validity = swiz.defToValve(Profile._defs), v = new Valve(validity.Profile);
	v.check(this, cb);
}
module.exports = Profile