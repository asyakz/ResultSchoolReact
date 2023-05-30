import { React, useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const User = ({ id }) => {
  const history = useHistory();
  const handleSave = () => {
    history.replace("/users");
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
        <QualitiesList qualities={user.qualities}/>
        <p>completedMeetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <button
          onClick={() => {
            handleSave();
          }}
        >
          Все пользователи
        </button>
      </>
    );
  }
  return <h1>Loading...</h1>;
};

User.propTypes = {
  id: PropTypes.string
};

export default User;
