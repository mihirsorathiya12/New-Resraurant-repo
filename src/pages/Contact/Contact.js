import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Footer from "./Footer";

const ContactWrapper = styled.div`
  font-family: "Arial", sans-serif;
  // display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroSection = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  background: url("assets/background.jpg");
  left: 0;
  top: 0;
  content: "";
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
const HeroTitle = styled.h1`
  font: 50px Poppnis, Helvetica, Arial, Verdana;
  color: #ffffff;
  max-width: 100%;
`;

const Breadcrumb = styled.p`
  margin-top: 10px;

  font: 13px "Open Sans", Helvetica, Arial, Vardana;
  color: #ffffff;
`;

const InfoSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding: 60px 20px;
  background-color: #fff;
`;

const InfoBox = styled.div`
  flex: 1 1 220px;
  max-width: 350px;
`;

const InfoTitle = styled.h4`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
  font-size: 16px;
  line-height: 26px;
  font-family: "Montserrat";
  font-weight: bold;
  svg {
    margin-right: 10px;
    color: #c7a86e;
  }
`;

const InfoTitles = styled.h4`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
  margin-top: 40px;
  font-size: 16px;
  line-height: 26px;
  font-family: "Montserrat";
  font-weight: 700;
  svg {
    margin-right: 10px;
    color: #c7a86e;
  }
`;

const InfoTitled = styled.h4`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
  margin-top: -20px;
  font-size: 16px;
  line-height: 26px;
  font-family: "Montserrat";
  font-weight: 700;
  svg {
    margin-right: 10px;
    color: #c7a86e;
  }
`;

const InfoText = styled.p`
  color: #878787;
  font-size: 15px;
  line-height: 1.6;
  text-align: left;
  margin-left: 25px;
`;

const OpeningList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  margin-left: 25px;
  li {
    margin-bottom: 5px;
    font-size: 15px;
    color: #878787;
  }
`;

const Section = styled.section`
  padding: 60px 20px;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1030px;
  width: 100%;

  gap: 30px;
  justify-content: center;
`;

const Box = styled.div`
  background: #fff;
  border-radius: 0px;
  padding: 40px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  flex: 1 1 500px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const Title = styled.h2`
  font-size: 35px;
  line-height: 40px;
  font-family: "Poppins";
  font-weight: normal;
  color: #303030;
  margin-top: -5px;
  text-align: center;
  margin-bottom: 25px;
  position: relative;

  &::after {
    content: "*";
    display: block;
    font-size: 22px;
    color: #c7a86e;
    margin-top: 8px;
  }
`;

const MapWrapper = styled.div`
  height: 300px;
  border-radius: 0px;
  overflow: hidden;
  margin-bottom: 20px;
  iframe {
    width: 100%;
    height: 98%;
    border: none;
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  text-align: left;
  margin-top: -5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #878787;
  border-radius: 0px;
`;

const TextArea = styled.textarea`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #878787;
  border-radius: 5px;
  min-height: 120px;
`;

const Button = styled.button`
  background-color: #c7a86e;
  color: #fff;
  padding: 8px 25px;
  font-weight: bold;
  margin-left: -280px;
  margin-top: 10px;
  font-size: 14px;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #b5965e;
  }
`;

const ContactPage = () => {
  return (
    <ContactWrapper>
      <HeroSection className="eventback">
        <Overbay />
        <EventContant>
          <HeroTitle>Contact</HeroTitle>
          <Breadcrumb>
            <Link to="/" className="homi">
              Home
            </Link>
            &nbsp;/&nbsp; Contact
          </Breadcrumb>
        </EventContant>
      </HeroSection>

      <InfoSection>
        <InfoBox>
          <InfoTitle>
            <FaHome /> Address
          </InfoTitle>
          <InfoText>
            121 Rock Street, 21 Avenue,
            <br />
            New York, NY 92103-9000
          </InfoText>
          <InfoTitles>
            <FaMapMarkerAlt /> Parking
          </InfoTitles>
          <InfoText>Free Parking Lot on 125 Rock Street</InfoText>
        </InfoBox>

        <InfoBox>
          <InfoTitle>
            <FaPhoneAlt /> Phone
          </InfoTitle>
          <InfoText>
            1 (234) 567-891
            <br />1 (234) 987-654
          </InfoText>
          <InfoTitles>
            <FaEnvelope /> Email
          </InfoTitles>
          <InfoText>hello@restaurantdemo.com</InfoText>
        </InfoBox>

        <InfoBox>
          <InfoTitled>
            <FaClock /> Opening Hours
          </InfoTitled>
          <OpeningList>
            <li>Monday ............... 8 am – 10 pm</li>
            <li>Tuesday ............... 8 am – 10 pm</li>
            <li>Wednesday .......... 8 am – 10 pm</li>
            <li>Thursday .............. 8 am – 10 pm</li>
            <li>Friday ................... 8 am – 11 pm</li>
            <li>Saturday ............... 8 am – 11 pm</li>
            <li>Sunday ................ 8 am – 10 pm</li>
          </OpeningList>
        </InfoBox>
      </InfoSection>

      <Section>
        <Container>
          {/* Directions Box */}
          <Box>
            <Title>DIRECTIONS</Title>
            <MapWrapper>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.593472173917!2d72.67508781496833!3d23.075376484927287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8702e3b4f82b%3A0x49a73fcd441c08e3!2sNana%20Chiloda%2C%20Ahmedabad%2C%20Gujarat%20382430!5e0!3m2!1sen!2sin!4v1649160048890!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </MapWrapper>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Text>
          </Box>

          <Box>
            <Title>GET IN TOUCH!</Title>
            <Form>
              <Input type="text" placeholder="Name *" required />
              <Input type="email" placeholder="E-mail *" required />
              <Input type="text" placeholder="Telephone" />
              <TextArea placeholder="Message" />
            </Form>
            <Button type="submit">Send message</Button>
          </Box>
        </Container>
      </Section>
      <Footer />
    </ContactWrapper>
  );
};

export default ContactPage;
