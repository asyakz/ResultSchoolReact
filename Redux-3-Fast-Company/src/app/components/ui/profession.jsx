import React from "react";
import { useSelector } from "react-redux";
import { getProfessionLoadingStatus, getProfessionById } from "../../store/professions";
import PropTypes from "prop-types";

const Profession = ({ id }) => {
  const isLoading = useSelector(getProfessionLoadingStatus());
  const profession = useSelector(getProfessionById(id));
  if (!isLoading) {
    return <p>{profession.name}</p>;
  } else return "Loading...";
};
Profession.propTypes = {
  id: PropTypes.string
};
export default Profession;
