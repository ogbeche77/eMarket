import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../logos.svg";
import styled from "styled-components"; //can be applied like(similar) to bootstrap
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={img} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <strong className="text-blue">JS Automobiles</strong>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto ">
          <ButtonContainer>
            <span className="mr-2 text-blue">
              <i className="fas fa-cart-plus" />{" "}
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: lightgrey;
  .nav-link {
    color: white !important;
    font-size: 1.3rem;
  }
`;
