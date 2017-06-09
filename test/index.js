var assert      = require('assert');
var fluxmitter  = require("../index.js");

describe('Fluxmitter', function() {
  describe('Module', function() {

    it('should return as a function', function() {
      assert.equal(typeof(fluxmitter),"function");
    });

  });

  var testdata  = {testvalue:123};
  var emitter   = fluxmitter(testdata);

  describe('fluxmitter(source)', function() {

    it('should return an object', function() {
      assert.equal(typeof(fluxmitter),"function");
    });

    it('should contain all original attributes', function() {
      assert.equal(emitter.testvalue,testdata.testvalue);
    });


  });

  describe('emitter.on()', function() {
    it('should return null without valid arguments', function() {
      assert.equal(emitter.on(null,null),null);
    });

    it('return an event id with valid arguments', function() {
      assert.equal(typeof(emitter.on("event",function(){})),"number");
    });

  });

});
