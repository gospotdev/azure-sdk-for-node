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
 * The 'Data 0' network interface card settings.
 *
 */
class NetworkInterfaceData0Settings {
  /**
   * Create a NetworkInterfaceData0Settings.
   * @member {string} [controllerZeroIp] The controller 0's IPv4 address.
   * @member {string} [controllerOneIp] The controller 1's IPv4 address.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NetworkInterfaceData0Settings
   *
   * @returns {object} metadata of NetworkInterfaceData0Settings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkInterfaceData0Settings',
      type: {
        name: 'Composite',
        className: 'NetworkInterfaceData0Settings',
        modelProperties: {
          controllerZeroIp: {
            required: false,
            serializedName: 'controllerZeroIp',
            type: {
              name: 'String'
            }
          },
          controllerOneIp: {
            required: false,
            serializedName: 'controllerOneIp',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkInterfaceData0Settings;
