import React, { useEffect, useState } from 'react';
import './jewelryList.scss';
import api from '../../../api/index';
import JewelryCard from '../jewelryCard/jewelryCard';

const JewelryList = () => {
  let id = self.crypto.randomUUID();
  const [jewelry, setJewelry] = useState();
  useEffect(() => {
    api.jewelry.fetchAll().then((data) => setJewelry(data));
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
