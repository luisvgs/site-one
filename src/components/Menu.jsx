import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #333635;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 25vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 20px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
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
      color: #0c0c0f;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a id="about" href="/">
        <span role="img" aria-label="about us">
          About us
        </span>
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          Partners
        </span>
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          Portfolio
        </span>
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          News
        </span>
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          Contact
        </span>
      </a>
    </StyledMenu>
  );
};

export default Menu;
