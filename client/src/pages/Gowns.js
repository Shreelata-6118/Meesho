import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import GownsSn from '../components/GownsSn';
import FooterSection from '../components/FooterSection';

const Gowns = () => {
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

  const filteredGowns = productsList.filter(product => product.subCategory === 'Gowns');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginLeft: "400px" }}>
        <GownsSn products={filteredGowns} />
      </div>
      <FooterSection />
    </>
  );
};

export default Gowns;
