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
 * Abstract base class for token filters.
 *
 */
class TokenFilter {
  /**
   * Create a TokenFilter.
   * @member {string} name The name of the token filter. It must only contain
   * letters, digits, spaces, dashes or underscores, can only start and end
   * with alphanumeric characters, and is limited to 128 characters.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of TokenFilter
   *
   * @returns {object} metadata of TokenFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TokenFilter',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'TokenFilter',
        className: 'TokenFilter',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TokenFilter;
