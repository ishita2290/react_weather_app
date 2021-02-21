import React from "react";

function Error(props) {
  return (
    <div>
      {props.error && (
        <p>
          error: <span>{props.error}</span>
        </p>
      )}
    </div>
  );
}

export default Error;
