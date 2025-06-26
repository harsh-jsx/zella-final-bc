import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import QuickChartLinks from "../component/QuickChartLinks";
import MarketOverview from "../component/MarketOverview";
import SocialSection from "../component/SocialSection";
import WhyZellabit from "../component/WhyZellabit";
import SignUpCard from "../component/SignUpCard";
import OurPartners from "../component/OurPartners";
import Footer from "../component/Footer";
import AssetTable from "../component/AssetTable";

const Home = ({ setappModal }) => {
  return (
    <div>
      <Navbar setappModal={setappModal} />
      <Hero />
      <QuickChartLinks />
      <MarketOverview />
      <SocialSection />
      <WhyZellabit />
      <SignUpCard />
      <OurPartners />
      <Footer />
    </div>
  );
};

export default Home;
