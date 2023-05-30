import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserLink = ({ id, name }) => {
  return <Link key={id} to={`/users/${id}`}>{name}</Link>;
};

UserLink.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
};

export default UserLink;
