import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  const {value} = props;
  const user = props.user;

  return (
    <>
    {
      <tr key={user._id}>
        <td>{user.name}</td>
        <td key={user._id + 'qualitie'}>
          {user.qualities.map((item, i) => (
            <Qualitie _id={item._id} color={item.color} name={item.name} key={user._id + i}/>
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <BookMark id={user.bookmark} onBookMark={props.onBookMark} user={user}/>
        </td>
        <td>
          <button
                className="btn bg-danger m-2 text-white"
                id={user._id}
                onClick={() => props.onDelete(user._id)}
                >
            delete
          </button>
        </td>
      </tr>
    }
  </>
  )
}

export default User;

