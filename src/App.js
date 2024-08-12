import React from 'react';
import Navbar from './components/Navbar';
import PromotionalOffers from './components/PromotionalOffers';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import NearbyStores from './components/NearbyStores';

const App = () => {
  return (
    <div className="bg-[#dadbe7] h-screen">
      <Navbar />
      <PromotionalOffers />
      <Categories />
      <FeaturedProducts />
      <NearbyStores />
    </div>
  );
};

export default App;