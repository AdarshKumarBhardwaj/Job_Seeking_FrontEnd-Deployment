import React, { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSections from "./HeroSections";
import HowitWorks from "./HowitWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="homePage page">
      <HeroSections />
      <HowitWorks />
      <PopularCategories />
      <PopularCompanies />
    </section>
  );
};

export default Home;
