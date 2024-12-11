import React from "react";
import styled from "@emotion/styled";
import myLogo from "../assets/images/logo.png";

export default function Header() {
  
  const MainContainer = styled.header`
    height: 120px;
    background-color: #000;
    padding: 0 50px;
    margin: auto;
    display: flex;
    align-items: center;
  `;
  const Logo = styled.div`
    transition: 0.6s;
    overflow: hidden;
    display: flex;
    justify-content: flex;
    align-items: end;
    color: #fff;
    &:hover{
      color: var(--primary)
    }
  `;
  const LogoImg = styled.img`
    width: 60px;
    height: 60px;
    transition: 0.3s;
    &:hover {
      transform: rotateZ(35deg);
    }
  `;
  const Menu = styled.nav`
    flex: 1;
    display: flex;
    justify-content: flex-end;
  `;

  const MenuItem = styled.li`
    list-style: none;
  `;

  const MenuLink = styled.a`
    color: #fff;
    height: 100px;
    text-transform: capitalize;
    font-weight: 300;
    font-size: 17px;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-bottom: 4px solid #000;
    transition: 0.7s ease;
    &:hover {
      border-bottom: 3px solid var(--primary);
      color: var(--primary);
    }
  `;
  const NavMenu = styled.ul`
    display: flex;
  `;
  const LogoText = styled.h1`
    font-size: 3rem; /* Aumentado o tamanho do logo */
    margin-left: 1rem;
  `;

  return (
    <MainContainer>
      <Logo>
        <LogoImg src={myLogo} alt="" />
        <LogoText className="logo fw500">ArchSoftware</LogoText>
      </Logo>
      <Menu>
        <NavMenu>
          <MenuItem className="active">
            <MenuLink href="#banner">Home</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="#aboutus">About Us</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="#services">Services</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="#projects">Our Projects</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="#ourteam">Our Team</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="#workwithus">Experience</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="#contactus">Contact Us</MenuLink>
          </MenuItem>
        </NavMenu>
      </Menu>
    </MainContainer>
  );
}
