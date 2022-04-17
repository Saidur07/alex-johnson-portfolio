import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Awards from "../../components/Awards/Awards";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Awards></Awards>
    </div>
  );
};

export default Home;
