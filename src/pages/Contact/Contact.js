import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaParking,
} from "react-icons/fa";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const EventSection = styled.div`
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
const Section = styled.div`
  padding: 50px 0;
  // background: #f8f8f8;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const ContactSection = () => {
  return (
    <EventContainer>
      <EventSection className="eventback">
        <Overbay />
        <EventContant>
          <EventTitle>Contact</EventTitle>
          <Breadcrumd>
            <Link to="/" className="homi">
              Home
            </Link>
            &nbsp;/&nbsp; Contact
          </Breadcrumd>
        </EventContant>
      </EventSection>
      <Container className="main">
        <Row className="ro0">
          <Col>
            <FaMapMarkerAlt size={17} className="text-warning" />
            <span className="data"> Address</span>
            <p className="p1">
              121 Rock Street, 21 Avenue, New York, NY 92103-9000
            </p>
          </Col>
          <Col>
            <FaPhoneAlt size={17} className="text-warning" />
            <span className="data">Phone</span>
            <p className="p1">
              1 (234) 567-891
              <br />1 (234) 987-654
            </p>
          </Col>

          <Col className="text-center">
            <FaClock size={17} className="text-warning" />
            <span className="data"> Opening Hours</span>
            <p className="p1">
              Monday........... 8 am - 10 pm
              <br />
              Tuesday.......... 8 am - 10 pm
              <br />
              Wednesday........ 8 am - 10 pm
              <br />
              Thursday......... 8 am - 10 pm
              <br />
              Friday........... 8 am - 11 pm
              <br />
              Saturday......... 8 am - 11 pm
              <br />
              Sunday........... 8 am - 10 pm
            </p>
          </Col>
        </Row>

        <Row className="ro1">
          <Col>
            <FaEnvelope size={17} className="text-warning" />
            <span className="data"> Email</span>
            <p className="p1">hello@restaurantdemo.com</p>
          </Col>
          <Col className="col5">
            <FaParking size={17} className="text-warning" />
            <span className="data"> Parking</span>
            <p className="p1">Free Parking Lot on 125 Rock Street</p>
          </Col>
        </Row>
      </Container>
      <Section>
        <Container>
          <Row>
            {/* Directions Section */}
            <Col md={6}>
              <MapContainer>
                <Title>Directions</Title>
                <iframe
                  title="Google Fonts"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500&family=Work+Sans:wght@400;600;700&display=swap"
                  allowFullScreen
                ></iframe>

                <br></br>
              </MapContainer>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  color: "#666",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>

            {/* Contact Form Section */}
            <Col md={6}>
              <ContactForm>
                <Title>Get in Touch!</Title>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Control type="text" placeholder="Name *" required />
                  </Form.Group>

                  <Form.Group controlId="email" className="mt-3">
                    <Form.Control
                      type="email"
                      placeholder="E-mail *"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="phone" className="mt-3">
                    <Form.Control type="text" placeholder="Telephone" />
                  </Form.Group>

                  <Form.Group controlId="message" className="mt-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                    />
                  </Form.Group>

                  <Button className="bookt">Send Message</Button>
                </Form>
              </ContactForm>
            </Col>
          </Row>
        </Container>
      </Section>
      <Footer />
    </EventContainer>
  );
};

export default ContactSection;
