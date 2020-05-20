# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class SimulatorContext(Model):
    """SimulatorContext.

    :param deployment_mode: Possible values include: 'Unspecified', 'Hosted',
     'Testing'
    :type deployment_mode: str or
     ~bonsai.simulatorapi.models.SimulatorContextTypesDeploymentMode
    :param deployment_details:
    :type deployment_details: str
    :param simulator_client_id:
    :type simulator_client_id: str
    :param collection:
    :type collection: str
    :param package:
    :type package: str
    :param purpose:
    :type purpose: ~bonsai.simulatorapi.models.Purpose
    """

    _attribute_map = {
        'deployment_mode': {'key': 'deploymentMode', 'type': 'SimulatorContextTypesDeploymentMode'},
        'deployment_details': {'key': 'deploymentDetails', 'type': 'str'},
        'simulator_client_id': {'key': 'simulatorClientId', 'type': 'str'},
        'collection': {'key': 'collection', 'type': 'str'},
        'package': {'key': 'package', 'type': 'str'},
        'purpose': {'key': 'purpose', 'type': 'Purpose'},
    }

    def __init__(self, *, deployment_mode=None, deployment_details: str=None, simulator_client_id: str=None, collection: str=None, package: str=None, purpose=None, **kwargs) -> None:
        super(SimulatorContext, self).__init__(**kwargs)
        self.deployment_mode = deployment_mode
        self.deployment_details = deployment_details
        self.simulator_client_id = simulator_client_id
        self.collection = collection
        self.package = package
        self.purpose = purpose
