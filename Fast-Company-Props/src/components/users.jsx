import React from "react";
import User from "./user";

const Users = (props) => {
  const {value} = props;

  return (
    <>
      {props.users.map(user => (
        <User key={user._id} onDelete={props.onDelete} onBookMark={props.onBookMark} user={user}/>
      ))}
    </>
  )};

export default Users;

