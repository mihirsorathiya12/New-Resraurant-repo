import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EventSection = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  background: url("assets/background.jpg");
  left: 0;
  top: 0;
  width: 100%;
  content: "";
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Overbay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
const EventContant = styled.div`
  position: relative;
  z-index: 2;
`;
const EventTitle = styled.h1`
  font: 50px Poppnis, Helvetica, Arial, Verdana;
  color: #ffffff;
  max-width: 100%;
`;
const Breadcrumd = styled.p`
  font: 13px "Open Sans", Helvetica, Arial, Vardana;
  color: #ffffff;
`;
const MenuMain = styled.div`
  background: rgb(244, 244, 244);
  width: 100%;
  padding: 3rem 5%;
`;
const MenuCard = styled.div`
  // background: #f8f8f8;
  margin: 0px 30px;
  padding: 45px 40px 15px;
  padding: 2rem;
  border-radius: 0px;
  width: 570px;
  height: 542px;

  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  margin: 2rem auto;
  margin-right: 100px;
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
`;
const Separatorsss = styled.div`
  height: 1px;
  background: #d4af37;
  width: 70px;
  margin: 5px auto;
  margin-top: -1px;
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
  padding: 16px 0px;
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
const Container = styled.div`
  text-align: center;
  padding: 50px 20px;
  background: #ffffff;
`;

const H2 = styled.h2`
  font-family: "Great Vibes", cursive;
  font-size: 40px;
  color: #c5ab6b;
  margin-bottom: 10px;
`;

const Subtitle = styled.h1`
  font: 35px Poppins;
  // font-weight: bold;
  margin-top: 5px;
  color: #303030;
  justify-content: center;
  margin-top: -10px;
`;

const Time = styled.p`
  font: 14px Poppins;
  color: #bfbfbf;
  margin: 5px 0px 0px;
  margin-bottom: 50px;
  margin-top: 10px;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  border-top: 1px solid #ddd;
  padding-top: 20px;
`;

const MenuItems = styled.div`
  text-align: left;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px dotted #ccc;
`;

const DishName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const DishDetails = styled.p`
  font-size: 14px;
  color: gray;
  margin: 5px 0;
`;

const Prices = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #b5ab6b;
`;

const Button = styled.button`
  background-color: #b5ab6b;
  color: white;
  border: none;
  padding: 12px 25px 11px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
  transition: 0.3s;
  // margin: 0px 0px 10px;

  &:hover {
    background-color: #8a6c31;
  }
`;

const Menu = () => {
  return (
    <EventContainer>
      <EventSection className="eventback">
        <Overbay />
        <EventContant>
          <EventTitle>Menu</EventTitle>
          <Breadcrumd>
            <Link to="/" className="homi">
              Home
            </Link>
            &nbsp;/&nbsp;Menu
          </Breadcrumd>
        </EventContant>
      </EventSection>
      <MenuMain>
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
        <MenuCard>
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

          <MenuItem>
            <ItemDetails>
              <ItemName>Fruit Salad</ItemName>
              <ItemDesc>Strawberry, peach, kiwi & vanilla sauce</ItemDesc>
            </ItemDetails>
            <Price>$5.00</Price>
          </MenuItem>
        </MenuCard>

        <Container>
          <H2>Tasty Dishes</H2>
          <Subtitle>FOR LUNCH</Subtitle>
          <Time>EVERYDAY 1:00 PM - 3:00 PM</Time>

          <MenuGrid>
            <MenuItems>
              <div>
                <DishName>Italian Style</DishName>
                <DishDetails>
                  Vegetable soup + spaghetti vongole + coffee
                </DishDetails>
              </div>
              <Prices>$17.00</Prices>
            </MenuItems>

            <MenuItems>
              <div>
                <DishName>For Meat Lovers</DishName>
                <DishDetails>
                  T-bone steak + grilled corn + green salad + red house wine
                </DishDetails>
              </div>
              <Prices>$25.50</Prices>
            </MenuItems>

            <MenuItems>
              <div>
                <DishName>Kids Lunch</DishName>
                <DishDetails>
                  Tomato soup with croutons + small caesar salad + apple juice
                </DishDetails>
              </div>
              <Prices>$10.00</Prices>
            </MenuItems>

            <MenuItems>
              <div>
                <DishName>Light Summer Lunch</DishName>
                <DishDetails>
                  Vegetable soup + caesar salad + coffee
                </DishDetails>
              </div>
              <Prices>$15.00</Prices>
            </MenuItems>
          </MenuGrid>

          <Button
            className="Menuss"
            onClick={() =>
              (window.location.href = "http://localhost:3000/menu")
            }
          >
            VIEW FULL MENU
          </Button>
        </Container>
      </MenuMain>
      <Footer />
    </EventContainer>
  );
};

export default Menu;
