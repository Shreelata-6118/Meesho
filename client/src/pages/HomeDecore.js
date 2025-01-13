import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HomeDecoreSn from '../components/HomeDecoreSn';
import FooterSection from '../components/FooterSection';

const HomeDecore = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, [loading]);

  // Filter products for HomeDecore subcategory
  const filteredHomeDecore = productsList.filter(
    (product) => product.subCategory === 'Home'
  );

  return (
    <>
      <Navbar />
      <div style={{ marginTop: '150px', marginLeft: '400px' }}>
        <HomeDecoreSn products={filteredHomeDecore} />
      </div>
      <FooterSection />
    </>
  );
};

export default HomeDecore;
