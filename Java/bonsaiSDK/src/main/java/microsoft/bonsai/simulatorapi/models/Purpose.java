/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package microsoft.bonsai.simulatorapi.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The Purpose model.
 */
public class Purpose {
    /**
     * Possible values include: 'Inactive', 'Debug', 'Train', 'Assess'.
     */
    @JsonProperty(value = "action")
    private PurposeTypesAction action;

    /**
     * The target property.
     */
    @JsonProperty(value = "target")
    private PurposeTarget target;

    /**
     * Get possible values include: 'Inactive', 'Debug', 'Train', 'Assess'.
     *
     * @return the action value
     */
    public PurposeTypesAction action() {
        return this.action;
    }

    /**
     * Set possible values include: 'Inactive', 'Debug', 'Train', 'Assess'.
     *
     * @param action the action value to set
     * @return the Purpose object itself.
     */
    public Purpose withAction(PurposeTypesAction action) {
        this.action = action;
        return this;
    }

    /**
     * Get the target value.
     *
     * @return the target value
     */
    public PurposeTarget target() {
        return this.target;
    }

    /**
     * Set the target value.
     *
     * @param target the target value to set
     * @return the Purpose object itself.
     */
    public Purpose withTarget(PurposeTarget target) {
        this.target = target;
        return this;
    }

}
