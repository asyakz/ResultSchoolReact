import { useDispatch, useSelector } from 'react-redux';
import {
  getDataStatus,
  getJewelriesLoadingStatus,
  loadJewelriesList
} from '../../../store/jewelries';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LoaderSpinner from '../../common/loader-spinner/loader-spinner';

const JewelriesLoader = ({ children }) => {
  const dataStatus = useSelector(getDataStatus());
  const isLoading = useSelector(getJewelriesLoadingStatus());
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataStatus) dispatch(loadJewelriesList());
  }, []);
  if (!isLoading) return <LoaderSpinner />;
  return children;
};

JewelriesLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default JewelriesLoader;
