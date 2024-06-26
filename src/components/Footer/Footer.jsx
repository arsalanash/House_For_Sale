import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*left */}
        <div className="flexColStart f-left">
          <img src="logo3.png" width={120} />
          <span className="secondaryText">
            Our Vision is to make all people <br />
            live in the best places.
          </span>
        </div>
        {/*right */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information </span>
          <span className="secondaryText"> Main Road Ranchi India</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
