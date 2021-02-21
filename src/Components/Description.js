import React from "react";

function Description(props) {
  return (
    <div>
      {props.desc && (
        <p>
          <span>{props.desc}</span>
        </p>
      )}
    </div>
  );
}

export default Description;
