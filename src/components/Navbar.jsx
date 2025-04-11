import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTimes,
} from "react-icons/fa";

const NavbarContainer = styled.nav`
  background-color: transparent;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 5px;
  
`;

// NavLink with active and hover styles
const StyledNavLink = styled(NavLink)`
  color: #ffffff;
    font-weight: bold;
  text-decoration: none;
 font: 14px "Poppins", Helvetica, Arial, Verdana, sans-serif;
  text-transform: uppercase;
  padding: 4px 5px;
  border-radius: 5px;
  transition: 0.3s ease;

  &.active {
   
    text-decoration: underline;
    color: #C5ab6b;
  }

  &:hover {
    color: #c5ab6b;
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-right: 180px;
  margin-left: 30px;
  gap: 0.3rem;
  margin-top: 5px;
`;

const Navbar = () => {
  return (
    <div className="outer">
      <NavbarContainer>
        <div className="logo">
          <img src="img/logo1.webp" alt="Logo" />
        </div>

        <NavLinks className="nav">
          <StyledNavLink to="/" end>HOME</StyledNavLink>
          <StyledNavLink to="/about">ABOUT US</StyledNavLink>
          <StyledNavLink to="/menu">MENU</StyledNavLink>
          <StyledNavLink to="/event">EVENTS</StyledNavLink>
          {/* <StyledNavLink to="/news">NEWS</StyledNavLink> */}
          <StyledNavLink to="/contact">CONTACT</StyledNavLink>
        </NavLinks>

        <SocialIcons>
          
          <a href="https://www.facebook.com" className="circle" target="_blank" rel="noopener noreferrer">
            <FaFacebookF color="#ffffff" size="1rem" />
          </a>
         
          <a href="https://x.com" className="circle" target="_blank" rel="noopener noreferrer">
            <FaTimes color="#ffffff" size="1rem" />
          </a>
          <a href="https://www.pinterest.com" className="circle" target="_blank" rel="noopener noreferrer">
            <FaPinterestP color="#ffffff" size="1rem" />
          </a>
          <a href="https://www.instagram.com" className="circle" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="#ffffff" size="1rem" />
          </a>
        </SocialIcons>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
