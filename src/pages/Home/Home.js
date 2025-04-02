import React from "react";
import "./Home.css";

// CSS file import

const Home = () => {
  return (
    <div>
      {/* Hero Section with background image */}
      <div className="hero-section">
        <div className="overlay">
          <div className="main-box">
            <img className="logo2" src="img/logo2.webp" alt="Logo" />
            <h1 className="even welcom-txt great-vibes">Welcome to</h1>
            <img className="logo3" src="img/logo3.webp" alt="Logo" />
          </div>
          <span className="great-vibes">RESTO SEVEN</span>
          <img className="logo4" src="img/logo4.webp" alt="Logo" />
          <div className="opening-hours">
            <h3>OPENING HOURS</h3>
            <p>
              MON-FRI: 08:00 AM - 11:00 PM
              <br />
              <br />
              WEEKENDS: 08:00 AM - 02:00 PM
            </p>
          </div>
          <button className="seasonal-offers">SEE SEASONAL OFFERS</button>
        </div>
      </div>

      {/* Discover Section added below the Hero Section */}
      <div className="discover">
        <div className="dis">
          <img className="about1" src="img/about1.jpg" alt="About 1" />
          <img className="about2" src="img/about2.jpg" alt="About 2" />
          <img className="chef01" src="img/chef1.jpg" alt="Chef" />
        </div>
        <div className="hist">
          <h3 className="h1dis">Discover</h3>
          <p className="dark">OUR HISTORY</p>
          <p className="pa">
            In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
            malesuada. Morbi tincidunt, dui tristique tincidunt faucibus, purus
            sapien consectetur libero, vitae venenatis eros lacus vitae erat.
            Mauris tristique pretium tristique. Integer at nulla at eros
            suscipit suscipit vitae nec diam. Nullam dictum sed metus nec
            mollis.
          </p>
          <p className="pa">
            Vivamus id consectetur mauris. Praesent dui purus, interdum eget
            urna nec, mollis condimentum magna.
          </p>
          <button
            className="read"
            onClick={() =>
              (window.location.href = "http://localhost:3000/about")
            }
          >
            READ ME
          </button>
        </div>
      </div>

      <div className="checkout">
        <div className="out">
          <p className="outi">Check out our</p>
          <p className="offer">SEASONAL OFFERS</p>
        </div>
        <div>
          <img className="dish" src="img/dish.jpg" alt="About 1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
