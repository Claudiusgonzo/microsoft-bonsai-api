/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/sessionMappers";
import * as Parameters from "../models/parameters";
import { SimulatorAPIContext } from "../simulatorAPIContext";

/** Class representing a Session. */
export class Session {
  private readonly client: SimulatorAPIContext;

  /**
   * Create a Session.
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
   * e.g., {.../simulatorSessions?deployment_mode=neq:Hosted} means the response should not include
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
   * {.../simulatorSessions?deployment_mode=Hosted&collection=1234-455-33333}
   * @summary Implementaton of the GET /v2/.../simulatorSessions endpoint.
   * @param workspaceName The workspace identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.SessionListResponse>
   */
  list(workspaceName: string, options?: Models.SessionListOptionalParams): Promise<Models.SessionListResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param callback The callback
   */
  list(workspaceName: string, callback: msRest.ServiceCallback<Models.SimulatorSessionSummary[]>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(workspaceName: string, options: Models.SessionListOptionalParams, callback: msRest.ServiceCallback<Models.SimulatorSessionSummary[]>): void;
  list(workspaceName: string, options?: Models.SessionListOptionalParams | msRest.ServiceCallback<Models.SimulatorSessionSummary[]>, callback?: msRest.ServiceCallback<Models.SimulatorSessionSummary[]>): Promise<Models.SessionListResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SessionListResponse>;
  }

  /**
   * Registers a simulator with the simulator gateway.
   * @summary Implementation of the POST /v2/.../simulatorSessions endpoint.
   * @param workspaceName The workspace identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.SessionCreateResponse>
   */
  create(workspaceName: string, options?: Models.SessionCreateOptionalParams): Promise<Models.SessionCreateResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param callback The callback
   */
  create(workspaceName: string, callback: msRest.ServiceCallback<Models.SimulatorSessionResponse>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(workspaceName: string, options: Models.SessionCreateOptionalParams, callback: msRest.ServiceCallback<Models.SimulatorSessionResponse>): void;
  create(workspaceName: string, options?: Models.SessionCreateOptionalParams | msRest.ServiceCallback<Models.SimulatorSessionResponse>, callback?: msRest.ServiceCallback<Models.SimulatorSessionResponse>): Promise<Models.SessionCreateResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.SessionCreateResponse>;
  }

  /**
   * Retrieves a simulator session corresponding to the sessionId
   * @summary Implementation of the GET /v2/.../simulatorSessions/{sessionId} endpoint.
   * @param workspaceName The workspace identifier.
   * @param sessionId The sessionId of the simulator session to fetch
   * @param [options] The optional parameters
   * @returns Promise<Models.SessionGetResponse>
   */
  get(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase): Promise<Models.SessionGetResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId The sessionId of the simulator session to fetch
   * @param callback The callback
   */
  get(workspaceName: string, sessionId: string, callback: msRest.ServiceCallback<Models.SimulatorSessionResponse>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId The sessionId of the simulator session to fetch
   * @param options The optional parameters
   * @param callback The callback
   */
  get(workspaceName: string, sessionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SimulatorSessionResponse>): void;
  get(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SimulatorSessionResponse>, callback?: msRest.ServiceCallback<Models.SimulatorSessionResponse>): Promise<Models.SessionGetResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        sessionId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SessionGetResponse>;
  }

  /**
   * Unregisters the simulator with the simulator gateway.
   * @summary Implementation of the DELETE /v2/.../simulators endpoint.
   * @param workspaceName The workspace identifier.
   * @param sessionId The session ID generated during registration
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId The session ID generated during registration
   * @param callback The callback
   */
  deleteMethod(workspaceName: string, sessionId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId The session ID generated during registration
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(workspaceName: string, sessionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        sessionId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the most recent action sent to the simulator to process.
   * @summary Implementation of the GET /v2/.../simulatorSessions/{sessionId}/action endpoint.
   * @param workspaceName The workspace identifier.
   * @param sessionId Unique identification of the simulator.
   * @param [options] The optional parameters
   * @returns Promise<Models.SessionGetMostRecentActionResponse>
   */
  getMostRecentAction(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase): Promise<Models.SessionGetMostRecentActionResponse>;
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
  getMostRecentAction(workspaceName: string, sessionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Event>, callback?: msRest.ServiceCallback<Models.Event>): Promise<Models.SessionGetMostRecentActionResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        sessionId,
        options
      },
      getMostRecentActionOperationSpec,
      callback) as Promise<Models.SessionGetMostRecentActionResponse>;
  }

  /**
   * @summary Implementation of the POST /v2/.../simulatorSessions/{sessionId}/advance
   * endpoint.
   * @param workspaceName The workspace identifier.
   * @param sessionId Unique identifier for the simulator.
   * @param [options] The optional parameters
   * @returns Promise<Models.SessionAdvanceResponse>
   */
  advance(workspaceName: string, sessionId: string, options?: Models.SessionAdvanceOptionalParams): Promise<Models.SessionAdvanceResponse>;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId Unique identifier for the simulator.
   * @param callback The callback
   */
  advance(workspaceName: string, sessionId: string, callback: msRest.ServiceCallback<Models.Event>): void;
  /**
   * @param workspaceName The workspace identifier.
   * @param sessionId Unique identifier for the simulator.
   * @param options The optional parameters
   * @param callback The callback
   */
  advance(workspaceName: string, sessionId: string, options: Models.SessionAdvanceOptionalParams, callback: msRest.ServiceCallback<Models.Event>): void;
  advance(workspaceName: string, sessionId: string, options?: Models.SessionAdvanceOptionalParams | msRest.ServiceCallback<Models.Event>, callback?: msRest.ServiceCallback<Models.Event>): Promise<Models.SessionAdvanceResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        sessionId,
        options
      },
      advanceOperationSpec,
      callback) as Promise<Models.SessionAdvanceResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
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

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/workspaces/{workspaceName}/simulatorSessions",
  urlParameters: [
    Parameters.workspaceName
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.SimulatorInterface
  },
  responses: {
    201: {
      bodyMapper: Mappers.SimulatorSessionResponse
    },
    400: {
      bodyMapper: Mappers.ProblemDetails
    },
    500: {},
    503: {},
    default: {}
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/workspaces/{workspaceName}/simulatorSessions/{sessionId}",
  urlParameters: [
    Parameters.workspaceName,
    Parameters.sessionId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SimulatorSessionResponse
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

const deleteMethodOperationSpec: msRest.OperationSpec = {
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
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.SimulatorState
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
