import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section = styled.section`
  text-align: center;
  background: #f5f5f5;
  min-width: 1520.8px;
  height: 750px;
  left: -185.4px;
  width: 1520.8px;
  padding-top: 70px;
`;

const Heading = styled.div`
  span {
     font-family: "Great Vibes";
  --font-weight: theme;
  font-size: 60px;
  color: #c5ab6b;
  padding: 500px;
  margin-bottom: 5px;
  margin-top: 50px;
  line-height: 65px;
  }
  h2 {
   font-family: Poppins';
 font-size: 50px;
    line-height: 55px;
  font-weight: normal;
  margin: 10px 0 30px;
  color: #303030;
    font-size: 3rem;
    margin: 10px 0;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 2px;
  margin: 10px auto;
  background-color: #ddd;
  position: relative;
  &::after {
    content: "*";
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    color: #c5ab6b;
    font-size: 18px;
  }
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Arrow = styled.button`
  border: none;
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-size: 20px;
  background: rgb(197, 171, 107);
  padding: 7px 10px;
  cursor: pointer;
  margin-right: 230px;
  margin-left: 200px;
  transition: 0.3s ease;
  &:hover {
    background-color: #b39658;
  }
`;

const Content = styled.div`
  max-width: 600px;
  padding-top: 50px;
  margin: 0 30px;
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: white;
`;

const Quote = styled.div`
  font-style: italic;
  font-weight: normal;
  color: #878787;
  font-size: 18px;
  line-height: 30px;
  font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;
  p {
    margin: 10px 0;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #878787;
  }
  svg {
    color: #c5ab6b;
    font-size: 1.2rem;
  }
`;

const Stars = styled.div`
  margin: 15px 0;
  color: #c5ab6b;
  font-size: 1.2rem;
`;

const Name = styled.h4`
  color: #c5ab6b;
  font-weight: bold;
  margin: 5px 0;
`;

const Role = styled.p`
  color: #777;
  font-size: 0.9rem;
`;

const Dots = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#222" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const testimonials = [
  {
    name: "RICK JAMES",
    role: "Regular customer",
    text: "In volutpat vehicula iaculis. Nullam velit dapibus vel suscipit malesuada. Morbi tincidunt, dui tristique tincidunt faucibus, purus sapien consectetur libero, vitae venenatis eros lacus vitae erat. Mauris tristique pretium tristique.",
    image: "/img/say.jpg",
    rating: 5,
  },
  {
    name: "ANNA GREENFIELD",
    role: "Restaurant expert",
    text: "WOW! Dapibus velit vel suscipit malesuada. Morbi tincidunt, purus sapien consectetur libero, vitae venenatis eros lacus vitae erat. Mauris tristique pretium tristique.",
    image: "/img/say1.jpg",
    rating: 5,
  },
  {
    name: "TIFFANY BRIGHT",
    role: "Regulr customer",
    text: "Morbi tincidunt, dui tristique tincidunt faucibus, purus sapien consectetur libero, vitae venenatis eros lacus vitae erat. Mauris tristique pretium tristique. Thanx!",
    image: "/img/say.jpg",
    rating: 5,
  },
  {
    name: "RICK JAMES",
    role: "Regular customer",
    text: "In volutpat vehicula iaculis. Nullam velit dapibus vel suscipit malesuada. Morbi tincidunt, dui tristique tincidunt faucibus, purus sapien consectetur libero, vitae venenatis eros lacus vitae erat. Mauris tristique pretium tristique.",
    image: "/img/say1.jpg",
    rating: 5,
  },
  // Add more testimonials here
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <Section>
      <Heading>
        <span>What people</span>
        <h2>SAY ABOUT US</h2>
        <Divider />
      </Heading>
      <Slider>
        <Arrow onClick={prevSlide}>
          <FaChevronLeft />
        </Arrow>
        <Content>
          <Avatar
            src={testimonials[current].image}
            alt={testimonials[current].name}
          />
          <Quote>
            <p>{testimonials[current].text}</p>
          </Quote>
          <Stars>{"★".repeat(testimonials[current].rating)}</Stars>
          <Name>{testimonials[current].name}</Name>
          <Role>{testimonials[current].role}</Role>
        </Content>
        <Arrow onClick={nextSlide}>
          <FaChevronRight />
        </Arrow>
      </Slider>
      <Dots>
        {testimonials.map((_, i) => (
          <Dot key={i} active={i === current} onClick={() => setCurrent(i)} />
        ))}
      </Dots>
    </Section>
  );
};

export default TestimonialSlider;
