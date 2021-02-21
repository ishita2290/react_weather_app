import React from "react";

function Humidity(props) {
  return (
    <div>
      {props.humidity && (
        <p>
          Humidity : <span>{props.humidity}</span>
        </p>
      )}
      
      
    </div>
  );
}

export default Humidity;
