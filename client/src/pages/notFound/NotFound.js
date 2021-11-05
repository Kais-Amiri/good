import React from "react";
import { useHistory } from "react-router";

function NotFound() {
  const history = useHistory();
  return (
    <div>
      <p
        style={{
          fontSize: "18rem",
          color: "rgb(1, 28, 46)",
        }}
      >
        4<span style={{ color: "#05c5fa" }}>0</span>4
      </p>
      <p style={{ fontSize: "1.2rem" }}>
        THE PAGE YOU REQUESTED COULD NOT FOUND
      </p>
      <button
        className="btn btn-outline-light"
        onClick={() => history.goBack()}
        style={{
          width: "30%",
          height: "auto",
          border: "2px solid #05c5fa",
          borderRadius: "50px",
          fontSize: "1rem",
          color: "#05c5fa",
        }}
      >
        {`<< Go back`}
      </button>
    </div>
  );
}

export default NotFound;
