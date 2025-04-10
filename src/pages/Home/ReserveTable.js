import React from "react";
import styled from "styled-components";

const ReserveWrapper = styled.section`
  background-color: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
`;

const Heading = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;

  h2 {
    font-size: 60px;
    line-height: 65px;
    font-family: "Great Vibes";
    --font-weight: theme;
    color: #c5ab6b;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 50px;
    line-height: 55px;
    font-family: "Poppins";
    font-weight: normal;
    color: #303030;
  }
`;
const Separatorspp = styled.div`
  height: 1px;
  background: #878787;
  width: 90px;
  margin: 6px auto;
  margin-top: 20px;
`;
const Separatorssppp = styled.div`
  height: 1px;
  background: #878787;
  width: 120px;
  margin: 5px auto;
  margin-top: 0px;
  margin-bottom: 60px;
`;
const ReserveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1100px;
  margin: auto;
`;

const ImageBox = styled.div`
  flex: 1 1 510px;
  margin-left: -25px;
  img {
    width: 100%;
    height: 73vh;
    border-radius: 0px;
    display: block;
  }
`;

const FormBox = styled.form`
  flex: 1 1 500px;
  background-color: #fff;
  padding: 30px;
  border-radius: 0px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  color: #878787;
  text-align: left;
  margin-right: -25 px;
  height: 73vh;
  input,
  select {
    width: 100%;
    color: #878787;
    padding: 8px 10px;
    margin: 2px 0 14px;
    border: 1px solid #ddd;
    border-radius: 0px;
    option {
      color: #878787;
    }
  }

  button {
    background-color: #c5ab6b;
    color: #fff;
    padding: 8px 23px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #b89353;
    }
  }

  p {
    font-size: 14px;
    color: #878787;
    margin-top: 10px;
  }
`;

const ReserveTable = () => {
  return (
    <ReserveWrapper>
      <Heading>
        <h2>Reserve</h2>
        <h3>A TABLE</h3>
        <Separatorspp />
        <Separatorssppp />
      </Heading>
      <ReserveContainer>
        <ImageBox>
          <img src="/img/resver.jpg" alt="restaurant table" />
        </ImageBox>
        <FormBox>
          <label>Your Name</label>
          <input type="text" placeholder="Kate Nilsson" />

          <label>Phone</label>
          <input type="tel" placeholder="+1 (234) 567-890" />

          <label>Date</label>
          <input type="date" />

          <label>Time</label>
          <select>
            <option>12:00pm</option>
            <option>12:30pm</option>
            <option>1:00pm</option>
            <option>1:30pm</option>
            <option>2:00pm</option>
            <option>2:30pm</option>
            <option>3:00pm</option>
            <option>3:30pm</option>
            <option>4:00pm</option>
            <option>4:30pm</option>
            <option>5:00pm</option>
            <option>5:30pm</option>
            <option>6:00pm</option>
            <option>6:30pm</option>
            <option>7:00pm</option>
            <option>7:30pm</option>
            <option>8:00pm</option>
            <option>8:30pm</option>
            <option>9:00pm</option>
          </select>

          <label>Number of Guests</label>
          <input type="number" defaultValue={2} />

          <button type="submit">Submit</button>

          <p>
            Vivamus id consectetur mauris. Praesent dui purus, interdum eget
            urna nec, mollis magna. Fusce libero at porta gravida.
          </p>
        </FormBox>
      </ReserveContainer>
    </ReserveWrapper>
  );
};

export default ReserveTable;
