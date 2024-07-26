// src/components/Dashboard.js
import React from 'react';
import MyNavbar from '../Components/molecules/navbar/navbar';
import CarouselComponent from '../Components/molecules/carousel/carousel';
import FeaturesCard from '../Components/molecules/card/card';
import Chart from '../charts/Charts';
const Home = () => {
  return (
    <div>
      <MyNavbar/>
      <CarouselComponent/>
      <FeaturesCard/>
      <Chart/>
    </div>
  );
};

export default Home;
