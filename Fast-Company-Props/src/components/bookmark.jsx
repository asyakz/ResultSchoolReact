import React from "react";

const BookMark = (props) => {
  const {value} = props;


  return (
    <>
      <button onClick={() => props.onBookMark(props.user._id)} key={props.user._id} id={props.user._id}>
        <i className={"bi " + (props.id === false ? "bi-bookmark" : "bi-bookmark-star-fill")}></i>
      </button>
    </>
  )
};

export default BookMark;

