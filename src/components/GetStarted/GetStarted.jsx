import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Stared With House For Sale</span>
          <span className="secondaryText">
            {" "}
            Subscribe and get best Price Quotes from us
            <br />
            Find Your Residence Here
          </span>
          <button className="button">
            <a href="mailto:arsalanashraf562562@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
