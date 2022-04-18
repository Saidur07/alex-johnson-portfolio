import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Skills></Skills>
    </div>
  );
};

export default Home;
