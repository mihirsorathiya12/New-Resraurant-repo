import React, { useState } from "react";
import styled from "styled-components";

const EventCard = styled.div`
  display: flex;
  background: #fff;
  color: #303030;
  max-width: 1130px;
  height: 510px;
  margin: auto;
  margin-bottom: 90px !important;
  padding-right: 40px !important;
  padding-left: 40px !important;
  background-color: #ffffff !important;
  border-radius: 0px;
  justify-content: center;
  position: relative; /* Important for absolute arrow positioning */
  align-items: center;
  background: white;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => left && `left: 10px;`}
  ${({ right }) => right && `right: 10px;`}
  background: #c5ab6b;
  color: white;
  border: none;
  font-weight: bold;
  width: 40px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background: #a98d4a;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

const EventImage = styled.img`
  width: 96%;
  height: 96%;
  padding: 60px -0px 120px 15px;
  object-fit: cover;
`;

const EventDetails = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-top: -180px;
`;

const EventSubtitle = styled.h4`
  font-family: "Great Vibes";
  --font-weight: theme;
  color: #c5ab6b;
  font-size: 40px;
  line-height: 45px;
  margin: 0px 0px 5px;

  margin-top: 30px;
`;

const EventHeading = styled.h2`
  font-family: "Poppins";
  font-weight: normal;
  color: #303030;
  font-size: 35px;
  line-height: 40px;
  margin-bottom: 5px;
`;

const EventDate = styled.p`
  font-size: 16px;
  font-family: "Poppins";
  margin-top: 18px;
  margin-bottom: 20px;
  line-height: 24px;
  font-weight: 500;
  color: #333;
`;

const EventDesc = styled.p`
  font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;
  font-size: 14px;
  color: #878787;
  margin-top: 10px;
  line-height: 1.5;
`;

const BookButton = styled.button`
  background: #c5ab6b;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 50px;
  position: absolute;
  bottom: 100px;
  left: 574px;
  &:hover {
    background: #b08d42;
  }
`;
const EventsContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/img/res.jpg") center/cover no-repeat;
  text-align: center;
  padding: 60px 20px;
  color: white;
  width: 100vw;
  height: 120vh;
  align-items: center;
  justify-content: center;
  margin-left: -80px;
  margin-bottom: -50px;
  overflow: hidden;
`;

const EventTitle = styled.h2`
  font-family: "Poppins";
  font-weight: normal;
  color: #ffffff;
  font-size: 50px;
  line-height: 55px;
`;
const EventSubtitles = styled.h3`
  font-family: "Great Vibes";
  --font-weight: theme;
  color: #c5ab6b;
  font-size: 60px;
  line-height: 65px;
  justify-content: center;
  margin: 0px 0px 5px;
  display: flex;
  margin-top: 20px;
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
  margin-top: -3px;
  margin-bottom: 40px;
`;

// 👉 Dummy Event Data
const events = [
  {
    image: "/img/band2.jpg",
    title: "POWER ROCK NIGHT",
    subtitle: "Upcoming",
    date: "December 10,2016 22:00 Hs",
    desc: "Mauris elementum ex sed pretium varius. Phasellus vitae nibh rutrum, luctus felis maximus, sagittis neque. Quisque accumsan velit ipsum, a egestas enim volutpat at. Integer dictum annte odio, vitae convallis nunc cursus eu. Aenean finibus imperdiet ex, eu hendrerit quam vehicula ac. Sed vel erat eu libero eleifend fringilla.",
  },
  {
    image: "/img/band1.jpg",
    title: "THE7 BAND LIVE",
    subtitle: "Upcoming",
    date: "December 15,2016 21:30 Hs",
    desc: "In volutpat vehicula iaculis. Nullam velit dapibus vel suscipit malesuada. Morbi tincidunt, dui tristique tincidunt faucibus, purus sapien consectetur libero, vitae venenatis eros lacus vitae erat. Mauris tristique pretium tristique. Integer at nulla at eros suscipit suscipit vitae nec diam. Nullam dictum sed metus nec mollis.",
  },
  {
    image: "/img/band3.jpg",
    title: "ROCK & ROLL NIGHT",
    subtitle: "Upcoming",
    date: "December 05,2016 21:00 Hs",
    desc: "Phasellus in arcu non nunc porta elementum. Ut tempus varius feugiat. Curabitur tincidunt risus sit amet ullamcorper ullamcorper. Pellentesque neque massa, ornare et nibh vitae, cursus tincidunt nibh. Cras sagittis ex lectus, at euismod leo dictum quis. Proin tempor ipsum elit, a efficitur arcu finibus sed.",
  },
];

const EventSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const current = events[index];

  return (
    <EventsContainer>
      <EventSubtitles> Party with us!</EventSubtitles>
      <EventTitle>UPCOMING EVENTS</EventTitle>

      <Separatorspp />
      <Separatorssppp />

      <EventCard>
        <ArrowButton left onClick={handlePrev}>
          {"<"}
        </ArrowButton>

        <ImageContainer>
          <EventImage src={current.image} alt={current.title} />
        </ImageContainer>

        <EventDetails>
          <EventSubtitle>{current.subtitle}</EventSubtitle>
          <EventHeading>{current.title}</EventHeading>
          <EventDate>{current.date}</EventDate>
          <EventDesc>{current.desc}</EventDesc>
        </EventDetails>
        <BookButton className="boktab">BOOK A TABLE</BookButton>
        <ArrowButton right onClick={handleNext}>
          {">"}
        </ArrowButton>
      </EventCard>
    </EventsContainer>
  );
};

export default EventSlider;
