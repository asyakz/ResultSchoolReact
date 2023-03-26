import React from "react";

const Qualitie = (props) => {
  const {value} = props;
  return (
  <span key={props._id}
    className={"badge m-1 bg-" + props.color}>
      {props.name}
    </span>
  )
};

export default Qualitie;
