import React from "react";

const Component = (props) => {
  console.log(props);
  return (
    <>
      <div className="box">
        <h3>temp : {props.temp} </h3>
        <h3>temp_min : {props.temp_min} </h3>
        <h3>temp_max : {props.temp_max} </h3>
        <h3>pressure : {props.pressure} </h3>
        <h3>humidity : {props.humidity} </h3>
        <h3>country : {props.country} </h3>
        <h3>name : {props.name} </h3>
      </div>
      </>
  );
};

export default Component;
