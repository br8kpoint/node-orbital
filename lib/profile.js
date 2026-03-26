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

Profile.prototype.getSerializerType = function() {return 'Profile';};

Profile.prototype._create = function(orbital){
	this.customerProfileAction = "C";
	this.customerMerchantID = orbital.settings.mid;
	this.customerBin = orbital.settings.bin;

}

Profile.prototype._remove = function(){
	this.customerProfileAction = "D";
	this.mbRecurringFrequency = null;		// remove recurring frequency on delete
}

Profile.prototype._update = function(){
	this.customerProfileAction = "U";
}
Profile.prototype.response = function(response, orbital, cb){
	// add back in the connection settings
  	response.profileResp.orbitalConnectionUsername = orbital.settings.username;
	response.profileResp.orbitalConnectionPassword = orbital.settings.password;
	response.profileResp.customerMerchantID = orbital.settings.mid;
	response.profileResp.customerBin = orbital.settings.bin;
	if(response.quickResponse){
		return cb(new ChaseError(response.quickResponse.profileProcStatus, response.quickResponse.customerProfileMessage), response)
	}
	if(response.profileResp.profileProcStatus > 0){
		return cb(new ChaseError(response.profileResp.profileProcStatus, response.profileResp.customerProfileMessage), response)
	}
	response.profileResp.customerProfileAction = "C"; //switch the CREATE response from chase back to "C" when everything is good.
	console.log("Profile response:")
	console.log(response.profileResp)
  	cb(null, new Profile(response.profileResp));
}
module.exports = Profile
