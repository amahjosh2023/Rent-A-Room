import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../images/choosinghouse.svg";
import "./home.css";

const Home = () => {
  return (
    <div classname="home-container">
<div classname="hero-section">
<div classname="hero-content">
<h1 classname="hero-title">Find Your Perfect Stay</h1>

            Discover unique spaces that feel just like home
          
<link to="/rooms"/>
<button classname="cta-button">
              Explore Rooms
              →
</button>
</div>
<div classname="hero-image">
![Room illustration](/static{BannerImage})
</div>
</div>
<div classname="features-section">
<div classname="feature-card">
<div classname="feature-icon">🏠</div>
<h3>Verified Homes</h3>
All our properties are carefully vetted for quality
</div>
<div classname="feature-card">
<div classname="feature-icon">💫</div>
<h3>Best Prices</h3>
Find competitive rates for both short and long stays
</div>
<div classname="feature-card">
<div classname="feature-icon">🔒</div>
<h3>Secure Booking</h3>
Your safety and security is our top priority
</div>
</div>
</div>
  );
};

export default Home;
