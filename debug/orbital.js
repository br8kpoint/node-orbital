var Orbital = require("../index").Orbital;
var Profile = require("../index").Profile;
var testconfig = require("../testconfig.js")

var CustomerRefNum = "Test_" + Math.floor(Math.random() * 100) 
var profile = new Profile({
		CustomerRefNum: CustomerRefNum,
		CustomerProfileFromOrderInd: "S",
		CustomerBin: "000001",
		CustomerProfileOrderOverrideInd: "OI",
		CustomerAccountType: "CC",
		CCAccountNum: "5191230132065377",
		CCExpiryDate: "0616"
	})
var orbital = new Orbital(testconfig)
orbital.create(profile, function(err, response){
	if(err) throw err;
	for(var prop in response){
		response[prop].should.equal(profile[prop])
	}
	done();
});