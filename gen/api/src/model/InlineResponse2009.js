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
 * The InlineResponse2009 model module.
 * @module model/InlineResponse2009
 * @version 1.0
 */
class InlineResponse2009 {
    /**
     * Constructs a new <code>InlineResponse2009</code>.
     * UMAResource
     * @alias module:model/InlineResponse2009
     * @param id {String} Resource id.
     * @param name {String} A human-readable name of the scope.
     */
    constructor(id, name) { 
        
        InlineResponse2009.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
            if (data.hasOwnProperty('scopeExpression')) {
                obj['scopeExpression'] = ApiClient.convertToType(data['scopeExpression'], ['String']);
            }
            if (data.hasOwnProperty('clients')) {
                obj['clients'] = ApiClient.convertToType(data['clients'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Resource id.
 * @member {String} id
 */
InlineResponse2009.prototype['id'] = undefined;

/**
 * A human-readable name of the scope.
 * @member {String} name
 */
InlineResponse2009.prototype['name'] = undefined;

/**
 * A URL for a graphic icon representing the resource.
 * @member {String} iconUrl
 */
InlineResponse2009.prototype['iconUrl'] = undefined;

/**
 * Applicable resource scopes.
 * @member {Array.<String>} scopes
 */
InlineResponse2009.prototype['scopes'] = undefined;

/**
 * List of resource scope expression.
 * @member {Array.<String>} scopeExpression
 */
InlineResponse2009.prototype['scopeExpression'] = undefined;

/**
 * List of associated clients.
 * @member {Array.<String>} clients
 */
InlineResponse2009.prototype['clients'] = undefined;






export default InlineResponse2009;

