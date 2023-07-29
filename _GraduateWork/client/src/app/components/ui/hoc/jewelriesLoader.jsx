import { useDispatch, useSelector } from 'react-redux';
import { getDataStatus, loadJewelriesList } from '../../../store/jewelries';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LoaderSpinner from '../../common/loader-spinner/loader-spinner';

const JewelriesLoader = ({ children }) => {
  const dataStatus = useSelector(getDataStatus());
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataStatus) dispatch(loadJewelriesList());
  }, []);
  if (!dataStatus) return <LoaderSpinner />;
  return children;
};

JewelriesLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default JewelriesLoader;
