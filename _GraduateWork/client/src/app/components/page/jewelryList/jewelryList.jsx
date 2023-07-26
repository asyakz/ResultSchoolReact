import React, { useEffect, useState } from 'react';
import './jewelryList.scss';
import api from '../../../api/index';
import JewelryCard from '../jewelryCard/jewelryCard';
import jewelryService from '../../../services/jewelry.service';

const JewelryList = () => {
  let id = self.crypto.randomUUID();
  const [jewelry, setJewelry] = useState();
  useEffect(() => {
    setJewelry(jewelryService.get());
  }, []);
  return (
    <>
      {jewelry && (
        <>
          <ul className='jewelry-list'>
            {jewelry.map((item) => (
              <JewelryCard key={id} item={item} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default JewelryList;
