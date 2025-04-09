import React from "react";
import "./Home.css";
// import Navbar from "../../components/Navbar";
import Footer from "./Footer";
import Menus from "./Menus";
import styled from "styled-components";
import Eventslider from "./Eventslider";
import TestimonialSlider from "./TestimonialSlider";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins";
const MenuCards = styled.div`
  background-color: #ffffff;
  // margin: 0px 30px;
  // padding: 45px 40px 15px;
  padding: 2rem;
  border-radius: 0px;
  width: 570px;
  height: 542px;

  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  margin: 2rem auto;
  margin-right: 80px;
  margin-top: -590px;
`;

const Title = styled.h2`
  color: #303030;
  font: 35px Popping;
  // font-weight: bold;
  margin: -5px 0px 0px;
`;

const Separator = styled.div`
  height: 1px;
  background: #d4af37;
  width: 50px;
  margin: 5px auto;
  margin-top: 10px;
`;
const Separatorsss = styled.div`
  height: 1px;
  background: #d4af37;
  width: 70px;
  margin: 5px auto;
  margin-top: -1px;
  margin-bottom: 40px;
`;
const Separators = styled.div`
  height: 1px;
  background: #878787;
  width: 70px;
  margin: 5px auto;
`;
const Separatorss = styled.div`
  height: 1px;
  background: #878787;
  width: 90px;
  margin: 5px auto;
  margin-top: -3px;
`;

const MenuItem = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dotted #ccc;
  padding: 20px 10px;
  margin: 0ox -30px;
`;
const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px dotted #ccc;
  padding: 20px 10px;
  margin: 0ox -30px;
`;

const ItemDetails = styled.div`
  text-align: left;
`;

const ItemName = styled.p`
  font-weight: bold;
  margin: 0px 0px 8px;
  color: #303030;
  font: 17px Raleway;
`;

const ItemDesc = styled.p`
  // font: 14px "Oepn Sans", Helvetica, Arial, Verdana;
  color: #878787;
  margin: 0px 0px 8px;
`;

const Price = styled.span`
  font-weight: bold;
  color: #c5ab6b;
  font-size: 15px;
`;

const Overlays = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
const GalleryContainer = styled.div`
  padding: 80px 20px;
  text-align: center;
  background: #fff;
`;

const GalleryHeading = styled.h2`
  font-size: 60px;
  font-family: "Great Vibes";
  color: #c5ab6b;
  margin-bottom: 5px;
  --font-weight: theme;
  line-height: 65px;
`;

const SubHeading = styled.h3`
  font-size: 50px;
  line-height: 55px;
  font-family: "Poppins";
  font-weight: normal;
  color: #303030;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageBox = styled.div`
  overflow: hidden;
  border-radius: 0px;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const images = [
  "/img/gallery4.jpg",
  "/img/gallery2.jpg",
  "/img/gallery5.jpg",

  "/img/gallery1.jpg",

  "/img/gallery6.jpg",
  "/img/gallery3.jpg",
];
const Divider = styled.div`
  height: 1px;
  background: #878787;
  width: 70px;
  margin: 5px auto;
  margin-top: 21px;
`;
const Dividers = styled.div`
  height: 1px;
  background: #878787;
  width: 90px;
  margin: 5px auto;
  margin-top: -3px;
  margin-bottom: 70px;
`;
const Home = () => {
  return (
    <div>
      {/* Hero Section with background image */}

      {/* <Navbar /> */}
      <div className="hero-section">
        <Overlays />
        <div className="overlay">
          <div className="main-box">
            <img className="logo2" src="img/logo2.webp" alt="Logo" />
            <h1 className="even welcom-txt great-vibes">Welcome to</h1>
            <img className="logo3" src="img/logo3.webp" alt="Logo" />
          </div>
          <span className="great-vibes">RESTO SEVEN</span>
          <img className="logo4" src="img/logo4.webp" alt="Logo" />
          <div className="opening-hours">
            <h3 className="evens">OPENING HOURS</h3>
            <p className="hmon">
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
          <Separators />
          <Separatorss />
        </div>
        <div>
          <img className="dish" src="img/dish.jpg" alt="About 1" />
        </div>
        {/* Summer Specials Menu Added Here */}
        <MenuCards>
          <Title>SUMMER SPECIALS</Title>
          <Separator />
          <Separatorsss />
          <MenuItem>
            <ItemDetails>
              <ItemName>Green Salad</ItemName>
              <ItemDesc>With classic Italian dressing</ItemDesc>
            </ItemDetails>
            <Price>$4.00</Price>
          </MenuItem>

          <MenuItem>
            <ItemDetails>
              <ItemName>Vegetable Soup</ItemName>
              <ItemDesc>With whole-grain croutons</ItemDesc>
            </ItemDetails>
            <Price>$7.00</Price>
          </MenuItem>

          <MenuItem>
            <ItemDetails>
              <ItemName>T-Bone Steak</ItemName>
              <ItemDesc>With grilled corn and wine sauce</ItemDesc>
            </ItemDetails>
            <Price>$25.00</Price>
          </MenuItem>

          <MenuItems>
            <ItemDetails>
              <ItemName>Fruit Salad</ItemName>
              <ItemDesc>Strawberry, peach, kiwi & vanilla sauce</ItemDesc>
            </ItemDetails>
            <Price>$5.00</Price>
          </MenuItems>
        </MenuCards>
        <Menus />

        <Eventslider />
      </div>
      <GalleryContainer>
        <GalleryHeading>Gallery</GalleryHeading>
        <SubHeading>OUR INTERIOR</SubHeading>
        <Divider />
        <Dividers />

        <ImagesGrid>
          {images.map((img, index) => (
            <ImageBox key={index}>
              <img src={img} alt={`Interior ${index + 1}`} />
            </ImageBox>
          ))}
        </ImagesGrid>
      </GalleryContainer>
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default Home;
