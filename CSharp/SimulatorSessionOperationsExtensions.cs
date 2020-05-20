// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Bonsai.SimulatorAPI
{
    using Models;
    using System.Threading;
    using System.Threading.Tasks;

    /// <summary>
    /// Extension methods for SimulatorSessionOperations.
    /// </summary>
    public static partial class SimulatorSessionOperationsExtensions
    {
            /// <summary>
            /// Implementaton of the GET /v2/.../simulatorSessions endpoint.
            /// </summary>
            /// <remarks>
            /// Retrieves all of the simulators currently registered with all
            /// simulator gateways within this workspace.
            ///
            /// The deployment_mode appears in the query string. It can be one of
            /// Unspecified, Testing, or Hosted. If it has a 'neq:' prefix, that means
            /// "not;"
            /// e.g., .../simulatorSessions?deployment_mode=neq:Hosted means the response
            /// should not include
            /// simulators that are hosted.
            ///
            /// The session_status can be one of Attachable, Attached, Detaching, Rejected,
            /// and supports the neq: prefix.
            ///
            /// The collection appears in the query string
            ///
            /// The package appears in the query string
            ///
            /// The filter queries can appear together, like
            /// .../simulatorSessions?deployment_mode=Hosted&amp;collection=1234-455-33333
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='deploymentMode'>
            /// A specifier to filter on deployment mode
            /// </param>
            /// <param name='sessionStatus'>
            /// A specifier to filter on session status
            /// </param>
            /// <param name='collection'>
            /// If present, only sessions in this collection
            /// </param>
            /// <param name='package'>
            /// If present, only sessions in this package
            /// </param>
            public static object ListSessions(this ISimulatorSessionOperations operations, string workspaceName, string deploymentMode = default(string), string sessionStatus = default(string), string collection = default(string), string package = default(string))
            {
                return operations.ListSessionsAsync(workspaceName, deploymentMode, sessionStatus, collection, package).GetAwaiter().GetResult();
            }

            /// <summary>
            /// Implementaton of the GET /v2/.../simulatorSessions endpoint.
            /// </summary>
            /// <remarks>
            /// Retrieves all of the simulators currently registered with all
            /// simulator gateways within this workspace.
            ///
            /// The deployment_mode appears in the query string. It can be one of
            /// Unspecified, Testing, or Hosted. If it has a 'neq:' prefix, that means
            /// "not;"
            /// e.g., .../simulatorSessions?deployment_mode=neq:Hosted means the response
            /// should not include
            /// simulators that are hosted.
            ///
            /// The session_status can be one of Attachable, Attached, Detaching, Rejected,
            /// and supports the neq: prefix.
            ///
            /// The collection appears in the query string
            ///
            /// The package appears in the query string
            ///
            /// The filter queries can appear together, like
            /// .../simulatorSessions?deployment_mode=Hosted&amp;collection=1234-455-33333
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='deploymentMode'>
            /// A specifier to filter on deployment mode
            /// </param>
            /// <param name='sessionStatus'>
            /// A specifier to filter on session status
            /// </param>
            /// <param name='collection'>
            /// If present, only sessions in this collection
            /// </param>
            /// <param name='package'>
            /// If present, only sessions in this package
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<object> ListSessionsAsync(this ISimulatorSessionOperations operations, string workspaceName, string deploymentMode = default(string), string sessionStatus = default(string), string collection = default(string), string package = default(string), CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var _result = await operations.ListSessionsWithHttpMessagesAsync(workspaceName, deploymentMode, sessionStatus, collection, package, null, cancellationToken).ConfigureAwait(false))
                {
                    return _result.Body;
                }
            }

            /// <summary>
            /// Implementation of the POST /v2/.../simulatorSessions endpoint.
            /// </summary>
            /// <remarks>
            /// Registers a simulator with the simulator gateway.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='registrationInfo'>
            /// Information and capabilities about the simulator.
            /// </param>
            public static object RegisterSimulator(this ISimulatorSessionOperations operations, string workspaceName, SimulatorInterface registrationInfo)
            {
                return operations.RegisterSimulatorAsync(workspaceName, registrationInfo).GetAwaiter().GetResult();
            }

            /// <summary>
            /// Implementation of the POST /v2/.../simulatorSessions endpoint.
            /// </summary>
            /// <remarks>
            /// Registers a simulator with the simulator gateway.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='registrationInfo'>
            /// Information and capabilities about the simulator.
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<object> RegisterSimulatorAsync(this ISimulatorSessionOperations operations, string workspaceName, SimulatorInterface registrationInfo, CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var _result = await operations.RegisterSimulatorWithHttpMessagesAsync(workspaceName, registrationInfo, null, cancellationToken).ConfigureAwait(false))
                {
                    return _result.Body;
                }
            }

            /// <summary>
            /// Implementaton of the GET /v2/.../simulatorSessions/{sessionId} endpoint.
            /// </summary>
            /// <remarks>
            /// Retrieves a simulator session corresponding to the sessionId
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='sessionId'>
            /// The sessionId of the simulator session to fetch
            /// </param>
            public static object DescribeOneSession(this ISimulatorSessionOperations operations, string workspaceName, string sessionId)
            {
                return operations.DescribeOneSessionAsync(workspaceName, sessionId).GetAwaiter().GetResult();
            }

            /// <summary>
            /// Implementaton of the GET /v2/.../simulatorSessions/{sessionId} endpoint.
            /// </summary>
            /// <remarks>
            /// Retrieves a simulator session corresponding to the sessionId
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='sessionId'>
            /// The sessionId of the simulator session to fetch
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<object> DescribeOneSessionAsync(this ISimulatorSessionOperations operations, string workspaceName, string sessionId, CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var _result = await operations.DescribeOneSessionWithHttpMessagesAsync(workspaceName, sessionId, null, cancellationToken).ConfigureAwait(false))
                {
                    return _result.Body;
                }
            }

            /// <summary>
            /// Implementation of the DELETE /v2/.../simulators endpoint.
            /// </summary>
            /// <remarks>
            /// Unregisters the simulator with the simulator gateway.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='sessionId'>
            /// The session ID generated during registration
            /// </param>
            public static ProblemDetails DeregisterSimulator(this ISimulatorSessionOperations operations, string workspaceName, string sessionId)
            {
                return operations.DeregisterSimulatorAsync(workspaceName, sessionId).GetAwaiter().GetResult();
            }

            /// <summary>
            /// Implementation of the DELETE /v2/.../simulators endpoint.
            /// </summary>
            /// <remarks>
            /// Unregisters the simulator with the simulator gateway.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='sessionId'>
            /// The session ID generated during registration
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<ProblemDetails> DeregisterSimulatorAsync(this ISimulatorSessionOperations operations, string workspaceName, string sessionId, CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var _result = await operations.DeregisterSimulatorWithHttpMessagesAsync(workspaceName, sessionId, null, cancellationToken).ConfigureAwait(false))
                {
                    return _result.Body;
                }
            }

            /// <summary>
            /// Implementation of the GET /v2/.../simulatorSessions/{sessionId}/action
            /// endpoint.
            /// </summary>
            /// <remarks>
            /// Gets the most recent action sent to the simulator to process.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='sessionId'>
            /// Unique identification of the simulator.
            /// </param>
            public static EventModel GetMostRecentAction(this ISimulatorSessionOperations operations, string workspaceName, string sessionId)
            {
                return operations.GetMostRecentActionAsync(workspaceName, sessionId).GetAwaiter().GetResult();
            }

            /// <summary>
            /// Implementation of the GET /v2/.../simulatorSessions/{sessionId}/action
            /// endpoint.
            /// </summary>
            /// <remarks>
            /// Gets the most recent action sent to the simulator to process.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='sessionId'>
            /// Unique identification of the simulator.
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<EventModel> GetMostRecentActionAsync(this ISimulatorSessionOperations operations, string workspaceName, string sessionId, CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var _result = await operations.GetMostRecentActionWithHttpMessagesAsync(workspaceName, sessionId, null, cancellationToken).ConfigureAwait(false))
                {
                    return _result.Body;
                }
            }

            /// <summary>
            /// Implementation of the POST /v2/.../simulatorSessions/{sessionId}/advance
            /// endpoint.
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='sessionId'>
            /// Unique identifier for the simulator.
            /// </param>
            /// <param name='state'>
            /// The new state of the simulator.
            /// </param>
            public static EventModel Advance(this ISimulatorSessionOperations operations, string workspaceName, string sessionId, SimulatorState state)
            {
                return operations.AdvanceAsync(workspaceName, sessionId, state).GetAwaiter().GetResult();
            }

            /// <summary>
            /// Implementation of the POST /v2/.../simulatorSessions/{sessionId}/advance
            /// endpoint.
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='workspaceName'>
            /// The workspace identifier.
            /// </param>
            /// <param name='sessionId'>
            /// Unique identifier for the simulator.
            /// </param>
            /// <param name='state'>
            /// The new state of the simulator.
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<EventModel> AdvanceAsync(this ISimulatorSessionOperations operations, string workspaceName, string sessionId, SimulatorState state, CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var _result = await operations.AdvanceWithHttpMessagesAsync(workspaceName, sessionId, state, null, cancellationToken).ConfigureAwait(false))
                {
                    return _result.Body;
                }
            }

    }
}
