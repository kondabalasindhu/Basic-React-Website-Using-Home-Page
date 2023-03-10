import React, { Component } from "react";
import "./Banner.css";
function Banner(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.subtitle}</p>
        <p className="sindhu">{props.sindhu}</p>
      </div>
    </div>
  );
}
export default Banner;
