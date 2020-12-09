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
 * The InlineResponse2001InMemoryConfiguration model module.
 * @module model/InlineResponse2001InMemoryConfiguration
 * @version 1.0
 */
class InlineResponse2001InMemoryConfiguration {
    /**
     * Constructs a new <code>InlineResponse2001InMemoryConfiguration</code>.
     * Cache configuration.
     * @alias module:model/InlineResponse2001InMemoryConfiguration
     */
    constructor() { 
        
        InlineResponse2001InMemoryConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001InMemoryConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001InMemoryConfiguration} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001InMemoryConfiguration} The populated <code>InlineResponse2001InMemoryConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001InMemoryConfiguration();

            if (data.hasOwnProperty('defaultPutExpiration')) {
                obj['defaultPutExpiration'] = ApiClient.convertToType(data['defaultPutExpiration'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * defaultPutExpiration timeout value.
 * @member {Number} defaultPutExpiration
 */
InlineResponse2001InMemoryConfiguration.prototype['defaultPutExpiration'] = undefined;






export default InlineResponse2001InMemoryConfiguration;

