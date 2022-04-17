const expect = require("chai").expect;
const { assert } = require("chai");
const { response } = require("express");
const request = require('request');
const hello  = require("./hello")

const TESTING_URL = "http://localhost:3001"

describe("Right code provided", function () {
	it("right code message", function(done){

		const code = "EUR"

		if (code === "USD" || code === "EUR"){

			request.get(`${TESTING_URL}/api/getBitcoinInfo/${code}`, ()=>{
				expect(response.statusCode).to.equal(200);
				done();
			})
		}

		else {
			request.get(`${TESTING_URL}/api/getBitcoinInfo/${code}`, ()=>{
				expect(response.statusCode).to.equal(500);
				done();
			})
		}
		
	

		   
		   
	
	} )
})

