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

import ApiClient from '../ApiClient';

/**
 * The InlineObject1 model module.
 * @module model/InlineObject1
 * @version 1.0
 */
class InlineObject1 {
    /**
     * Constructs a new <code>InlineObject1</code>.
     * Cache Configuration
     * @alias module:model/InlineObject1
     */
    constructor() { 
        
        InlineObject1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject1} obj Optional instance to populate.
     * @return {module:model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject1();

            if (data.hasOwnProperty('redisProviderType')) {
                obj['redisProviderType'] = ApiClient.convertToType(data['redisProviderType'], 'String');
            }
            if (data.hasOwnProperty('servers')) {
                obj['servers'] = ApiClient.convertToType(data['servers'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('defaultPutExpiration')) {
                obj['defaultPutExpiration'] = ApiClient.convertToType(data['defaultPutExpiration'], 'Number');
            }
            if (data.hasOwnProperty('sentinelMasterGroupName')) {
                obj['sentinelMasterGroupName'] = ApiClient.convertToType(data['sentinelMasterGroupName'], 'String');
            }
            if (data.hasOwnProperty('useSSL')) {
                obj['useSSL'] = ApiClient.convertToType(data['useSSL'], 'Boolean');
            }
            if (data.hasOwnProperty('sslTrustStoreFilePath')) {
                obj['sslTrustStoreFilePath'] = ApiClient.convertToType(data['sslTrustStoreFilePath'], 'String');
            }
            if (data.hasOwnProperty('maxIdleConnections')) {
                obj['maxIdleConnections'] = ApiClient.convertToType(data['maxIdleConnections'], 'Number');
            }
            if (data.hasOwnProperty('maxTotalConnections')) {
                obj['maxTotalConnections'] = ApiClient.convertToType(data['maxTotalConnections'], 'Number');
            }
            if (data.hasOwnProperty('connectionTimeout')) {
                obj['connectionTimeout'] = ApiClient.convertToType(data['connectionTimeout'], 'Number');
            }
            if (data.hasOwnProperty('soTimeout')) {
                obj['soTimeout'] = ApiClient.convertToType(data['soTimeout'], 'Number');
            }
            if (data.hasOwnProperty('maxRetryAttempts')) {
                obj['maxRetryAttempts'] = ApiClient.convertToType(data['maxRetryAttempts'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Type of connection.
 * @member {module:model/InlineObject1.RedisProviderTypeEnum} redisProviderType
 */
InlineObject1.prototype['redisProviderType'] = undefined;

/**
 * server details separated by comma e.g. 'server1:8080server2:8081'.
 * @member {String} servers
 */
InlineObject1.prototype['servers'] = undefined;

/**
 * Redis password.
 * @member {String} password
 */
InlineObject1.prototype['password'] = undefined;

/**
 * defaultPutExpiration timeout value.
 * @member {Number} defaultPutExpiration
 */
InlineObject1.prototype['defaultPutExpiration'] = undefined;

/**
 * Sentinel Master Group Name (required if SENTINEL type of connection is selected).
 * @member {String} sentinelMasterGroupName
 */
InlineObject1.prototype['sentinelMasterGroupName'] = undefined;

/**
 * Enable SSL communication between Gluu Server and Redis cache.
 * @member {Boolean} useSSL
 */
InlineObject1.prototype['useSSL'] = undefined;

/**
 * Directory Path to Trust Store.
 * @member {String} sslTrustStoreFilePath
 */
InlineObject1.prototype['sslTrustStoreFilePath'] = undefined;

/**
 * The cap on the number of \\idle\\ instances in the pool. If max idle is set too low on heavily loaded systems it is possible you will see objects being destroyed and almost immediately new objects being created. This is a result of the active threads momentarily returning objects faster than they are requesting them causing the number of idle objects to rise above max idle. The best value for max idle for heavily loaded system will vary but the default is a good starting point.
 * @member {Number} maxIdleConnections
 */
InlineObject1.prototype['maxIdleConnections'] = undefined;

/**
 * The number of maximum connection instances in the pool.
 * @member {Number} maxTotalConnections
 */
InlineObject1.prototype['maxTotalConnections'] = undefined;

/**
 * Connection time out.
 * @member {Number} connectionTimeout
 */
InlineObject1.prototype['connectionTimeout'] = undefined;

/**
 * With this option set to a non-zero timeout a read() call on the InputStream associated with this Socket will block for only this amount of time. If the timeout expires a java.net.SocketTimeoutException is raised though the Socket is still valid. The option must be enabled prior to entering the blocking operation to have effect. The timeout must be > 0. A timeout of zero is interpreted as an infinite timeout.
 * @member {Number} soTimeout
 */
InlineObject1.prototype['soTimeout'] = undefined;

/**
 * Maximum retry attempts in case of failure.
 * @member {Number} maxRetryAttempts
 */
InlineObject1.prototype['maxRetryAttempts'] = undefined;





/**
 * Allowed values for the <code>redisProviderType</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject1['RedisProviderTypeEnum'] = {

    /**
     * value: "STANDALONE"
     * @const
     */
    "STANDALONE": "STANDALONE",

    /**
     * value: "CLUSTER"
     * @const
     */
    "CLUSTER": "CLUSTER",

    /**
     * value: "SHARDED"
     * @const
     */
    "SHARDED": "SHARDED",

    /**
     * value: "SENTINEL"
     * @const
     */
    "SENTINEL": "SENTINEL"
};



export default InlineObject1;

