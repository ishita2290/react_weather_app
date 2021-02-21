import React from "react";

export default function LocationForm(props) {
  return (
    <form onSubmit={props.getWeather} >
      <input
        onChange={props.handleCityChange}
        type="text"
        name="City"
        placeholder="City"
      />
    
      <input
        onChange={props.handleCountryChange}
        type="text"
        name="Country"
        placeholder="Country"
      />
      
      <button>Get Weather Details</button>
    </form>
  );
}
