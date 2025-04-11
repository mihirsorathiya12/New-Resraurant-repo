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
  background: #ffffff;
  width: 100%;
  padding: 3rem 5%;
`;
const MenuCard = styled.div`
  background: #f4f4f4;
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
  border-bottom: 1px dashed rgba(34, 34, 34, 0.15);
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
  background: #f4f4f4;
  width: 100%;
  height: auto;
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
  width: 78%;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  &:last-child {
    border-bottom: 1px dashed rgba(34, 34, 34, 0.15);
  }
`;

const MenuItems = styled.div`
  text-align: left;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-color: rgba(34, 34, 34, 0.15);
  border-top-width: 1px;
  border-top-style: dashed;
  border-bottom: none;
  line-height: 9px;
  margin: 0 auto;
`;

const DishName = styled.h3`
 font-size: 17px;
    line-height: 22px;
    font-family: 'Raleway';
    font-weight: 600;
    margin-bottom: 8px;
}
`;

const DishDetails = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: normal;
  margin-bottom: 8px;
  color: #878787;
`;

const Prices = styled.span`
  font-size: 17px;
  line-height: 22px;
  font-family: "Raleway";
  font-weight: 600;
  color: #c5ab6b;
  margin-bottom: 8px;
`;

const MenuWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/img/res.jpg") center/cover no-repeat;
  background-size: cover;

  background-repeat: no-repeat;
  position: relative;
  justify-content: center;
  align-items: center;
  color: inherit;
  // position: absolute;
  width: 100%;
  height: 100% !important;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  padding: 80px 20px;
  color: white;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 35px;
  line-height: 40px;
  font-family: "Poppins";
  font-weight: normal;
  color: #ffffff;
  margin-bottom: 50px;
`;

const SubHeading = styled.p`
  font-size: 40px;
  line-height: 45px;
  font-family: "Great Vibes";
  --font-weight: theme;
  color: #c5ab6b;
`;

const MenuList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  width: 78%;
  margin: 0 auto;
`;

const MenuColumn = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: left;
`;

const MenuItemed = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 0px;
  margin: 0ox -30px;
  border-top-width: 1px;
  border-top-style: dashed;
  border-bottom: none;
  border-top-width: 1px;
  border-top-style: dashed;
  border-bottom: none;
  color: #888;
  &:last-child {
    border-bottom: 1px dashed #888;
  }

  strong {
    font-size: 17px;
    line-height: 22px;
    font-family: "Raleway";
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 8px;
  }

  p {
    margin-top: 8px;
    font-size: 14px;
    line-height: 22px;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 8px;
  }
`;
const Priced = styled.div`
  font-size: 17px;
  line-height: 22px;
  font-family: "Raleway";
  font-weight: 600;
  color: #c5ab6b;
  margin-bottom: 8px;
  justify-content: flex-end;
  display: flex;
  margin-top: -60px;
  margin-bottom: 50px;
`;

const Substantial = styled.div`
  background-color: #ffffff;
  background-size: cover;

  background-repeat: no-repeat;
  position: relative;
  justify-content: center;
  align-items: center;
  color: inherit;
  // position: absolute;
  width: 100%;
  height: 100% !important;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  padding: 80px 20px;
  color: white;
  text-align: center;
`;

const Headings = styled.h2`
  font-family: "Poppins";
  font-weight: normal;
  color: #303030;
  font-size: 35px;
  line-height: 40px;
  margin-bottom: 50px;
`;
const SubHeadings = styled.p`
  font-size: 40px;
  line-height: 45px;
  font-family: "Great Vibes";
  --font-weight: theme;
  color: #c5ab6b;
`;

const MenuListen = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  width: 78%;
  margin: 0 auto;
`;

const MenuColumns = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: left;
`;

const MenuItm = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 0px;
  margin: 0ox -30px;
  border-top-width: 1px;
  border-top-style: dashed;
  border-bottom: none;
  border-top-width: 1px;
  border-top-style: dashed;
  border-bottom: none;
  color: rgba(34, 34, 34, 0.15);
  &:last-child {
    border-bottom: 1px dashed rgba(34, 34, 34, 0.15);
  }

  strong {
    font-size: 17px;
    line-height: 22px;
    font-family: "Raleway";
    font-weight: 600;
    color: #303030;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: normal;
    margin-bottom: 4px;
    margin-top: 7px;
    color: #878787;
  }
`;
const Pric = styled.div`
  font-size: 17px;
  line-height: 22px;
  font-family: "Raleway";
  font-weight: 600;
  color: #c5ab6b;
  margin-bottom: 8px;
  justify-content: flex-end;
  display: flex;
  margin-top: -60px;
  margin-bottom: 50px;
`;

const MenuDelightful = styled.section`
  background-color: rgb(244, 244, 244);
  background-size: cover;

  background-repeat: no-repeat;
  position: relative;
  justify-content: center;
  align-items: center;
  color: inherit;
  // position: absolute;
  width: 100%;
  height: 100% !important;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  padding: 80px 20px;
  color: white;
  text-align: center;
`;

const MenuRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  width: 78%;
  margin: 0 auto;
`;

const ColumnMenu = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: left;
`;

const HeadingSub = styled.h4`
  font-size: 40px;
  line-height: 45px;
  font-family: "Great Vibes";
  --font-weight: theme;
  color: #c5ab6b;
`;

const HeadingMenu = styled.h2`
  font-family: "Poppins";
  font-weight: normal;
  color: #303030;
  font-size: 35px;
  line-height: 40px;
  margin-bottom: 50px;
`;

const ItemMenu = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px dashed rgba(34, 34, 34, 0.15);
  padding: 15px 0;

  &:last-child {
    border-bottom: 1px dashed rgba(34, 34, 34, 0.15);
  }

  div {
    max-width: 80%;
  }

  strong {
    font-size: 17px;
    line-height: 22px;
    font-family: "Raleway";
    font-weight: 600;
    color: #303030;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: normal;
    margin-bottom: 8px;
    margin-top: 7px;
    color: #878787;
  }
`;

const Pricy = styled.span`
  font-size: 17px;
  line-height: 22px;
  font-family: "Raleway";
  font-weight: 600;
  color: #c5ab6b;
  margin-bottom: 8px;
  justify-content: flex-end;
  display: flex;
  // margin-top: -60px;
  // margin-bottom: 50px;
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
      </MenuMain>

      <Container>
        <H2>Tasty Dishes</H2>
        <Subtitle>FOR LUNCH</Subtitle>
        <Time>EVERYDAY 1:00 PM - 3:00 PM</Time>

        <MenuGrid>
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
              <DishDetails>Vegetable soup + caesar salad + coffee</DishDetails>
            </div>
            <Prices>$15.00</Prices>
          </MenuItems>
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
        </MenuGrid>
      </Container>
      <MenuWrapper>
        <SubHeading>Light & fresh</SubHeading>
        <Heading>STARTERS</Heading>
        <MenuList>
          <MenuColumn>
            <MenuItemed>
              <div>
                <strong>Hummus</strong> <p>With hot pitta bread</p>
              </div>
              <Priced>$2.30</Priced>
            </MenuItemed>
            <MenuItemed>
              <div>
                <strong>Bruschetta</strong>
                <p>With Sicilian tomatoes, garlic and olive oil</p>
              </div>
              <Priced>$5.50</Priced>
            </MenuItemed>
            <MenuItemed>
              <div>
                <strong>Caesar Salad</strong>
                <p>
                  With chicken or shrimps, parmigiano cheese, and creamy sauce
                </p>
              </div>
              <Priced>$12.00</Priced>
            </MenuItemed>
          </MenuColumn>

          <MenuColumn>
            <MenuItemed>
              <div>
                <strong>Squid Salad</strong>
                <p>With hot chilli sauce and aragula</p>
              </div>
              <Priced>$5.00</Priced>
            </MenuItemed>
            <MenuItemed>
              <div>
                <strong>Green Salad</strong>
                <p>With classic Italian dressing</p>
              </div>
              <Priced>$4.00</Priced>
            </MenuItemed>
            <MenuItemed>
              <div>
                <strong>Beef Carpaccio</strong>
                <p>With whole grain toast and olive oil</p>
              </div>
              <Priced>$11.70</Priced>
            </MenuItemed>
          </MenuColumn>
        </MenuList>
      </MenuWrapper>

      <Substantial>
        <SubHeadings>Substantial</SubHeadings>
        <Headings>MAIN COURSES</Headings>
        <MenuListen>
          <MenuColumns>
            <MenuItm>
              <div>
                <strong>Salmon Ravioli</strong>
                <p>With wild salmon, spinach and creamy sauce</p>
              </div>
              <Pric>$2.30</Pric>
            </MenuItm>
            <MenuItm>
              <div>
                <strong>Spaghetti Parmigiano</strong>
                <p>With grated parmigiano and tomato sauce</p>
              </div>
              <Pric>$7.00</Pric>
            </MenuItm>
            <MenuItm>
              <div>
                <strong>Lasagna</strong>
                <p>Classic Italian lasagna with ground beef</p>
              </div>
              <Pric>$17.00</Pric>
            </MenuItm>
            <MenuItm>
              <div>
                <strong>Fish of the Day</strong>
                <p>With french fries and green salad</p>
              </div>
              <Pric>$11.70</Pric>
            </MenuItm>
          </MenuColumns>

          <MenuColumns>
            <MenuItm>
              <div>
                <strong>Fish of the Day</strong>
                <p>With french fries and green salad</p>
              </div>
              <Pric>$15.00</Pric>
            </MenuItm>
            <MenuItm>
              <div>
                <strong>T-Bone Steak</strong>
                <p>With grilled corn and wine sauce</p>
              </div>
              <Pric>$20.00</Pric>
            </MenuItm>
            <MenuItm>
              <div>
                <strong>Spaghetti Vongole</strong>
                <p>With clams, tomato sauce and fresh parsley</p>
              </div>
              <Pric>$11.50</Pric>
            </MenuItm>
            <MenuItm>
              <div>
                <strong>Spaghetti Parmigiano</strong>
                <p>With grated parmigiano and tomato sauce</p>
              </div>
              <Pric>$8.50</Pric>
            </MenuItm>
          </MenuColumns>
        </MenuListen>
      </Substantial>

      <MenuDelightful>
        <MenuRow>
          {/* Desserts Column */}
          <ColumnMenu>
            <HeadingSub>Delightful</HeadingSub>
            <HeadingMenu>DESSERTS</HeadingMenu>
            <ItemMenu>
              <div>
                <strong>Chocolate Cake</strong>
                <p>Dark chocolate biscuit & strawberry cream</p>
              </div>
              <Pricy>$2.99</Pricy>
            </ItemMenu>
            <ItemMenu>
              <div>
                <strong>Vanilla Cake</strong>
                <p>With house made ice cream</p>
              </div>
              <Pricy>$3.99</Pricy>
            </ItemMenu>
            <ItemMenu>
              <div>
                <strong>House Made Ice Cream</strong>
                <p>With fresh mint and strawberry jam</p>
              </div>
              <Pricy>$4.50</Pricy>
            </ItemMenu>
            <ItemMenu>
              <div>
                <strong>Fruit Salad</strong>
                <p>Strawberry, peach, kiwi & vanilla sauce</p>
              </div>
              <Pricy>$5.00</Pricy>
            </ItemMenu>
          </ColumnMenu>

          {/* Drinks Column */}
          <ColumnMenu>
            <HeadingSub>Our signature</HeadingSub>
            <HeadingMenu>DRINKS & SPIRITS</HeadingMenu>
            <ItemMenu>
              <div>
                <strong>Red House Wine</strong>
              </div>
              <Pricy>$5.00</Pricy>
            </ItemMenu>
            <ItemMenu>
              <div>
                <strong>White House Wine</strong>
              </div>
              <Pricy>$5.00</Pricy>
            </ItemMenu>
            <ItemMenu>
              <div>
                <strong>Craft Beer</strong>
              </div>
              <Pricy>$3.00</Pricy>
            </ItemMenu>
            <ItemMenu>
              <div>
                <strong>Cider</strong>
              </div>
              <Pricy>$3.00</Pricy>
            </ItemMenu>
            <ItemMenu>
              <div>
                <strong>Lemonade</strong>
              </div>
              <Pricy>$2.00</Pricy>
            </ItemMenu>
            <ItemMenu>
              <div>
                <strong>Coffee</strong>
              </div>
              <Pricy>$2.00</Pricy>
            </ItemMenu>
            <ItemMenu>
              <div>
                <strong>Herbal Tee</strong>
              </div>
              <Pricy>$2.00</Pricy>
            </ItemMenu>
          </ColumnMenu>
        </MenuRow>
      </MenuDelightful>
      <Footer />
    </EventContainer>
  );
};

export default Menu;
