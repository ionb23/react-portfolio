import React from "react";
import "./WrapperStyle.css";

function Wrapper(props) {
  return (
    <div className="container">
      <div className="wrapper">{props.children}</div>
    </div>
  );
}

export default Wrapper;