/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Request parameters for a KeyCredentials update operation
 *
 */
class KeyCredentialsUpdateParameters {
  /**
   * Create a KeyCredentialsUpdateParameters.
   * @member {array} value A collection of KeyCredentials.
   */
  constructor() {
  }

  /**
   * Defines the metadata of KeyCredentialsUpdateParameters
   *
   * @returns {object} metadata of KeyCredentialsUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyCredentialsUpdateParameters',
      type: {
        name: 'Composite',
        className: 'KeyCredentialsUpdateParameters',
        modelProperties: {
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'KeyCredentialElementType',
                  type: {
                    name: 'Composite',
                    className: 'KeyCredential'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = KeyCredentialsUpdateParameters;
