/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package microsoft.bonsai.simulatorapi.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Defines values for SimulatorSessionTypesStatus.
 */
public enum SimulatorSessionTypesStatus {
    /** Enum value Deregistered. */
    DEREGISTERED("Deregistered"),

    /** Enum value Attachable. */
    ATTACHABLE("Attachable"),

    /** Enum value Attached. */
    ATTACHED("Attached"),

    /** Enum value Detaching. */
    DETACHING("Detaching"),

    /** Enum value Rejected. */
    REJECTED("Rejected");

    /** The actual serialized value for a SimulatorSessionTypesStatus instance. */
    private String value;

    SimulatorSessionTypesStatus(String value) {
        this.value = value;
    }

    /**
     * Parses a serialized value to a SimulatorSessionTypesStatus instance.
     *
     * @param value the serialized value to parse.
     * @return the parsed SimulatorSessionTypesStatus object, or null if unable to parse.
     */
    @JsonCreator
    public static SimulatorSessionTypesStatus fromString(String value) {
        SimulatorSessionTypesStatus[] items = SimulatorSessionTypesStatus.values();
        for (SimulatorSessionTypesStatus item : items) {
            if (item.toString().equalsIgnoreCase(value)) {
                return item;
            }
        }
        return null;
    }

    @JsonValue
    @Override
    public String toString() {
        return this.value;
    }
}
