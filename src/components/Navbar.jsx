// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTimes,
} from "react-icons/fa";

const NavbarContainer = styled.nav`
  background-color: tranprent;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: #c5ab6b;
    text-decoration: underline;
  }
    
`;


const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;


const Navbar = () => {
  return (
    <div className="outer">
    <NavbarContainer>
    <div className="logo"><img src="img/logo1.webp" alt="" /></div>
      <NavLinks className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/event">Event</NavLink>
        <NavLink to="/news">News</NavLink>
      </NavLinks>

      <SocialIcons>
        <a
          href="https://www.instagram.com"
         className="circle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram color="#c5ab6b" size="1.5rem" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="circle"
          rel="noopener noreferrer"
        >
          <FaFacebookF color="#c5ab6b" size="1.5rem" />
        </a>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          className="circle"
          rel="noopener noreferrer"
        >
          <FaPinterestP color="#c5ab6b" size="1.5rem" />
        </a>
        <a href="https://x.com" target="_blank"  className="circle" rel="noopener noreferrer">
          <FaTimes color="#c5ab6b" size="1.5rem" />
        </a>
      </SocialIcons>
    </NavbarContainer>
    
    </div>
  );
};

export default Navbar;
