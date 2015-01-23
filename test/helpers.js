'use strict';

/*jsl predef:define*/
/*jsl predef:it*/

var Validator = require('../lib/validator');
var expect = require('chai').expect;

describe('Helpers', function () {

  beforeEach(function () {
    this.validator = new Validator();
  });

  describe('ValidationError', function () {
    it('should not throw ValidationError with throwError = false', function () {
      var self = this;
      var fn = function() { 
          self.validator.validate(0, {'type': 'object'});
      };
      expect(fn).to.not.throw();
    });

    it('should throw ValidationError with throwError = true', function () {
      var self = this;
      var fn = function() { 
          self.validator.validate(0, {'type': 'object'}, {throwError: true});
      };
      expect(fn).to.throw();
    });

    it('should be instanceof Error', function () {
      try {
        this.validator.validate(0, {'type': 'object'}, {throwError: true});
      } catch (error) {
        expect(error instanceof Error).to.be.true;
      }
    });
  });
});
