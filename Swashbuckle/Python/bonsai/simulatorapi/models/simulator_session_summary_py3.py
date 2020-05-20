# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class SimulatorSessionSummary(Model):
    """SimulatorSessionSummary.

    :param session_id:
    :type session_id: str
    :param session_status: Possible values include: 'Deregistered',
     'Attachable', 'Attached', 'Detaching', 'Rejected'
    :type session_status: str or
     ~bonsai.simulatorapi.models.SimulatorSessionTypesStatus
    :param simulator_name:
    :type simulator_name: str
    :param simulator_context:
    :type simulator_context: ~bonsai.simulatorapi.models.SimulatorContext
    """

    _attribute_map = {
        'session_id': {'key': 'sessionId', 'type': 'str'},
        'session_status': {'key': 'sessionStatus', 'type': 'SimulatorSessionTypesStatus'},
        'simulator_name': {'key': 'simulatorName', 'type': 'str'},
        'simulator_context': {'key': 'simulatorContext', 'type': 'SimulatorContext'},
    }

    def __init__(self, *, session_id: str=None, session_status=None, simulator_name: str=None, simulator_context=None, **kwargs) -> None:
        super(SimulatorSessionSummary, self).__init__(**kwargs)
        self.session_id = session_id
        self.session_status = session_status
        self.simulator_name = simulator_name
        self.simulator_context = simulator_context
