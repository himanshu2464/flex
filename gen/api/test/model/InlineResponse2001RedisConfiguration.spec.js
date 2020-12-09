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
    instance = new JansConfigApi.InlineResponse2001RedisConfiguration();
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

  describe('InlineResponse2001RedisConfiguration', function() {
    it('should create an instance of InlineResponse2001RedisConfiguration', function() {
      // uncomment below and update the code to test InlineResponse2001RedisConfiguration
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be.a(JansConfigApi.InlineResponse2001RedisConfiguration);
    });

    it('should have the property redisProviderType (base name: "redisProviderType")', function() {
      // uncomment below and update the code to test the property redisProviderType
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property servers (base name: "servers")', function() {
      // uncomment below and update the code to test the property servers
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property defaultPutExpiration (base name: "defaultPutExpiration")', function() {
      // uncomment below and update the code to test the property defaultPutExpiration
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property sentinelMasterGroupName (base name: "sentinelMasterGroupName")', function() {
      // uncomment below and update the code to test the property sentinelMasterGroupName
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property useSSL (base name: "useSSL")', function() {
      // uncomment below and update the code to test the property useSSL
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property sslTrustStoreFilePath (base name: "sslTrustStoreFilePath")', function() {
      // uncomment below and update the code to test the property sslTrustStoreFilePath
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property maxIdleConnections (base name: "maxIdleConnections")', function() {
      // uncomment below and update the code to test the property maxIdleConnections
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property maxTotalConnections (base name: "maxTotalConnections")', function() {
      // uncomment below and update the code to test the property maxTotalConnections
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property connectionTimeout (base name: "connectionTimeout")', function() {
      // uncomment below and update the code to test the property connectionTimeout
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property soTimeout (base name: "soTimeout")', function() {
      // uncomment below and update the code to test the property soTimeout
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property maxRetryAttempts (base name: "maxRetryAttempts")', function() {
      // uncomment below and update the code to test the property maxRetryAttempts
      //var instane = new JansConfigApi.InlineResponse2001RedisConfiguration();
      //expect(instance).to.be();
    });

  });

}));
