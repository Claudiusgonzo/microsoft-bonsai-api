# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class SimulatorSessionResponse(Model):
    """SimulatorSessionResponse.

    All required parameters must be populated in order to send to Azure.

    :param session_id: Required.
    :type session_id: str
    :param session_status: Possible values include: 'Deregistered',
     'Attachable', 'Attached', 'Detaching', 'Rejected'
    :type session_status: str or
     ~bonsai.simulatorapi.models.SimulatorSessionTypesStatus
    :param session_progress:
    :type session_progress:
     ~bonsai.simulatorapi.models.SimulatorSessionProgress
    :param interface:
    :type interface: ~bonsai.simulatorapi.models.SimulatorInterface
    :param simulator_context:
    :type simulator_context: ~bonsai.simulatorapi.models.SimulatorContext
    :param registration_time: Required.
    :type registration_time: datetime
    :param last_seen_time: Required.
    :type last_seen_time: datetime
    :param iteration_rate:
    :type iteration_rate: float
    :param details:
    :type details: str
    """

    _validation = {
        'session_id': {'required': True},
        'registration_time': {'required': True},
        'last_seen_time': {'required': True},
    }

    _attribute_map = {
        'session_id': {'key': 'sessionId', 'type': 'str'},
        'session_status': {'key': 'sessionStatus', 'type': 'SimulatorSessionTypesStatus'},
        'session_progress': {'key': 'sessionProgress', 'type': 'SimulatorSessionProgress'},
        'interface': {'key': 'interface', 'type': 'SimulatorInterface'},
        'simulator_context': {'key': 'simulatorContext', 'type': 'SimulatorContext'},
        'registration_time': {'key': 'registrationTime', 'type': 'iso-8601'},
        'last_seen_time': {'key': 'lastSeenTime', 'type': 'iso-8601'},
        'iteration_rate': {'key': 'iterationRate', 'type': 'float'},
        'details': {'key': 'details', 'type': 'str'},
    }

    def __init__(self, *, session_id: str, registration_time, last_seen_time, session_status=None, session_progress=None, interface=None, simulator_context=None, iteration_rate: float=None, details: str=None, **kwargs) -> None:
        super(SimulatorSessionResponse, self).__init__(**kwargs)
        self.session_id = session_id
        self.session_status = session_status
        self.session_progress = session_progress
        self.interface = interface
        self.simulator_context = simulator_context
        self.registration_time = registration_time
        self.last_seen_time = last_seen_time
        self.iteration_rate = iteration_rate
        self.details = details
