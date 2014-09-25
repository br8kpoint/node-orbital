var swiz = require('swiz');
var O = swiz.struct.Obj;
var F = swiz.struct.Field;
var Valve = swiz.Valve;
var Chain = swiz.Chain;
var extend = require('xtend')

function NewOrder(order){
	var defaults = {
		
	}
	var obj = extend({},defaults, order);
	for(var prop in obj){
		this[prop] = obj[prop];
	}

}
NewOrder._defs = NewOrder.prototype._defs = [
  O('Request',{
  	'fields':[
  		F("NewOrder" )
  	],
  	'singular':'Request'
  }),
  O('NewOrder',
    {
      'fields': [
      	F("OrbitalConnectionUsername", {'val':Chain().isString().notEmpty()}),
			F("OrbitalConnectionPassword", {'val':Chain().isString().notEmpty()}),
			F("IndustryType", {'val':Chain().isString().inArray(["EC", "RC", "MO", "IV", "IN"])}),
			F("MessageType", {'val':Chain().isString().inArray(["A", "AC", "F", "FR", "FC", "R"])}),
			F("BIN", {'val':Chain().isString().inArray(["000001", "000002"])}),
			F("MerchantID", {'val':Chain().isString().notEmpty()}),
			F("TerminalID", {'val':Chain().len(1,3)}),
			F("CardBrand", {'val':Chain().optional()}),
			F("AccountNum", {}),
			F("Exp", {}),
			F("CurrencyCode", {}),
			F("CurrencyExponent", {}),
			F("CardSecValInd", {'val':Chain().optional()}),
			F("CardSecVal", {'val':Chain().optional()}),
			F("DebitCardIssueNum", {'val':Chain().optional()}),
			F("DebitCardStartDate", {'val':Chain().optional()}),
			F("BCRtNum", {'val':Chain().optional()}),
			F("CheckDDA", {'val':Chain().optional()}),
			F("BankAccountType", {'val':Chain().optional()}),
			F("ECPAuthMethod", {'val':Chain().optional()}),
			F("BankPmtDelv", {'val':Chain().optional()}),
			F("AVSzip", {'val':Chain().optional()}),
			F("AVSaddress1", {'val':Chain().optional()}),
			F("AVSaddress2", {'val':Chain().optional()}),
			F("AVScity", {'val':Chain().optional()}),
			F("AVSstate", {'val':Chain().optional()}),
			F("AVSphoneNum", {'val':Chain().optional()}),
			F("AVSname", {'val':Chain().optional()}),
			F("AVScountryCode", {'val':Chain().optional()}),
			F("AVSDestzip", {'val':Chain().optional()}),
			F("AVSDestaddress1", {'val':Chain().optional()}),
			F("AVSDestaddress2", {'val':Chain().optional()}),
			F("AVSDestcity", {'val':Chain().optional()}),
			F("AVSDeststate", {'val':Chain().optional()}),
			F("AVSDestphoneNum", {'val':Chain().optional()}),
			F("AVSDestname", {'val':Chain().optional()}),
			F("AVSDestcountryCode", {'val':Chain().optional()}),
			F("CustomerProfileFromOrderInd", {'val':Chain().optional()}),
			F("CustomerRefNum", {'val':Chain().optional()}),
			F("CustomerProfileOrderOverrideInd", {'val':Chain().optional()}),
			F("Status", {'val':Chain().optional()}),
			F("AuthenticationECIInd", {'val':Chain().optional()}),
			F("CAVV", {'val':Chain().optional()}),
			F("XID", {'val':Chain().optional()}),
			F("PriorAuthID", {'val':Chain().optional()}),
			F("OrderID", {'val':Chain().len(1,22)}),
			F("Amount", {}),
			F("Comments", {'val':Chain().optional()}),
			F("ShippingRef", {'val':Chain().optional()}),
			F("TaxInd", {'val':Chain().optional()}),
			F("Tax", {'val':Chain().optional()}),
			F("AMEXTranAdvAddn1", {'val':Chain().optional()}),
			F("AMEXTranAdvAddn2", {'val':Chain().optional()}),
			F("AMEXTranAdvAddn3", {'val':Chain().optional()}),
			F("AMEXTranAdvAddn4", {'val':Chain().optional()}),
			F("AAV", {'val':Chain().optional()}),
			F("SDMerchantName", {'val':Chain().optional()}),
			F("SDProductDescription", {'val':Chain().optional()}),
			F("SDMerchantCity", {'val':Chain().optional()}),
			F("SDMerchantPhone", {'val':Chain().optional()}),
			F("SDMerchantURL", {'val':Chain().optional()}),
			F("SDMerchantEmail", {'val':Chain().optional()}),
			F("RecurringInd", {'val':Chain().optional()}),
			F("EUDDCountryCode", {'val':Chain().optional()}),
			F("EUDDBankSortCode", {'val':Chain().optional()}),
			F("EUDDRibCode", {'val':Chain().optional()}),
			F("BMLCustomerIP", {'val':Chain().optional()}),
			F("BMLCustomerEmail", {'val':Chain().optional()}),
			F("BMLShippingCost", {'val':Chain().optional()}),
			F("BMLTNCVersion", {'val':Chain().optional()}),
			F("BMLCustomerRegistrationDate", {'val':Chain().optional()}),
			F("BMLCustomerTypeFlag", {'val':Chain().optional()}),
			F("BMLItemCategory", {'val':Chain().optional()}),
			F("BMLPreapprovalInvitationNum", {'val':Chain().optional()}),
			F("BMLMerchantPromotionalCode", {'val':Chain().optional()}),
			F("BMLCustomerBirthDate", {'val':Chain().optional()}),
			F("BMLCustomerSSN", {'val':Chain().optional()}),
			F("BMLCustomerAnnualIncome", {'val':Chain().optional()}),
			F("BMLCustomerResidenceStatus", {'val':Chain().optional()}),
			F("BMLCustomerCheckingAccount", {'val':Chain().optional()}),
			F("BMLCustomerSavingsAccount", {'val':Chain().optional()}),
			F("BMLProductDeliveryType", {'val':Chain().optional()}),
			F("BillerReferenceNumber", {'val':Chain().optional()}),
			F("MBType", {'val':Chain().optional()}),
			F("MBOrderIdGenerationMethod", {'val':Chain().optional()}),
			F("MBRecurringStartDate", {'val':Chain().optional()}),
			F("MBRecurringEndDate", {'val':Chain().optional()}),
			F("MBRecurringNoEndDateFlag", {'val':Chain().optional()}),
			F("MBRecurringMaxBillings", {'val':Chain().optional()}),
			F("MBRecurringFrequency", {'val':Chain().optional()}),
			F("MBDeferredBillDate", {'val':Chain().optional()}),
			F("MBMicroPaymentMaxDollarValue", {'val':Chain().optional()}),
			F("MBMicroPaymentMaxBillingDays", {'val':Chain().optional()}),
			F("MBMicroPaymentMaxTransactions", {'val':Chain().optional()}),
			F("TxRefNum", {'val':Chain().optional()}),
			F("PCOrderNum", {'val':Chain().optional()}),
			F("PCDestZip", {'val':Chain().optional()}),
			F("PCDestName", {'val':Chain().optional()}),
			F("PCDestAddress1", {'val':Chain().optional()}),
			F("PCDestAddress2", {'val':Chain().optional()}),
			F("PCDestCity", {'val':Chain().optional()}),
			F("PCDestState", {'val':Chain().optional()}),
			F("PC3FreightAmt", {'val':Chain().optional()}),
			F("PC3DutyAmt", {'val':Chain().optional()}),
			F("PC3DestCountryCd", {'val':Chain().optional()}),
			F("PC3ShipFromZip", {'val':Chain().optional()}),
			F("PC3DiscAmt", {'val':Chain().optional()}),
			F("PC3VATtaxAmt", {'val':Chain().optional()}),
			F("PC3VATtaxRate", {'val':Chain().optional()}),
			F("PC3AltTaxInd", {'val':Chain().optional()}),
			F("PC3AltTaxAmt", {'val':Chain().optional()}),
			F("PC3LineItemCount", {'val':Chain().optional()}),
			F("PC3LineItemArray", {'val':Chain().optional()}),
			F("PartialAuthInd", {'val':Chain().optional()}),
			F("AccountUpdaterEligibility", {'val':Chain().optional()}),
			F("UseStoredAAVInd", {'val':Chain().optional()}),
			F("ECPActionCode", {'val':Chain().optional()}),
			F("ECPCheckSerialNumber", {'val':Chain().optional()}),
			F("ECPTerminalCity", {'val':Chain().optional()}),
			F("ECPTerminalState", {'val':Chain().optional()}),
			F("ECPImageReferenceNumber", {'val':Chain().optional()}),
			F("CustomerAni", {'val':Chain().optional()}),
			F("AVSPhoneType", {'val':Chain().optional()}),
			F("AVSDestPhoneType", {'val':Chain().optional()}),
			F("CustomerEmail", {'val':Chain().optional()}),
			F("CustomerIpAddress", {'val':Chain().optional()}),
			F("EmailAddressSubtype", {'val':Chain().optional()}),
			F("CustomerBrowserName", {'val':Chain().optional()}),
			F("ShippingMethod", {'val':Chain().optional()}),
			F("FraudAnalysis", {'val':Chain().optional()}),
			F("SoftMerchantDescriptors", {'val':Chain().optional()}),
			F("CardIndicators", {'val':Chain().optional()}),
			F("EUDDBankBranchCode", {'val':Chain().optional()}),
			F("EUDDIBAN", {'val':Chain().optional()}),
			F("EUDDBIC", {'val':Chain().optional()}),
			F("EUDDMandateSignatureDate", {'val':Chain().optional()}),
			F("EUDDMandateID", {'val':Chain().optional()}),
			F("EUDDMandateType", {'val':Chain().optional()}),
			F("PaymentInd", {'val':Chain().optional()}),
			F("TxnSurchargeAmt", {'val':Chain().optional()}),
			F("PaymentActionInd", {'val':Chain().optional()}),
			F("DPANInd", {'val':Chain().optional()}),
			F("AEVV", {'val':Chain().optional()}),
      	        ],      
      'singular':'NewOrder'
  }),
	O('NewOrderResp',{
		'fields':[
			F("IndustryType", {'val':Chain().isString().notEmpty()}),
			F("MessageType", {'val':Chain().isString().notEmpty()}),
			F("MerchantID", {'val':Chain().isString().notEmpty()}),
			F("TerminalID", {'val':Chain().isString().notEmpty()}),
			F("CardBrand", {'val':Chain().isString().notEmpty()}),
			F("AccountNum", {'val':Chain().isString().notEmpty()}),
			F("OrderID", {'val':Chain().isString().notEmpty()}),
			F("TxRefNum", {'val':Chain().isString().notEmpty()}),
			F("TxRefIdx", {'val':Chain().isString().notEmpty()}),
			F("ProcStatus", {'val':Chain().isString().notEmpty()}),
			F("ApprovalStatus", {'val':Chain().isString().notEmpty()}),
			F("RespCode", {'val':Chain().isString().notEmpty()}),
			F("AVSRespCode", {'val':Chain().isString().notEmpty()}),
			F("CVV2RespCode", {'val':Chain().isString().notEmpty()}),
			F("AuthCode", {'val':Chain().isString().notEmpty()}),
			F("RecurringAdviceCd", {'val':Chain().isString().notEmpty()}),
			F("CAVVRespCode", {'val':Chain().isString().notEmpty()}),
			F("StatusMsg", {'val':Chain().isString().notEmpty()}),
			F("RespMsg", {'val':Chain().isString().notEmpty()}),
			F("HostRespCode", {'val':Chain().isString().notEmpty()}),
			F("HostAVSRespCode", {'val':Chain().isString().notEmpty()}),
			F("HostCVV2RespCode", {'val':Chain().isString().notEmpty()}),
			F("CustomerRefNum", {'val':Chain().isString().notEmpty()}),
			F("CustomerName", {'val':Chain().isString().notEmpty()}),
			F("ProfileProcStatus", {'val':Chain().isString().notEmpty()}),
			F("CustomerProfileMessage", {'val':Chain().isString().notEmpty()}),
			F("BillerReferenceNumber", {}),
			F("MBStatus", {}),
			F("MBMicroPaymentDaysLeft", {}),
			F("MBMicroPaymentDollarsLeft", {}),
			F("RespTime", {'val':Chain().isString().notEmpty()}),
			F("PartialAuthOccurred", {'val':Chain().isString().notEmpty()}),
			F("RequestedAmount", {'val':Chain().isString().notEmpty()}),
			F("RedeemedAmount", {'val':Chain().isString().notEmpty()}),
			F("RemainingBalance", {'val':Chain().isString().notEmpty()}),
			F("CountryFraudFilterStatus", {'val':Chain().isString().notEmpty()}),
			F("IsoCountryCode", {'val':Chain().isString().notEmpty()}),
			F("FraudScoreProcStatus", {}),
			F("FraudScoreProcMsg", {}),
			F("FraudAnalysisResponse", {}),
			F("CTIAffluentCard", {}),
			F("CTICommercialCard", {}),
			F("CTIDurbinExemption", {}),
			F("CTIHealthcareCard", {}),
			F("CTILevel3Eligible", {}),
			F("CTIPayrollCard", {}),
			F("CTIPrepaidCard", {}),
			F("CTIPINlessDebitCard", {}),
			F("CTISignatureDebitCard", {}),
			F("CTIIssuingCountry", {}),
			F("EUDDCountryCode", {}),
			F("EUDDBankSortCode", {}),
			F("EUDDRibCode", {}),
			F("EUDDBankBranchCode", {}),
			F("EUDDIBAN", {}),
			F("EUDDBIC", {}),
			F("EUDDMandateSignatureDate", {}),
			F("EUDDMandateID", {}),
			F("EUDDMandateType", {}),
		]
	}),
	O('Response',{
  	'fields':[
  		F("NewOrderResp" )
  	],
  	'singular':'Response'
  })
];



NewOrder.prototype.getSerializerType = function() {return 'NewOrder';};

NewOrder.prototype._create = function(orbital){
	this.CustomerProfileAction = "C";
	this.MerchantID = orbital.settings.mid;
}

NewOrder.prototype._remove = function(){
	this.CustomerProfileAction = "D";
}

NewOrder.prototype._update = function(){
	this.CustomerProfileAction = "U";
}

NewOrder.prototype.valid = function(cb){
	var validity = swiz.defToValve(NewOrder._defs), v = new Valve(validity.NewOrder);
	v.check(this, function(err, pristine){
		if(err) console.log(err);
		cb(err, pristine);
	});
}
module.exports = NewOrder
