import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <Container className="m">
          <Container className="p-5">
            <Row className="pb-5">
              <Col className="FooterHeader">
                <img
                  src="img/logo1.webp"
                  alt=""
                  style={{ height: "50px", width: "205px" }}
                />
              </Col>
            </Row>
            <Row className="mihir">
              <Col>121 Rock Street, 21 Avenue, New York</Col>
              <Col>
                <Row>
                  <Col>Mon-Fri: 08.00 AM – 10:00 PM</Col>
                </Row>
                <Row className="pt-2">
                  <Col>Sat-Sun: 10:00 AM – 11:00 PM</Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>Reservation Number:</Col>
                </Row>
                <Row className="pt-2">
                  <Col>+00 11 222 333444</Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className="mi">
            <Row>
              <Col md={{ span: 12 }} className="socilclass">
                <a
                  href="https://www.facebook.com"
                  className="circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF color="#000000" size="1.2rem" />
                </a>
                <a
                  href="https://twitter.com"
                  className="circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter color="#000000" size="1.2rem" />
                </a>

                <a
                  href="https://www.instagram.com"
                  className="circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram color="#000000" size="1.2rem" />
                </a>
                <a
                  href="https://www.pinterest.com"
                  className="circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterestP color="#000000" size="1.2rem" />
                </a>
              </Col>
            </Row>
          </Container>
          <Container className="pb-5 pt-4">
            <Row>
              <Col md={{ span: 12 }} className="copy">
                2016 Seven Restaurant. All Rights Reserved.
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Footer;
