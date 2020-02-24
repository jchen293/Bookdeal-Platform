var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://swapi.co/api";
var baseUrl2 = "http://3.18.110.2:3001/api/getData";
const express = require("express");
var util = require("util");
// var tobi = require("tobi");
// var browser = tobi.createBrowser(3000, "localhost");

describe("returns detailforbooktest1", function() {
  it("returns book detail", function(done) {
    request.get({ url: baseUrl2 }, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

describe("returns detailforbooktest2", function() {
  it("returns book detail", function(done) {
    request.get({ url: baseUrl2 }, function(error, response, body) {
      const bodyObj = JSON.parse(body);
      expect(bodyObj.data[0]._id).to.equal("5c7b10737f678c357026c995");
      expect(bodyObj.data[0].title).to.equal("Computation Theory");
      expect(bodyObj.data[0].price).to.equal("1000");
      expect(bodyObj.data[0].course).to.equal("CSE");
      expect(bodyObj.data[0].owner).to.equal("jack");
      done();
    });
  });
});

describe("returns detailforbooktest4", function() {
  it("returns book detail", function(done) {
    request.get({ url: baseUrl2 }, function(error, response, body) {
      const bodyObj = JSON.parse(body);
      expect(bodyObj.data[4]._id).to.equal("5c7b11f67f678c357026c99a");
      expect(bodyObj.data[4].title).to.equal("Blockchain");
      expect(bodyObj.data[4].price).to.equal("400");
      expect(bodyObj.data[4].course).to.equal("CSE");
      expect(bodyObj.data[4].owner).to.equal("jack");
      expect(bodyObj.data[4].url).to.equal(
        "https://images-na.ssl-images-amazon.com/images/I/51Eidbl9t8L.jpg"
      );
      done();
    });
  });
});
