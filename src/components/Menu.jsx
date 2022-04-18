import styled from "styled-components";
import { state } from "../state";
import { useSnapshot } from "valtio";
import Logo from "../img/site-one-technology.png";
import { Link } from "wouter";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #111;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 25vh;
  text-align: left;
  padding: 2rem;
  padding-right: 0px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1024px) {
    width: 100%;
  }

  .div-1 {
    background-color: #3486eb;
    height: 77px;
    width: 7px;

    display: flex;
    color: white;
    right: 0px;
    top: 0;
    padding-left: 2px;
  }
  .div-2 {
    background-color: #f00c23;
    height: 77px;
    width: 7px;

    display: flex;
    color: white;
    right: 0px;
    top: 0;
    padding-left: 2px;
  }
  .div-3 {
    background-color: #ebc634;
    height: 77px;
    width: 7px;
    display: flex;
    color: white;
    right: 0px;
    top: 0;
    padding-left: 2px;
  }
  .div-4 {
    background-color: #22e06b;
    height: 77px;
    width: 7px;
    display: flex;
    color: white;
    right: 0px;
    top: 0;
    padding-left: 2px;
  }
  .div-5 {
    background-color: #1135ba;
    height: 77px;
    width: 7px;

    display: flex;
    color: white;
    right: 0px;
    top: 0;
    padding-left: 2px;
  }

  a {
    height: 77px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    font-size: 20px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: #e1ebe7;
    text-decoration: none;
    transition: color 0.2s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    #about::after {
      background-color: #3486eb;
    }

    &:hover {
      color: #ed0c4f;
    }
  }
`;

const Menu = ({ setOpen, open }) => {
  useSnapshot(state);
  return (
    <StyledMenu className="menu" open={open}>
      <a href="javascript: return false;">
        <img
          class="logo"
          onClick={() => {
            setOpen(false);
            state.clicked = 0;
          }}
          src={Logo}
        />
      </a>

      <a
        onMouseEnter={() => (state.hovered = "about")}
        onMouseLeave={() => (state.hovered = null)}
        href="javascript: return false;"
        id="about"
      >
        <span
          onClick={() => {
            setOpen(false);
            state.clicked = 1;
          }}
          role="img"
          aria-label="about us"
        >
          About us
        </span>
        <div class="div-1" />
      </a>

      <a
        onMouseEnter={() => (state.hovered = "partners")}
        onMouseLeave={() => (state.hovered = null)}
        href="javascript: return false;"
      >
        <span
          onClick={() => {
            setOpen(false);
            state.clicked = 2;
          }}
          role="img"
          aria-label="partners"
        >
          Partners
        </span>
        <div class="div-2" />
      </a>

      <a
        onMouseEnter={() => (state.hovered = "portfolio")}
        onMouseLeave={() => (state.hovered = null)}
        href="javascript: return false;"
      >
        <span
          onClick={() => {
            setOpen(false);
            state.clicked = 3;
          }}
          role="img"
          aria-label="portfolio"
        >
          Portfolio
        </span>
        <div class="div-3" />
      </a>

      <a
        onMouseEnter={() => (state.hovered = "news")}
        onMouseLeave={() => (state.hovered = null)}
        href="javascript: return false;"
      >
        <span
          onClick={() => {
            setOpen(false);
            state.clicked = 4;
          }}
          role="img"
          aria-label="portfolio"
        >
          Press room
        </span>
        <div class="div-4" />
      </a>
      <a
        onMouseEnter={() => (state.hovered = "contact")}
        onMouseLeave={() => (state.hovered = null)}
        href="javascript: return false;"
      >
        <span
          onClick={() => {
            setOpen(false);
            state.clicked = 5;
          }}
          role="img"
          aria-label="portfolio"
        >
          Contact
        </span>
        <div class="div-5" />
      </a>
    </StyledMenu>
  );
};

export default Menu;
