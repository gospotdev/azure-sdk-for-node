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

/**
 * Collection of recovery point details.
 */
class RecoveryPointCollection extends Array {
  /**
   * Create a RecoveryPointCollection.
   * @member {string} [nextLink] The value of next link.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RecoveryPointCollection
   *
   * @returns {object} metadata of RecoveryPointCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecoveryPointCollection',
      type: {
        name: 'Composite',
        className: 'RecoveryPointCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RecoveryPointElementType',
                  type: {
                    name: 'Composite',
                    className: 'RecoveryPoint'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RecoveryPointCollection;