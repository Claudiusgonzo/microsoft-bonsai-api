// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Bonsai.SimulatorAPI.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class Purpose
    {
        /// <summary>
        /// Initializes a new instance of the Purpose class.
        /// </summary>
        public Purpose()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the Purpose class.
        /// </summary>
        public Purpose(int action, PurposeTarget target = default(PurposeTarget))
        {
            Action = action;
            Target = target;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "action")]
        public int Action { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "target")]
        public PurposeTarget Target { get; set; }

        /// <summary>
        /// Validate the object.
        /// </summary>
        /// <exception cref="Rest.ValidationException">
        /// Thrown if validation fails
        /// </exception>
        public virtual void Validate()
        {
            if (Target != null)
            {
                Target.Validate();
            }
        }
    }
}
