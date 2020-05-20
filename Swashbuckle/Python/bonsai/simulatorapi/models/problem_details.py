# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class ProblemDetails(Model):
    """ProblemDetails.

    Variables are only populated by the server, and will be ignored when
    sending a request.

    :param type:
    :type type: str
    :param title:
    :type title: str
    :param status:
    :type status: int
    :param detail:
    :type detail: str
    :param instance:
    :type instance: str
    :ivar extensions:
    :vartype extensions: dict[str, object]
    """

    _validation = {
        'extensions': {'readonly': True},
    }

    _attribute_map = {
        'type': {'key': 'type', 'type': 'str'},
        'title': {'key': 'title', 'type': 'str'},
        'status': {'key': 'status', 'type': 'int'},
        'detail': {'key': 'detail', 'type': 'str'},
        'instance': {'key': 'instance', 'type': 'str'},
        'extensions': {'key': 'extensions', 'type': '{object}'},
    }

    def __init__(self, **kwargs):
        super(ProblemDetails, self).__init__(**kwargs)
        self.type = kwargs.get('type', None)
        self.title = kwargs.get('title', None)
        self.status = kwargs.get('status', None)
        self.detail = kwargs.get('detail', None)
        self.instance = kwargs.get('instance', None)
        self.extensions = None
