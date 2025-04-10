import React, { useState } from "react";
import "./Event.css";
import styled from "styled-components";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const EventSections = styled.div`
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

const SectionTitle = styled.h2`
  font: 35px Poppins;
  color: #303030;
  margin: 0px 0px 20px;
  position: relative;
  top: -30px;
`;
const SectionTitles = styled.h2`
  font: 16px Poppins;
  color: #303030;
  margin: 18px 0px 20px;
  position: relative;
  top: -30px;
`;

const SubTitle = styled.span`
  font-size: 40px;
  color: #c5ab6b;
  font-style: italic;
`;
const HistorySections = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 10%;
  gap: 1rem;
  flex-wrap: wrap;
  background: rgb(244, 244, 244);
  margin: 100px 120px;
  padding: 20px 40px 30px;
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 1rem;
  flex: 1;
  max-width: 50%;
`;

const StyledSmallImage = styled.img`
  width: 500px;
  height: 400px;
  object-fit: cover;
  border-radius: 0px;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;
  text-align: left;
  padding: 20px;
`;

const HistoryText = styled.p`
  // font-size: 1rem;
  color: #666;
  line-height: 1.6;
  position: relative;
  top: -30px;
`;

const BandSection = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 10%;
  gap: 1rem;
  flex-wrap: wrap;
  background: rgb(244, 244, 244);
  margin: -66px 120px;
  padding: 20px 40px 30px;
`;
const BimagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 1rem;
  flex: 1;
  max-width: 50%;
`;

const StyleImage = styled.img`
  width: 500px;
  height: 400px;
  object-fit: cover;
  border-radius: 0px;
`;
const BtextContainer = styled.div`
  flex: 1;
  max-width: 50%;
  text-align: left;
  padding: 20px;
`;

const HistoryTextb = styled.p`
  // font-size: 1rem;
  color: #666;
  line-height: 1.6;
  position: relative;
  top: -30px;
`;
const SectionTitleb = styled.h2`
  font: 35px Poppins;
  color: #303030;
  margin: 0px 0px 20px;
  position: relative;
  top: -30px;
`;
const SectionTitlesb = styled.h2`
  font: 16px Poppins;
  color: #303030;
  margin: 18px 0px 20px;
  position: relative;
  top: -30px;
`;

const SubTitleb = styled.span`
  font-size: 40px;
  color: #c5ab6b;
  font-style: italic;
`;

const SectionTitlem = styled.h2`
  font: 35px Poppins;
  color: #303030;
  margin: 0px 0px 20px;
  position: relative;
  top: -30px;
`;
const SectionTitlesm = styled.h2`
  font: 16px Poppins;
  color: #303030;
  margin: 18px 0px 20px;
  position: relative;
  top: -30px;
`;

const SubTitlem = styled.span`
  font-size: 40px;
  color: #c5ab6b;
  font-style: italic;
`;
const HistorySectionsm = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 10%;
  gap: 1rem;
  flex-wrap: wrap;
  background: rgb(244, 244, 244);
  margin: 100px 120px;
  padding: 20px 40px 30px;
`;

const ImagesContainerm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 1rem;
  flex: 1;
  max-width: 50%;
`;

const StyledSmallImagem = styled.img`
  width: 500px;
  height: 400px;
  object-fit: cover;
  border-radius: 0px;
`;

const TextContainerm = styled.div`
  flex: 1;
  max-width: 50%;
  text-align: left;
  padding: 20px;
`;

const HistoryTextm = styled.p`
  // font-size: 1rem;
  color: #666;
  line-height: 1.6;
  position: relative;
  top: -30px;
`;

const ReservationSection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/img/res.jpg") center/cover no-repeat;
  background-size: cover;

  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 10%;
  min-height: 100vh;
  color: inherit;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 0px;
  text-align: left;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  color: #878787;
  max-width: 550px;
  width: 100%;
  height: 100vh;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 35px;
  line-height: 40px;
  font-family: "Poppins";
  font-weight: normal;
  color: #303030;
  margin-top: -5px;
`;
const Separators = styled.div`
  height: 1px;
  background: #c5ab6b;
  width: 90px;
  margin: 6px auto;
  margin-top: 20px;
`;
const Separatorss = styled.div`
  height: 1px;
  background: #c5ab6b;
  width: 120px;
  margin: 5px auto;
  margin-top: -3px;
  // margin-bottom: 80px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #878787;
  border-radius: 5px;
  color: #878787;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #;
  border-radius: 5px;
  color: #878787;
`;

const SubmitButton = styled.button`
  background-color: #c5ab6b;
    color: white;
    padding: 11px 30px;
     margin-top: 20px;
  margin-bottom: 20px;
     display: flex;
    text-align: left;
    font-size: 18px;
    border: 2px solid #c5ab6b;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-weight: bold;
    &:hover {
    background-color: #c5ab4b;
    color: #ffffff;
`;

const Event = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  return (
    <EventContainer>
      <EventSections className="eventback">
        <Overbay />
        <EventContant>
          <EventTitle>Event</EventTitle>
          <Breadcrumd>
            <Link to="/" className="homi">
              Home
            </Link>
            &nbsp;/&nbsp; Event
          </Breadcrumd>
        </EventContant>
      </EventSections>

      <HistorySections>
        <ImagesContainer>
          <StyledSmallImage src="/img/band1.jpg" alt="Restaurant Interior" />
        </ImagesContainer>
        <TextContainer>
          <SubTitle className="dis">Upcoming</SubTitle>
          <SectionTitle className="hists">THE7 BAND LIVE</SectionTitle>
          <SectionTitles className="dec">
            December 15, 2016 21:30 Hs
          </SectionTitles>
          <HistoryText>
            In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
            malesuada. Morbi tincidunt, dui tristique tincidunt faucibus, purus
            sapien consectetur libero, vitae venenatis eros lacus vitae erat.
            Mauris at eros suscipit suscipit vitae nec diam. dictum sed metus
            nec mollis.
            <button
              className="bookt"
              onClick={() =>
                (window.location.href = "http://localhost:3001/event")
              }
            >
              BOOK A TABLE
            </button>
          </HistoryText>
        </TextContainer>
      </HistorySections>
      <BandSection>
        <BimagesContainer>
          <StyleImage src="/img/band2.jpg" alt="Restaurant Interior" />
        </BimagesContainer>
        <BtextContainer>
          <SubTitleb className="dis">Upcoming</SubTitleb>
          <SectionTitleb className="hists">POWER ROCK NIGHT</SectionTitleb>
          <SectionTitlesb className="dec">
            December 10, 2016 22:00 Hs
          </SectionTitlesb>
          <HistoryTextb>
            Mauris elementum ex sed pretium varius. Phasellus vitae nibh rutrum,
            luctus felis maximus, Quisque accumsan velit ipsum, a egestas enim
            volutpat at. Integer dictum ante odio, vitae convallis eu hendrerit
            quam vehicula ac. Sed vel erat eu libero eleifend fringilla.
            <button
              className="bookt"
              onClick={() =>
                (window.location.href = "http://localhost:3001/event")
              }
            >
              BOOK A TABLE
            </button>
          </HistoryTextb>
        </BtextContainer>
      </BandSection>
      <HistorySectionsm>
        <ImagesContainerm>
          <StyledSmallImagem src="/img/band3.jpg" alt="Restaurant Interior" />
        </ImagesContainerm>
        <TextContainerm>
          <SubTitlem className="dis">Upcoming</SubTitlem>
          <SectionTitlem className="hists">ROCK & ROLL NIGHT</SectionTitlem>
          <SectionTitlesm className="dec">
            December 05, 2016 21:00 Hs
          </SectionTitlesm>
          <HistoryTextm>
            Phasellus in arcu non nunc porta elementum. Ut tempus varius
            feugiat. Curabitur tincidunt risus sit amet ullamcorper ullamcorper.
            Pellentesque neque massa, ornare et nibh vitae, at euismod leo
            dictum quis. Proin tempor ipsum elit, a efficitur arcu finibus sed.
            <button
              className="bookt"
              onClick={() =>
                (window.location.href = "http://localhost:3001/event")
              }
            >
              BOOK A TABLE
            </button>
          </HistoryTextm>
        </TextContainerm>
      </HistorySectionsm>
      <ReservationSection>
        <FormContainer>
          <FormTitle>RESERVE A TABLE</FormTitle>
          <Separators />
          <Separatorss />
          <form>
            <label>Your Name</label>
            <Input type="text" placeholder="Enter your name" required />

            <label>Phone</label>
            <Input type="tel" placeholder="+1 (234) 567-890" required />

            <label>Date</label>
            <Input type="date" required />

            <label>Time</label>
            <Select
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              required
            >
              <option value="">Select Time</option>
              {[
                "01:00 PM",
                "02:00 PM",
                "03:00 PM",
                "04:00 PM",
                "05:00 PM",
                "06:00 PM",
                "07:00 PM",
                "08:00 PM",
                "09:00 PM",
                "10:00 PM",
                "11:00 PM",
                "12:00 AM",
                "01:00 AM",
              ].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Select>
            <label>Number of Guests</label>
            <Input
              type="number"
              min="1"
              placeholder="Number of Guests"
              required
            />

            <SubmitButton type="submit" className="sub">
              Submit
            </SubmitButton>
            <p className="para">
              Vivamus id consectetur mauris. Praesent dui purus, interdum eget
              urna nec, mollis magna. Fusce libero at porta gravida. Fusce
              libero at porta gravida.
            </p>
          </form>
        </FormContainer>
      </ReservationSection>

      <Footer />
    </EventContainer>
  );
};

export default Event;
