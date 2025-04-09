import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  text-align: center;
  // width: 100%;
  padding: 50px 20px;
  // background: #ffffff;
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

const MenuItem = styled.div`
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

const Price = styled.span`
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

const MenuSection = () => {
  return (
    <Container>
      <H2>Tasty Dishes</H2>
      <Subtitle>FOR LUNCH</Subtitle>
      <Time>EVERYDAY 1:00 PM - 3:00 PM</Time>

      <MenuGrid>
        <MenuItem>
          <div>
            <DishName>Italian Style</DishName>
            <DishDetails>
              Vegetable soup + spaghetti vongole + coffee
            </DishDetails>
          </div>
          <Price>$17.00</Price>
        </MenuItem>

        <MenuItem>
          <div>
            <DishName>For Meat Lovers</DishName>
            <DishDetails>
              T-bone steak + grilled corn + green salad + red house wine
            </DishDetails>
          </div>
          <Price>$25.50</Price>
        </MenuItem>

        <MenuItem>
          <div>
            <DishName>Kids Lunch</DishName>
            <DishDetails>
              Tomato soup with croutons + small caesar salad + apple juice
            </DishDetails>
          </div>
          <Price>$10.00</Price>
        </MenuItem>

        <MenuItem>
          <div>
            <DishName>Light Summer Lunch</DishName>
            <DishDetails>Vegetable soup + caesar salad + coffee</DishDetails>
          </div>
          <Price>$15.00</Price>
        </MenuItem>
      </MenuGrid>

      <Button
        className="Menuss"
        onClick={() => (window.location.href = "http://localhost:3000/menu")}
      >
        VIEW FULL MENU
      </Button>
    </Container>
  );
};

export default MenuSection;
