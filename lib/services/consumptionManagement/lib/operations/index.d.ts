/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * UsageDetails
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ConsumptionManagementClient.
 */
export interface UsageDetails {


    /**
     * Lists the usage details for a scope by billing period. Usage details are
     * available via this API only for May 1, 2014 or later.
     *
     * @param {string} scope The scope of the usage details. The scope can be
     * '/subscriptions/{subscriptionId}' for a subscription, or
     * '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'
     * for a billing perdiod.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.expand] May be used to expand the
     * properties/additionalProperties or properties/meterDetails within a list of
     * usage details. By default, these fields are not included when listing usage
     * details.
     *
     * @param {string} [options.filter] May be used to filter usageDetails by
     * properties/usageEnd (Utc time), properties/usageStart (Utc time),
     * properties/resourceGroup, properties/instanceName or properties/instanceId.
     * The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not
     * currently support 'ne', 'or', or 'not'.
     *
     * @param {string} [options.skiptoken] Skiptoken is only used if a previous
     * operation returned a partial result. If a previous response contains a
     * nextLink element, the value of the nextLink element will include a skiptoken
     * parameter that specifies a starting point to use for subsequent calls.
     *
     * @param {number} [options.top] May be used to limit the number of results to
     * the most recent N usageDetails.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<UsageDetailsListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(scope: string, options?: { expand? : string, filter? : string, skiptoken? : string, top? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UsageDetailsListResult>>;

    /**
     * Lists the usage details for a scope by billing period. Usage details are
     * available via this API only for May 1, 2014 or later.
     *
     * @param {string} scope The scope of the usage details. The scope can be
     * '/subscriptions/{subscriptionId}' for a subscription, or
     * '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'
     * for a billing perdiod.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.expand] May be used to expand the
     * properties/additionalProperties or properties/meterDetails within a list of
     * usage details. By default, these fields are not included when listing usage
     * details.
     *
     * @param {string} [options.filter] May be used to filter usageDetails by
     * properties/usageEnd (Utc time), properties/usageStart (Utc time),
     * properties/resourceGroup, properties/instanceName or properties/instanceId.
     * The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not
     * currently support 'ne', 'or', or 'not'.
     *
     * @param {string} [options.skiptoken] Skiptoken is only used if a previous
     * operation returned a partial result. If a previous response contains a
     * nextLink element, the value of the nextLink element will include a skiptoken
     * parameter that specifies a starting point to use for subsequent calls.
     *
     * @param {number} [options.top] May be used to limit the number of results to
     * the most recent N usageDetails.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {UsageDetailsListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {UsageDetailsListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link UsageDetailsListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(scope: string, options?: { expand? : string, filter? : string, skiptoken? : string, top? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.UsageDetailsListResult>;
    list(scope: string, callback: ServiceCallback<models.UsageDetailsListResult>): void;
    list(scope: string, options: { expand? : string, filter? : string, skiptoken? : string, top? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UsageDetailsListResult>): void;


    /**
     * Lists the usage details for a scope by billing period. Usage details are
     * available via this API only for May 1, 2014 or later.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<UsageDetailsListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UsageDetailsListResult>>;

    /**
     * Lists the usage details for a scope by billing period. Usage details are
     * available via this API only for May 1, 2014 or later.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {UsageDetailsListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {UsageDetailsListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link UsageDetailsListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.UsageDetailsListResult>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.UsageDetailsListResult>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UsageDetailsListResult>): void;
}

/**
 * @class
 * Operations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ConsumptionManagementClient.
 */
export interface Operations {


    /**
     * Lists all of the available consumption REST API operations.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<OperationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationListResult>>;

    /**
     * Lists all of the available consumption REST API operations.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {OperationListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {OperationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationListResult>;
    list(callback: ServiceCallback<models.OperationListResult>): void;
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationListResult>): void;


    /**
     * Lists all of the available consumption REST API operations.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<OperationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationListResult>>;

    /**
     * Lists all of the available consumption REST API operations.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {OperationListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {OperationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationListResult>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.OperationListResult>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationListResult>): void;
}