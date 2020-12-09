/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JansConfigApi);
  }
}(this, function(expect, JansConfigApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JansConfigApi.InlineResponse2003();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2003', function() {
    it('should create an instance of InlineResponse2003', function() {
      // uncomment below and update the code to test InlineResponse2003
      //var instane = new JansConfigApi.InlineResponse2003();
      //expect(instance).to.be.a(JansConfigApi.InlineResponse2003);
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instane = new JansConfigApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instane = new JansConfigApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property requiresSsl (base name: "requires-ssl")', function() {
      // uncomment below and update the code to test the property requiresSsl
      //var instane = new JansConfigApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property trustHost (base name: "trust-host")', function() {
      // uncomment below and update the code to test the property trustHost
      //var instane = new JansConfigApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property fromName (base name: "from-name")', function() {
      // uncomment below and update the code to test the property fromName
      //var instane = new JansConfigApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property fromEmailAddress (base name: "from-email-address")', function() {
      // uncomment below and update the code to test the property fromEmailAddress
      //var instane = new JansConfigApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property requiresAuthentication (base name: "requires-authentication")', function() {
      // uncomment below and update the code to test the property requiresAuthentication
      //var instane = new JansConfigApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "user-name")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new JansConfigApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new JansConfigApi.InlineResponse2003();
      //expect(instance).to.be();
    });

  });

}));
