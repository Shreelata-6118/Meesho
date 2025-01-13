import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MobileAccessoriesSn from '../components/MobileAccessoriesSn';
import FooterSection from '../components/FooterSection';

const MobileAccessories = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/products/getProducts')
      .then((res) => res.json())
      .then((data) => setProductsList(data.products))
      .catch((err) => console.log(err));
  }, []);



  useEffect(() => {
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 400);
  },[loading])
  
  const filteredMobileAccessories = productsList.filter(product => product.subCategory === 'Electronic');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginLeft: "400px" }}>
        <MobileAccessoriesSn products={filteredMobileAccessories} />
      </div>
      <FooterSection />
    </>
  );
};

export default MobileAccessories;
