/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package microsoft.bonsai.simulatorapi.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The SimulatorSessionSummary model.
 */
public class SimulatorSessionSummary {
    /**
     * The sessionId property.
     */
    @JsonProperty(value = "sessionId")
    private String sessionId;

    /**
     * The sessionStatus property.
     */
    @JsonProperty(value = "sessionStatus", required = true)
    private int sessionStatus;

    /**
     * The simulatorName property.
     */
    @JsonProperty(value = "simulatorName")
    private String simulatorName;

    /**
     * The simulatorContext property.
     */
    @JsonProperty(value = "simulatorContext")
    private SimulatorContext simulatorContext;

    /**
     * Get the sessionId value.
     *
     * @return the sessionId value
     */
    public String sessionId() {
        return this.sessionId;
    }

    /**
     * Set the sessionId value.
     *
     * @param sessionId the sessionId value to set
     * @return the SimulatorSessionSummary object itself.
     */
    public SimulatorSessionSummary withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }

    /**
     * Get the sessionStatus value.
     *
     * @return the sessionStatus value
     */
    public int sessionStatus() {
        return this.sessionStatus;
    }

    /**
     * Set the sessionStatus value.
     *
     * @param sessionStatus the sessionStatus value to set
     * @return the SimulatorSessionSummary object itself.
     */
    public SimulatorSessionSummary withSessionStatus(int sessionStatus) {
        this.sessionStatus = sessionStatus;
        return this;
    }

    /**
     * Get the simulatorName value.
     *
     * @return the simulatorName value
     */
    public String simulatorName() {
        return this.simulatorName;
    }

    /**
     * Set the simulatorName value.
     *
     * @param simulatorName the simulatorName value to set
     * @return the SimulatorSessionSummary object itself.
     */
    public SimulatorSessionSummary withSimulatorName(String simulatorName) {
        this.simulatorName = simulatorName;
        return this;
    }

    /**
     * Get the simulatorContext value.
     *
     * @return the simulatorContext value
     */
    public SimulatorContext simulatorContext() {
        return this.simulatorContext;
    }

    /**
     * Set the simulatorContext value.
     *
     * @param simulatorContext the simulatorContext value to set
     * @return the SimulatorSessionSummary object itself.
     */
    public SimulatorSessionSummary withSimulatorContext(SimulatorContext simulatorContext) {
        this.simulatorContext = simulatorContext;
        return this;
    }

}
