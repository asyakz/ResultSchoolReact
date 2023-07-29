import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import jewelryService from '../services/jewelry.service';

const JewelryContext = React.createContext();

export const useJewelry = () => {
  return useContext(JewelryContext);
};

const JewelryProvider = ({ children }) => {
  const [jewelries, setJewelries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getJewelries();
  }, []);
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);
  async function getJewelries() {
    try {
      const { content } = await jewelryService.get();
      setJewelries(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }
  function getJewelryById(jewelryId) {
    return jewelries.find((j) => j._id === jewelryId);
  }
  return (
    <JewelryContext.Provider value={{ jewelries, getJewelryById }}>
      {!isLoading ? children : 'Loading...'}
    </JewelryContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default JewelryProvider;
