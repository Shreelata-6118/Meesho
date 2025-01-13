import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import FooterSection from '../components/FooterSection';
import MenWearSn from '../components/MenWearSn';

const MenWear = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products/getProducts')
      .then((res) => res.json())
      .then((data) => setProductsList(data.products))
      .catch((err) => console.log(err));
  }, []);

  const filteredMenWear = productsList.filter(product => product.subCategory === 'MenWear');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginLeft: "400px" }}>
        <MenWearSn products={filteredMenWear} />
      </div>
      <FooterSection />
    </>
  );
};

export default MenWear;
