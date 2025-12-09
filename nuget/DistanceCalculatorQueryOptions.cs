using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.DistanceCalculator
{
    /// <summary>
    /// Query options for the Distance Calculator API
    /// </summary>
    public class DistanceCalculatorQueryOptions
    {
        /// <summary>
        /// The latitude of the first location
        /// Example: 36.7783
        /// </summary>
        [JsonProperty("lat1")]
        public string Lat1 { get; set; }

        /// <summary>
        /// The longitude of the first location
        /// Example: -119.4179
        /// </summary>
        [JsonProperty("lon1")]
        public string Lon1 { get; set; }

        /// <summary>
        /// The latitude of the second location
        /// Example: 34.0522
        /// </summary>
        [JsonProperty("lat2")]
        public string Lat2 { get; set; }

        /// <summary>
        /// The longitude of the second location
        /// Example: -118.2437
        /// </summary>
        [JsonProperty("lon2")]
        public string Lon2 { get; set; }
    }
}
