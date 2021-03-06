/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package microsoft.bonsai.simulatorapi.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EpisodeStart event. It's sent when a new episode need to be started.
 */
public class EpisodeStart {
    /**
     * Initial configuration of simulation for starting an episode.
     */
    @JsonProperty(value = "config")
    private Object config;

    /**
     * Get initial configuration of simulation for starting an episode.
     *
     * @return the config value
     */
    public Object config() {
        return this.config;
    }

    /**
     * Set initial configuration of simulation for starting an episode.
     *
     * @param config the config value to set
     * @return the EpisodeStart object itself.
     */
    public EpisodeStart withConfig(Object config) {
        this.config = config;
        return this;
    }

}
