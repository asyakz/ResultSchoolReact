import React from "react";
import { useQuality } from "../../../hooks/useQuality";
import PropTypes from "prop-types";
import Quality from "./quality";

const QualitiesList = ({ ids }) => {
  const { isLoading, getQuality } = useQuality();
  const quality = getQuality(ids);
  if (!isLoading) {
    return (
      <>
          {quality.map((qual) => (
              <Quality key={qual._id} {...qual} />
          ))}
      </>
    );
  } else return "Loading...";
};

QualitiesList.propTypes = {
    ids: PropTypes.array
};

export default QualitiesList;
