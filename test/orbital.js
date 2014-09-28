var should = require ("chai").should();
var expect = require("chai").expect;
var Orbital = require("../index").Orbital;
var Profile = require("../index").Profile;
var NewOrder = require("../index").NewOrder;
var testconfig = require("../testconfig.js")
describe("Configuration", function(){
	it("Should throw an exception if no username specified",function(){
		should.throw(function(){
			new Orbital();
		})
	})
	it("Should throw an exception if no password specified",function(){
		should.throw(function(){
			new Orbital({username:"test"});
		})
	})
	it("Should throw an exception if no mid specified",function(){
		should.throw(function(){
			new Orbital({
				username:"test",
				password:"test"
			});
		})
	})
	it("Should not throw an exception if all required prarameters are specified", function(){
		should.not.throw(function(){
			new Orbital({
				username:"test",
				password:"test",
				mid:"XXXXXX"
			})
		})
	})
})

describe("Profiles", function(){
	var orbital = new Orbital(testconfig)
	describe("#addProfile", function(){
		var CustomerRefNum = "Test_" + Math.floor(Math.random() * 10000) 
		CustomerRefNum = CustomerRefNum.toUpperCase() // need to make upper case because chase converts to upper case.
		var profile = new Profile({
				CustomerRefNum: CustomerRefNum,
				CustomerProfileFromOrderInd: "S",
				CustomerBin: "000001",
				CustomerProfileOrderOverrideInd: "OI",
				CustomerAccountType: "CC",
				CCAccountNum: "5191230132065377",
				CCExpiryDate: "0616"
			})
		after(function(done){
			orbital.remove(profile, function(err, result){
				done(err, result);
			})
		})
		it("Should add a profile", function(done){

			orbital.create(profile, function(err, response){
				if(err) return done(err);				
				done();
			});

		})
	})
	describe("retrieveProfile", function(){
		it("Should retrieve a profile", function(done){
			var request = new Profile({
				CustomerRefNum: 37373646,
				CustomerBin: "000001",
				CustomerProfileAction:"R"				
			})
			orbital.retrieve(request, function(err, profile){				
				done(err,profile);
			})
		})
	})
	describe("retrieveNonProfile", function(){
		it("Should throw an error when the profile doesn't exist", function(done){
			var request = new Profile({
				CustomerRefNum: "I do not exist",
				CustomerBin: "000001",
				CustomerProfileAction:"R"				
			})
			orbital.retrieve(request, function(err, profile){
				expect(err).to.be.an.instanceof(Error);				
				done();
			})
		})
	})
	describe("updateProfile", function(){
		var CustomerRefNum = "Test_" + Math.floor(Math.random() * 10000)
		CustomerRefNum = CustomerRefNum.toUpperCase(); 
		var profile = new Profile({
			CustomerRefNum: CustomerRefNum,
			CustomerProfileFromOrderInd: "S",
			CustomerBin: "000001",
			CustomerProfileOrderOverrideInd: "OI",
			CustomerAccountType: "CC",
			CCAccountNum: "5191230132065377",
			CCExpiryDate: "0616"
		})
		before(function(done){			
			orbital.create(profile, function(err, response){
				if(response.CustomerRefNum == CustomerRefNum){
					done(err, response);
				}else{
					done(new Error("CustomerRefNum doesn't match"), null)
				}
			})
		})
		after(function(done){			
			orbital.remove(profile, function(err, response){
				done(err, response);
			})
		})
		it("Should update a profile", function(done){
			this.timeout(4000);
			var request = new Profile({
				CustomerRefNum: CustomerRefNum,
				CustomerBin: "000001",
				CustomerProfileAction:"R"				
			})
			orbital.retrieve(request, function(err, response){
				if(err) return done(err);
				response.CustomerAddress1 = "Updated Address";
				response.CustomerAddress2 = "Updated Address 2"
				orbital.update(response, function(err, updated){
					if(err) return done(err);
					updated.CustomerAddress1.toUpperCase().should.equal(response.CustomerAddress1.toUpperCase());
					updated.CustomerAddress2.toUpperCase().should.equal(response.CustomerAddress2.toUpperCase());
					done(err, updated);
				})
			})
		})
	})
})

describe("NewOrder", function(){
	var orbital = new Orbital(testconfig)
	describe("#addNewOrder", function(){
		var order = new NewOrder({
				IndustryType: "EC",
				MessageType: "AC",
				BIN: "000001",				
				TerminalID:"001",
				CardBrand:"",
				AccountNum: "5454545454545454",
				Exp : "0112",
				CurrencyCode: "840",
				CurrencyExponent:"2",
				AVSzip: "25541",
				AVSaddress1: "123 Test Street",
				AVSaddress2:"Suite 350",
				AVScity: "Test City",
				AVSstate: "FL",
				AVSphoneNum: "8004564512",
				OrderID: "8316384413",
				Amount: "2500"
			})
		it("Should add an order", function(done){

			orbital.create(order, function(err, response){
				console.log(response);
				if(err) return done(err);				
				done();
			});

		})
	})
})