import React from 'react';
import './jewelryList.scss';
import { getJewelriesList } from '../../../store/jewelries';
import { useSelector } from 'react-redux';
import JewelryCard from '../jewelryCard/jewelryCard';

const JewelryList = () => {
  const jewelries = useSelector(getJewelriesList());

  return (
    <>
      {jewelries && (
        <>
          <ul className='jewelry-list'>
            {jewelries.map((item) => (
              <JewelryCard
                key={self.crypto.randomUUID()}
                jewerelyId={item._id}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default JewelryList;
