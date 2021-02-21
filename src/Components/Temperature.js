import React, { useEffect, useState } from "react";

function Temperature(props) {
  const [temperature, setTemperature] = useState(null);
  const [tempType, setTempType] = useState("°C");

  useEffect(() => {
    setTemperature(Number(props.temperature));
  }, [props]);

  const celciusToFahrenheitAndBack = () => {
    if (tempType === "°C") {
      setTempType("F");
      setTemperature(Math.floor((temperature * 9) / 5 + 32));
      console.log(temperature);
      console.log(tempType);
    } else {
      setTempType("°C");
      setTemperature(Math.floor(((temperature - 32) * 5) / 9));
      console.log(tempType);
    }
  };

  return (
    <div onClick={celciusToFahrenheitAndBack}>
      {props.temperature && (
        <p>
         {props.temp_desc}  {temperature} {tempType}
        </p>
      )}
    </div>
  );
}

export default Temperature;
