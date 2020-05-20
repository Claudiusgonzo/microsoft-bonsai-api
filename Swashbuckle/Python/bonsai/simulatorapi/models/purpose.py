# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class Purpose(Model):
    """Purpose.

    :param action: Possible values include: 'Inactive', 'Debug', 'Train',
     'Assess'
    :type action: str or ~bonsai.simulatorapi.models.PurposeTypesAction
    :param target:
    :type target: ~bonsai.simulatorapi.models.PurposeTarget
    """

    _attribute_map = {
        'action': {'key': 'action', 'type': 'PurposeTypesAction'},
        'target': {'key': 'target', 'type': 'PurposeTarget'},
    }

    def __init__(self, **kwargs):
        super(Purpose, self).__init__(**kwargs)
        self.action = kwargs.get('action', None)
        self.target = kwargs.get('target', None)
