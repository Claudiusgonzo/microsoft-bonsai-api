/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/gatewayMappers";
import { SimulatorAPIContext } from "../simulatorAPIContext";

/** Class representing a Gateway. */
export class Gateway {
  private readonly client: SimulatorAPIContext;

  /**
   * Create a Gateway.
   * @param {SimulatorAPIContext} client Reference to the service client.
   */
  constructor(client: SimulatorAPIContext) {
    this.client = client;
  }

  /**
   * @summary Implementaton of the GET /v2/ping endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.GatewayPingResponse>
   */
  ping(options?: msRest.RequestOptionsBase): Promise<Models.GatewayPingResponse>;
  /**
   * @param callback The callback
   */
  ping(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  ping(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  ping(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.GatewayPingResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      pingOperationSpec,
      callback) as Promise<Models.GatewayPingResponse>;
  }

  /**
   * @summary Implementaton of the GET /v2/status endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.GatewayStatusResponse>
   */
  status(options?: msRest.RequestOptionsBase): Promise<Models.GatewayStatusResponse>;
  /**
   * @param callback The callback
   */
  status(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  status(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  status(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.GatewayStatusResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      statusOperationSpec,
      callback) as Promise<Models.GatewayStatusResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const pingOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/simgateway/ping",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {}
  },
  serializer
};

const statusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/simgateway/status",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {}
  },
  serializer
};
