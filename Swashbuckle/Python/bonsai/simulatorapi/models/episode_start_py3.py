# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class EpisodeStart(Model):
    """EpisodeStart.

    :param config:
    :type config: object
    """

    _attribute_map = {
        'config': {'key': 'config', 'type': 'object'},
    }

    def __init__(self, *, config=None, **kwargs) -> None:
        super(EpisodeStart, self).__init__(**kwargs)
        self.config = config
