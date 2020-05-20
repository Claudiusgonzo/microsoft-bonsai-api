/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package bonsai.simulatorapi.implementation;

import bonsai.simulatorapi.SimulatorAPI;
import bonsai.simulatorapi.Sessions;
import com.microsoft.rest.ServiceClient;
import com.microsoft.rest.RestClient;
import okhttp3.OkHttpClient;
import retrofit2.Retrofit;

/**
 * Initializes a new instance of the SimulatorAPI class.
 */
public class SimulatorAPIImpl extends ServiceClient implements SimulatorAPI {

    /**
     * The Sessions object to access its operations.
     */
    private Sessions sessions;

    /**
     * Gets the Sessions object to access its operations.
     * @return the Sessions object.
     */
    public Sessions sessions() {
        return this.sessions;
    }

    /**
     * Initializes an instance of SimulatorAPI client.
     */
    public SimulatorAPIImpl() {
        this("https://");
    }

    /**
     * Initializes an instance of SimulatorAPI client.
     *
     * @param baseUrl the base URL of the host
     */
    public SimulatorAPIImpl(String baseUrl) {
        super(baseUrl);
        initialize();
    }

    /**
     * Initializes an instance of SimulatorAPI client.
     *
     * @param clientBuilder the builder for building an OkHttp client, bundled with user configurations
     * @param restBuilder the builder for building an Retrofit client, bundled with user configurations
     */
    public SimulatorAPIImpl(OkHttpClient.Builder clientBuilder, Retrofit.Builder restBuilder) {
        this("https://", clientBuilder, restBuilder);
        initialize();
    }

    /**
     * Initializes an instance of SimulatorAPI client.
     *
     * @param baseUrl the base URL of the host
     * @param clientBuilder the builder for building an OkHttp client, bundled with user configurations
     * @param restBuilder the builder for building an Retrofit client, bundled with user configurations
     */
    public SimulatorAPIImpl(String baseUrl, OkHttpClient.Builder clientBuilder, Retrofit.Builder restBuilder) {
        super(baseUrl, clientBuilder, restBuilder);
        initialize();
    }

    /**
     * Initializes an instance of SimulatorAPI client.
     *
     * @param restClient the REST client containing pre-configured settings
     */
    public SimulatorAPIImpl(RestClient restClient) {
        super(restClient);
        initialize();
    }

    private void initialize() {
        this.sessions = new SessionsImpl(retrofit(), this);
    }
}
