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
 * @class
 * Initializes a new instance of the Server class.
 * @constructor
 * Represents a server.
 *
 * @member {string} [kind] Kind of sql server.  This is metadata used for the
 * Azure portal experience.
 *
 * @member {string} [fullyQualifiedDomainName] The fully qualified domain name
 * of the server.
 *
 * @member {string} [version] The version of the server. Possible values
 * include: '2.0', '12.0'
 *
 * @member {string} [administratorLogin] Administrator username for the server.
 * Can only be specified when the server is being created (and is required for
 * creation).
 *
 * @member {string} [administratorLoginPassword] The administrator login
 * password (required for server creation).
 *
 * @member {uuid} [externalAdministratorSid] The ID of the Active Azure
 * Directory object with admin permissions on this server. Legacy parameter,
 * always null. To check for Active Directory admin, query
 * .../servers/{serverName}/administrators.
 *
 * @member {string} [externalAdministratorLogin] The display name of the Azure
 * Active Directory object with admin permissions on this server. Legacy
 * parameter, always null. To check for Active Directory admin, query
 * .../servers/{serverName}/administrators
 *
 * @member {string} [state] The state of the server. Possible values include:
 * 'Ready', 'Disabled'
 *
 */
class Server extends models['TrackedResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Server
   *
   * @returns {object} metadata of Server
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Server',
      type: {
        name: 'Composite',
        className: 'Server',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            readOnly: true,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          fullyQualifiedDomainName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.fullyQualifiedDomainName',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'properties.version',
            type: {
              name: 'String'
            }
          },
          administratorLogin: {
            required: false,
            serializedName: 'properties.administratorLogin',
            type: {
              name: 'String'
            }
          },
          administratorLoginPassword: {
            required: false,
            serializedName: 'properties.administratorLoginPassword',
            type: {
              name: 'String'
            }
          },
          externalAdministratorSid: {
            required: false,
            readOnly: true,
            serializedName: 'properties.externalAdministratorSid',
            type: {
              name: 'String'
            }
          },
          externalAdministratorLogin: {
            required: false,
            readOnly: true,
            serializedName: 'properties.externalAdministratorLogin',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'properties.state',
            type: {
              name: 'Enum',
              allowedValues: [ 'Ready', 'Disabled' ]
            }
          }
        }
      }
    };
  }
}

module.exports = Server;