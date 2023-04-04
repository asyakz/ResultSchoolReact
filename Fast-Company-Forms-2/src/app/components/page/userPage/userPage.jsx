import { React, useState, useEffect } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import Qualities from "../../ui/qualities/qualities";
import { useHistory } from "react-router-dom";

const UserPage = ({ id }) => {
  const history = useHistory();
  const handleEdit = () => {
    history.push(`/users/${id}/edit`);
  };
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(id).then((data) =>
      setUser(data)
    );
  }, []);
  if (user) {
    return (
      <>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <Qualities qualities={user.qualities}/>
        <p>completedMeetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <button
          onClick={() => {
            handleEdit();
          }}
        >
          Изменить
        </button>
      </>
    );
  }
  return <h1>Loading...</h1>;
};

UserPage.propTypes = {
  id: PropTypes.string
};

export default UserPage;
