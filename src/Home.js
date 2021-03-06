import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={12.8}
            image="https://cdnb.artstation.com/p/assets/images/images/010/528/903/large/junting-chen-.jpg?1524898887"
            rating={4}
          />
          <Product />

          {/* product */}
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          {" "}
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
