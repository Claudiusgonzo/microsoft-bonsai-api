# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class SimulatorSessionMilestone(Model):
    """SimulatorSessionMilestone.

    :param first_time:
    :type first_time: ~microsoft.bonsai.simulatorapi.models.Timestamp
    """

    _attribute_map = {
        'first_time': {'key': 'firstTime', 'type': 'Timestamp'},
    }

    def __init__(self, **kwargs):
        super(SimulatorSessionMilestone, self).__init__(**kwargs)
        self.first_time = kwargs.get('first_time', None)
