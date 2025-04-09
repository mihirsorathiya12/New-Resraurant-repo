import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import Footer from "./Footer"; // './Footer' kyunki dono files ek hi folder mein hain
import { Link } from "react-router-dom";
import TestimonialSlider from "../Home/TestimonialSlider";

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

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  //  margin-top: 100px;
  // height: 200px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const PageTitle = styled.h1`
  font: 50px Poppnis, Helvetica, Arial, Verdana;
  color: #ffffff;
  max-width: 100%;
`;

const Breadcrumbs = styled.p`
  font: 13px "Open Sans", Helvetica, Arial, Vardana;
  color: #ffffff;
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 5rem 10%;
  background: white;
  flex-wrap: wrap;
`;

const ContentBlock = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font: 35px Poppins;
  color: #303030;
  margin: 0px 0px 20px;
`;

const SubTitle = styled.span`
  font-size: 40px;
  color: #c5ab6b;
  font-style: italic;
`;

const HistorySection = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 10%;
  gap: 3rem;
  flex-wrap: wrap;
  background: rgb(244, 244, 244);
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
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0px;
  // grid-row: 2;
`;
const StyledSmallImages = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0px;
  grid-row: 2;
  // line-height: 6;
  margin-top: -216px;
`;

const StyledLargeImage = styled.img`
  width: 100%;
  height: 440px;
  object-fit: cover;
  border-radius: 0px;
  grid-column: 2;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;
  text-align: left;
`;

const HistoryText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;
const TeamSection = styled.div`
  text-align: center;
  padding: 5rem 10%;
  background: white;
`;

const TeamHeader = styled.div`
  margin-bottom: 3rem;
`;

const GoldText = styled.h2`
  font: 40px "Great Vibes";
  color: #c5ab6b;
  margin: 0px 0px 5px;
`;

const TeamTitle = styled.h1`
  font: 50px Poppins;
  color: #303030;
  display: flex;
  justify-content: center;
  margin-top: -10px;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 0px 20px 0 px 0px;
  padding: 0px 15px;
  background: rgb(244, 244, 244) no-repeat center;
`;

const TeamImage = styled.img`
  width: 30%;
  border-radius: 0px;
`;

const TeamText = styled.div`
  flex: 1;
  max-width: 50%;
  text-align: left;
`;

const ChefName = styled.h3`
  font: 16px Popping;
  margin: 30px 0px 0px;
  color: #303030;
  clear: none;
`;

const ChefTitle = styled.p`
  font-style: italic;
  color: #bfbfbf;
  font: 14px "Open Sans", Helvetica, Arial;
`;

const Signature = styled.img`
  width: 150px;
  margin-top: 10px;
  float: right;
`;
const Teamchif = styled.div`
  display: flex;
  gap: 2rem;
  padding: 60px 0px;
`;
const TeamCard = styled.div`
  background: #f4f4f4;
  overflow: hidden;
  border-radius: 0px;
  text-align: center;
  max-width: 350px;
  text-align: left;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const TeamImagess = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 0px;

  display: block;
`;

const ChefNamess = styled.h3`
  font: 24px Poppins;
  color: #303030;
  justify-content: left;
  padding: 0px 40px;
`;

const ChefTitless = styled.p`
  color: #c5ab6b;
  font: 14px Poppins;
  line-height: 1.6;
  padding: 0px 40px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
  padding: 20px;
`;

const SocialIcon = styled.a`
  color: #c5ab6b;
  font-size: 20px;
  text-decoration: none; width: 40px;
  height: 40px;
  border-radius: 50%;
 
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #ffffff;
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection className="aboutback">
        <Overlay />
        <HeroContent>
          <PageTitle>About Us</PageTitle>
          <Breadcrumbs>
            <Link to="/" className="homi">
              Home
            </Link>
            &nbsp;/&nbsp; About Us
          </Breadcrumbs>
        </HeroContent>
      </HeroSection>

      {/* Philosophy & Mission Section */}
      <ContentSection>
        <ContentBlock>
          <SubTitle className="our">Our</SubTitle>
          <SectionTitle>PHILOSOPHY</SectionTitle>
          <p className="par">
            In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
            malesuada. Morbi tincidunt, dui tristique tincidunt faucibus, purus
            sapien consectetur libero, vitae venenatis eros lacus vitae erat.
            Mauris tristique pretium tristique. Integer at nulla at eros
            suscipit suscipit vitae nec diam. Nullam dictum sed metus nec
            mollis.
          </p>
        </ContentBlock>
        <ContentBlock>
          <SubTitle>Our</SubTitle>
          <SectionTitle>MISSION</SectionTitle>
          <p className="par">
            hasellus nunc sem, tincidunt eu consequat non, semper non massa.
            Mauris vitae auctor arcu. Sed vel ultricies neque. Nunc in diam vel
            lacus dictum luctus eget quis erat. Cras faucibus diam nec leo
            tincidunt molestie. Morbi finibus, urna auctor bibendum rutrum, enim
            nunc ultrices quam, ac facilisis diam ex in ante.
          </p>
        </ContentBlock>
      </ContentSection>

      {/* Our History Section */}
      <HistorySection>
        <ImagesContainer>
          <StyledSmallImage src="/img/about0.jpg" alt="Restaurant Interior" />
          <StyledSmallImages src="/img/about2.jpg" alt="Chef Plating Food" />
          <StyledLargeImage
            src="/img/about1.jpg"
            alt="Chef Pouring Sauce on a Dish"
          />
        </ImagesContainer>
        <TextContainer>
          <SubTitle className="dis">Discover</SubTitle>
          <SectionTitle className="hist">OUR HISTORY</SectionTitle>
          <HistoryText>
            In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
            malesuada. Morbi tincidunt, dui tristique tincidunt faucibus, purus
            sapien consectetur libero, vitae venenatis eros lacus vitae erat.
            Mauris tristique pretium tristique. Integer at nulla at eros
            suscipit suscipit vitae nec diam. Nullam dictum sed metus nec
            mollis. Vivamus id consectetur mauris. Praesent dui purus, interdum
            eget urna nec, mollis condimentum magna. Fusce dapibus, libero at
            porta gravida, ante urna posuere ligula, eu consectetur ipsum quam
            non risus. Vivamus facilisis gravida sem vel dictum. Proin fermentum
            orci a tristique mattis. Nunc vel orci turpis. Aliquam dapibus magna
            at augue commodo, non iaculis tortor placerat.
          </HistoryText>
        </TextContainer>
      </HistorySection>

      <TeamSection>
        <TeamHeader>
          <GoldText>Meet our</GoldText>
          <TeamTitle>TEAM</TeamTitle>
        </TeamHeader>

        <TeamContainer>
          {/* Left Side: Chef Image */}
          <TeamImage src="/img/chef1.jpg" alt="Chef" />

          {/* Right Side: Text Content */}
          <TeamText>
            <GoldText>The word from</GoldText>
            <h2>OUR CHEF</h2>
            <p className="para">
              In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
              malesuada. Morbi tincidunt, dui tristique tincidunt faucibus,
              purus sapien consectetur libero, vitae venenatis eros lacus vitae
              erat. Mauris tristique pretium tristique. Integer at nulla at eros
              suscipit suscipit vitae nec diam. Nullam dictum sed metus nec
              mollis. Vivamus id consectetur mauris. Praesent dui purus,
              interdum eget urna nec, mollis condimentum magna.
            </p>
            <p className="para">
              In aliquet quis magna in placerat. Suspendisse nec efficitur
              purus. Curabitur vitae congue urna. Donec nec finibus orci, at
              luctus nisi. Donec nulla felis, auctor ac lacus et, varius congue
              leo. Donec eu tempor purus.
            </p>
            <p className="para">
              Vivamus id consectetur mauris. Praesent dui purus – interdum eget
              urna nec!
            </p>

            <ChefName>Frederico Bagrationi</ChefName>
            <ChefTitle>Resto Seven Head Chef</ChefTitle>
            <Signature src="/img/sign.jpg" alt="Signature" />
          </TeamText>
        </TeamContainer>
      </TeamSection>
      <Teamchif>
        <TeamCard>
          <TeamImagess src="/img/chef2.webp" alt="Chef Sandra Clarkson" />
          <ChefNamess>Sandra Clarkson</ChefNamess>
          <ChefTitless>Dessert Chef</ChefTitless>
          <p className="pc">
            Curabitur eget ultricies elit. Mauris feugiat magna a facilisis
            malesuada. Duis tincidunt egestas placerat.
          </p>
          <SocialIcons>
            <SocialIcon>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF color="#c5ab6b" size="1.5rem" />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter color="#c5ab6b" size="1.5rem" />
              </a>
            </SocialIcon>
            <SocialIcon>
              {" "}
              <a
                href="https://www.instagram.com"
                className="kind"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color="#c5ab6b" size="1.5rem" />
              </a>
            </SocialIcon>
          </SocialIcons>
        </TeamCard>
        <TeamCard>
          <TeamImagess src="/img/chef3.jpg" alt="Chef Sandra Clarkson" />
          <ChefNamess>Diana Bright</ChefNamess>
          <ChefTitless>Dessert Chef</ChefTitless>
          <p className="pc">
            Curabitur eget ultricies elit. Mauris feugiat magna a facilisis
            malesuada. Duis tincidunt egestas placerat.
          </p>
          <SocialIcons>
            <SocialIcon>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF color="#c5ab6b" size="1.5rem" />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter color="#c5ab6b" size="1.5rem" />
              </a>
            </SocialIcon>
          </SocialIcons>
        </TeamCard>
        <TeamCard>
          <TeamImagess src="/img/chef4.webp" alt="Chef Sandra Clarkson" />
          <ChefNamess>Donald White</ChefNamess>
          <ChefTitless>Dessert Chef</ChefTitless>
          <p className="pc">
            Curabitur eget ultricies elit. Mauris feugiat magna a facilisis
            malesuada. Duis tincidunt egestas placerat.
          </p>
          <SocialIcons>
            <SocialIcon>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF color="#c5ab6b" size="1.5rem" />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter color="#c5ab6b" size="1.5rem" />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP color="#c5ab6b" size="1.5rem" />
              </a>
            </SocialIcon>
          </SocialIcons>
        </TeamCard>
      </Teamchif>

      <TestimonialSlider />
      <Footer />
    </AboutContainer>
  );
};

export default About;
