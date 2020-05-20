# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class Event(Model):
    """Event.

    :param type: Possible values include: 'Unspecified', 'EpisodeStart',
     'EpisodeStep', 'EpisodeFinish', 'PlaybackStart', 'PlaybackStep',
     'PlaybackFinish', 'Idle', 'Registered', 'Unregister'
    :type type: str or ~bonsai.simulatorapi.models.EventTypesEventType
    :param session_id:
    :type session_id: str
    :param sequence_id:
    :type sequence_id: int
    :param episode_start:
    :type episode_start: ~bonsai.simulatorapi.models.EpisodeStart
    :param episode_step:
    :type episode_step: ~bonsai.simulatorapi.models.Step
    :param episode_finish:
    :type episode_finish: ~bonsai.simulatorapi.models.EpisodeFinish
    :param playback_start:
    :type playback_start: object
    :param playback_step:
    :type playback_step: object
    :param playback_finish:
    :type playback_finish: object
    :param idle:
    :type idle: ~bonsai.simulatorapi.models.Idle
    :param registered:
    :type registered: object
    :param unregister:
    :type unregister: ~bonsai.simulatorapi.models.Unregister
    :param kind_case: Possible values include: 'None', 'EpisodeStart',
     'EpisodeStep', 'EpisodeFinish', 'PlaybackStart', 'PlaybackStep',
     'PlaybackFinish', 'Idle', 'Registered', 'Unregister'
    :type kind_case: str or ~bonsai.simulatorapi.models.EventKindOneofCase
    """

    _attribute_map = {
        'type': {'key': 'type', 'type': 'EventTypesEventType'},
        'session_id': {'key': 'sessionId', 'type': 'str'},
        'sequence_id': {'key': 'sequenceId', 'type': 'int'},
        'episode_start': {'key': 'episodeStart', 'type': 'EpisodeStart'},
        'episode_step': {'key': 'episodeStep', 'type': 'Step'},
        'episode_finish': {'key': 'episodeFinish', 'type': 'EpisodeFinish'},
        'playback_start': {'key': 'playbackStart', 'type': 'object'},
        'playback_step': {'key': 'playbackStep', 'type': 'object'},
        'playback_finish': {'key': 'playbackFinish', 'type': 'object'},
        'idle': {'key': 'idle', 'type': 'Idle'},
        'registered': {'key': 'registered', 'type': 'object'},
        'unregister': {'key': 'unregister', 'type': 'Unregister'},
        'kind_case': {'key': 'kindCase', 'type': 'EventKindOneofCase'},
    }

    def __init__(self, *, type=None, session_id: str=None, sequence_id: int=None, episode_start=None, episode_step=None, episode_finish=None, playback_start=None, playback_step=None, playback_finish=None, idle=None, registered=None, unregister=None, kind_case=None, **kwargs) -> None:
        super(Event, self).__init__(**kwargs)
        self.type = type
        self.session_id = session_id
        self.sequence_id = sequence_id
        self.episode_start = episode_start
        self.episode_step = episode_step
        self.episode_finish = episode_finish
        self.playback_start = playback_start
        self.playback_step = playback_step
        self.playback_finish = playback_finish
        self.idle = idle
        self.registered = registered
        self.unregister = unregister
        self.kind_case = kind_case
