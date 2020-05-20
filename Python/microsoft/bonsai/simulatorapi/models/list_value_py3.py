# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class ListValue(Model):
    """ListValue.

    :param values:
    :type values: list[~microsoft.bonsai.simulatorapi.models.Value]
    """

    _attribute_map = {
        'values': {'key': 'values', 'type': '[Value]'},
    }

    def __init__(self, *, values=None, **kwargs) -> None:
        super(ListValue, self).__init__(**kwargs)
        self.values = values
