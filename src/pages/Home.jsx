import React from "react";
import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import CardsSection from '../components/CardsSection/CardsSection';
import Contect from '../components/Contect/Contect';
import Footer from '../components/Footer/Footer';
import Accordion from "../components/CardsSection/CardsSection";



const Home = () => {
  return (
    <>
      <Header />
      <MainSection />
      <ProjectsSection />
      <Accordion />
      <Contect/>
      <Footer/>
    </>
  );
};

export default Home;
