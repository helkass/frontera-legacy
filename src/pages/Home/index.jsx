import React from "react";

// components
import Hero from "../../components/Hero";
import Service from "../../components/service";
import Features from "../../components/Features";
import Started from "../../components/Started";
import Footer from "../../components/Footer";

const Home = () => {
   return (
      <>
         <Hero />
         <Features />
         <Service />
         <Started />
         <Footer />
      </>
   );
};

export default Home;
