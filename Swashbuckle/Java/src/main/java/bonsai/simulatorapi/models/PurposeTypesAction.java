/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package bonsai.simulatorapi.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Defines values for PurposeTypesAction.
 */
public enum PurposeTypesAction {
    /** Enum value Inactive. */
    INACTIVE("Inactive"),

    /** Enum value Debug. */
    DEBUG("Debug"),

    /** Enum value Train. */
    TRAIN("Train"),

    /** Enum value Assess. */
    ASSESS("Assess");

    /** The actual serialized value for a PurposeTypesAction instance. */
    private String value;

    PurposeTypesAction(String value) {
        this.value = value;
    }

    /**
     * Parses a serialized value to a PurposeTypesAction instance.
     *
     * @param value the serialized value to parse.
     * @return the parsed PurposeTypesAction object, or null if unable to parse.
     */
    @JsonCreator
    public static PurposeTypesAction fromString(String value) {
        PurposeTypesAction[] items = PurposeTypesAction.values();
        for (PurposeTypesAction item : items) {
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
