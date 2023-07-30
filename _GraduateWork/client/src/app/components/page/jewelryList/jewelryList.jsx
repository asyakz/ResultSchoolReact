import React from 'react';
import './jewelryList.scss';
import JewelryCard from '../jewelryCard/jewelryCard';
import PropTypes from 'prop-types';

const JewelryList = ({ jewelries }) => {
  return (
    <>
      {jewelries && (
        <>
          <ul className='jewelry-list'>
            {jewelries.map((item) => (
              <JewelryCard key={item._id} jewerelyId={item._id} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

JewelryList.propTypes = {
  jewelries: PropTypes.array.isRequired
};

export default JewelryList;
