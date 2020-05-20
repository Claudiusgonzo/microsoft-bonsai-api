/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/simulatorSessionOperationsMappers";
import * as Parameters from "../models/parameters";
import { SimulatorAPIContext } from "../simulatorAPIContext";

/** Class representing a SimulatorSessionOperations. */
export class SimulatorSessionOperations {
  private readonly client: SimulatorAPIContext;

  /**
   * Create a SimulatorSessionOperations.
   * @param {SimulatorAPIContext} client Reference to the service client.
   */
  constructor(client: SimulatorAPIContext) {
    this.client = client;
  }

  /**
   * Retrieves all of the simulators currently registered with all
   * simulator gateways within this workspace.
   *
   * The deployment_mode appears in the query string. It can be one of
   * Unspecified, Testing, or Hosted. If it has a 'neq:' prefix, that means "not;"
   * e.g., .../simulatorSessions?deployment_mode=neq:Hosted means the response should not include
   * simulators that are hosted.
   *
   * The session_status can be one of Attachable, Attached, Detaching, Rejected,
   * and supports the neq: prefix.
   *
   * The collection appears in the query string
   *
   * The package appears in the query string
   *
   * The filter queries can appear together, like
   * .../simulatorSessions?deployment_mode=Hosted&collection=1234-455-33333
   * @summary Implementaton of the GET /v2/.../simulatorSessions endpoint.
   * @param workspaceName The workspace identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.SimulatorSessionListSessionsResponse>
   */
  listSessions(workspaceName: string, options?: Models.SimulatorSessionListSessionsOptionalParams): Promise<Models.SimulatorSessionListSessionsResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param callback The callback
   */
  listSessions(workspaceName: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  listSessions(workspaceName: string, options: Models.SimulatorSessionListSessionsOptionalParams, callback: msRest.ServiceCallback<any>): void;
  listSessions(workspaceName: string, options?: Models.SimulatorSessionListSessionsOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SimulatorSessionListSessionsResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        options
      },
      listSessionsOperationSpec,
      callback) as Promise<Models.SimulatorSessionListSessionsResponse>;
  }

  /**
   * Registers a simulator with the simulator gateway.
   * @summary Implementation of the POST /v2/.../simulatorSessions endpoint.
   * @param workspaceName The workspace identifier.
   * @param registrationInfo Information and capabilities about the simulator.
   * @param [options] The optional parameters
   * @returns Promise<Models.SimulatorSessionRegisterSimulatorResponse>
   */
  registerSimulator(workspaceName: string, registrationInfo: Models.SimulatorInterface, options?: msRest.RequestOptionsBase): Promise<Models.SimulatorSessionRegisterSimulatorResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param registrationInfo Information and capabilities about the simulator.
   * @param callback The callback
   */
  registerSimulator(workspaceName: string, registrationInfo: Models.SimulatorInterface, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param registrationInfo Information and capabilities about the simulator.
   * @param options The optional parameters
   * @param callback The callback
   */
  registerSimulator(workspaceName: string, registrationInfo: Models.SimulatorInterface, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  registerSimulator(workspaceName: string, registrationInfo: Models.SimulatorInterface, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SimulatorSessionRegisterSimulatorResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        registrationInfo,
        options
      },
      registerSimulatorOperationSpec,
      callback) as Promise<Models.SimulatorSessionRegisterSimulatorResponse>;
  }

  /**
   * Retrieves a simulator session corresponding to the sessionId
   * @summary Implementaton of the GET /v2/.../simulatorSessions/{sessionId} endpoint.
   * @param workspaceName The workspace identifier.
   * @param sessionId The sessionId of the simulator session to fetch
   * @param [options] The optional parameters
   * @returns Promise<Models.SimulatorSessionDescribeOneSessionResponse>
   */
  describeOneSession(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase): Promise<Models.SimulatorSessionDescribeOneSessionResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId The sessionId of the simulator session to fetch
   * @param callback The callback
   */
  describeOneSession(workspaceName: string, sessionId: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId The sessionId of the simulator session to fetch
   * @param options The optional parameters
   * @param callback The callback
   */
  describeOneSession(workspaceName: string, sessionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  describeOneSession(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SimulatorSessionDescribeOneSessionResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        sessionId,
        options
      },
      describeOneSessionOperationSpec,
      callback) as Promise<Models.SimulatorSessionDescribeOneSessionResponse>;
  }

  /**
   * Unregisters the simulator with the simulator gateway.
   * @summary Implementation of the DELETE /v2/.../simulators endpoint.
   * @param workspaceName The workspace identifier.
   * @param sessionId The session ID generated during registration
   * @param [options] The optional parameters
   * @returns Promise<Models.SimulatorSessionDeregisterSimulatorResponse>
   */
  deregisterSimulator(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase): Promise<Models.SimulatorSessionDeregisterSimulatorResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId The session ID generated during registration
   * @param callback The callback
   */
  deregisterSimulator(workspaceName: string, sessionId: string, callback: msRest.ServiceCallback<Models.ProblemDetails>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId The session ID generated during registration
   * @param options The optional parameters
   * @param callback The callback
   */
  deregisterSimulator(workspaceName: string, sessionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProblemDetails>): void;
  deregisterSimulator(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProblemDetails>, callback?: msRest.ServiceCallback<Models.ProblemDetails>): Promise<Models.SimulatorSessionDeregisterSimulatorResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        sessionId,
        options
      },
      deregisterSimulatorOperationSpec,
      callback) as Promise<Models.SimulatorSessionDeregisterSimulatorResponse>;
  }

  /**
   * Gets the most recent action sent to the simulator to process.
   * @summary Implementation of the GET /v2/.../simulatorSessions/{sessionId}/action endpoint.
   * @param workspaceName The workspace identifier.
   * @param sessionId Unique identification of the simulator.
   * @param [options] The optional parameters
   * @returns Promise<Models.SimulatorSessionGetMostRecentActionResponse>
   */
  getMostRecentAction(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase): Promise<Models.SimulatorSessionGetMostRecentActionResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId Unique identification of the simulator.
   * @param callback The callback
   */
  getMostRecentAction(workspaceName: string, sessionId: string, callback: msRest.ServiceCallback<Models.Event>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId Unique identification of the simulator.
   * @param options The optional parameters
   * @param callback The callback
   */
  getMostRecentAction(workspaceName: string, sessionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Event>): void;
  getMostRecentAction(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Event>, callback?: msRest.ServiceCallback<Models.Event>): Promise<Models.SimulatorSessionGetMostRecentActionResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        sessionId,
        options
      },
      getMostRecentActionOperationSpec,
      callback) as Promise<Models.SimulatorSessionGetMostRecentActionResponse>;
  }

  /**
   * @summary Implementation of the POST /v2/.../simulatorSessions/{sessionId}/advance
   * endpoint.
   * @param workspaceName The workspace identifier.
   * @param sessionId Unique identifier for the simulator.
   * @param state The new state of the simulator.
   * @param [options] The optional parameters
   * @returns Promise<Models.SimulatorSessionAdvanceResponse>
   */
  advance(workspaceName: string, sessionId: string, state: Models.SimulatorState, options?: msRest.RequestOptionsBase): Promise<Models.SimulatorSessionAdvanceResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId Unique identifier for the simulator.
   * @param state The new state of the simulator.
   * @param callback The callback
   */
  advance(workspaceName: string, sessionId: string, state: Models.SimulatorState, callback: msRest.ServiceCallback<Models.Event>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId Unique identifier for the simulator.
   * @param state The new state of the simulator.
   * @param options The optional parameters
   * @param callback The callback
   */
  advance(workspaceName: string, sessionId: string, state: Models.SimulatorState, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Event>): void;
  advance(workspaceName: string, sessionId: string, state: Models.SimulatorState, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Event>, callback?: msRest.ServiceCallback<Models.Event>): Promise<Models.SimulatorSessionAdvanceResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        sessionId,
        state,
        options
      },
      advanceOperationSpec,
      callback) as Promise<Models.SimulatorSessionAdvanceResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listSessionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/workspaces/{workspaceName}/simulatorSessions",
  urlParameters: [
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.deploymentMode,
    Parameters.sessionStatus,
    Parameters.collection,
    Parameters.packageParameter
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SimulatorSessionSummary"
            }
          }
        }
      }
    },
    400: {
      bodyMapper: Mappers.ProblemDetails
    },
    500: {},
    default: {}
  },
  serializer
};

const registerSimulatorOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/workspaces/{workspaceName}/simulatorSessions",
  urlParameters: [
    Parameters.workspaceName
  ],
  requestBody: {
    parameterPath: "registrationInfo",
    mapper: {
      ...Mappers.SimulatorInterface,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.SimulatorSession
    },
    400: {
      bodyMapper: Mappers.ProblemDetails
    },
    500: {},
    default: {}
  },
  serializer
};

const describeOneSessionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/workspaces/{workspaceName}/simulatorSessions/{sessionId}",
  urlParameters: [
    Parameters.workspaceName,
    Parameters.sessionId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SimulatorSession
    },
    400: {
      bodyMapper: Mappers.ProblemDetails
    },
    404: {
      bodyMapper: Mappers.ProblemDetails
    },
    500: {},
    default: {}
  },
  serializer
};

const deregisterSimulatorOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "v2/workspaces/{workspaceName}/simulatorSessions/{sessionId}",
  urlParameters: [
    Parameters.workspaceName,
    Parameters.sessionId
  ],
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.ProblemDetails
    },
    404: {
      bodyMapper: Mappers.ProblemDetails
    },
    500: {},
    default: {}
  },
  serializer
};

const getMostRecentActionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/workspaces/{workspaceName}/simulatorSessions/{sessionId}/action",
  urlParameters: [
    Parameters.workspaceName,
    Parameters.sessionId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Event
    },
    default: {}
  },
  serializer
};

const advanceOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/workspaces/{workspaceName}/simulatorSessions/{sessionId}/advance",
  urlParameters: [
    Parameters.workspaceName,
    Parameters.sessionId
  ],
  requestBody: {
    parameterPath: "state",
    mapper: {
      ...Mappers.SimulatorState,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Event
    },
    500: {},
    default: {}
  },
  serializer
};
