// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Bonsai.SimulatorAPI.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class Unregister
    {
        /// <summary>
        /// Initializes a new instance of the Unregister class.
        /// </summary>
        public Unregister()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the Unregister class.
        /// </summary>
        public Unregister(int reason, string details = default(string))
        {
            Reason = reason;
            Details = details;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "reason")]
        public int Reason { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "details")]
        public string Details { get; set; }

        /// <summary>
        /// Validate the object.
        /// </summary>
        /// <exception cref="Rest.ValidationException">
        /// Thrown if validation fails
        /// </exception>
        public virtual void Validate()
        {
            //Nothing to validate
        }
    }
}
