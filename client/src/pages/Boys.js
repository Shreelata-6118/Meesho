import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BoysSn from '../components/BoysSn';
import FooterSection from '../components/FooterSection';

const Boys = () => {
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
  
  const filteredBoys = productsList.filter(product => product.subCategory === 'Boys');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginLeft: "400px" }}>
        <BoysSn products={filteredBoys} />
      </div>
      <FooterSection />
    </>
  );
};

export default Boys;
