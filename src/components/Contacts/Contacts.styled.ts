import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { ReactComponent as TrashIcon } from '../icons/search.svg';

export const ContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  gap: 20px;
  font-family: inherit;
  overflow-y: auto;
  max-height: 350px;
  width: 100%;
  padding: 0;

  button {
    margin-left: 15px;
    font-family: inherit;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 6px;
    background-color: white;
    opacity: 0.8;
    cursor: hand;
    &:hover {
      background-color: whitesmoke;
      opacity: 1.1;
    }
  }
`;
export const FirstLetterDiv = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  align-items: center;
  width: 48px;
  height: 44px;
  border: 1px solid black;
  border-radius: 50%;
  color: black;
  font-size: large;
  font-weight: 800;
`;

export const ContactItem = styled.li`
  display: flex;
  /* flex-direction: raw; */
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;

  img {
    border-radius: 50%;
  }
  /* gap: 15px; */
`;
export const SearchButton = styled.button`
  display: inline-block;
  font-family: inherit;
  font-weight: bold;
  padding: 8px;
  border: none;
  opacity: 0.6;

  cursor: pointer;
  border-radius: 10px;
  background-image: linear-gradient(
    65deg,
    rgb(17, 236, 229) 30%,
    rgba(195, 27, 226, 0.8) 98%
  );
  outline: none;
  :hover {
    svg {
      fill: blue;
    }
    opacity: 1.2;
  }
`;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 13px;
  padding-top: 16px;
  /* padding-bottom: 20px; */
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.12);
  font-family: inherit;
  font-weight: bold;
  text-align: center;

  min-width: 80px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  opacity: 0.8;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    color: red;
    opacity: 1.2;
  }
  &.active {
    color: red;
    background: #00ffd5;
  }

  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

/* CSS */
// .button-85 {
//   padding: 0.6em 2em;
//   border: none;
//   outline: none;
//   color: rgb(255, 255, 255);
//   background: #111;
//   cursor: pointer;
//   position: relative;
//   z-index: 0;
//   border-radius: 10px;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// .button-85:before {
//   content: "";
//   background: linear-gradient(
//     45deg,
//     #ff0000,
//     #ff7300,
//     #fffb00,
//     #48ff00,
//     #00ffd5,
//     #002bff,
//     #7a00ff,
//     #ff00c8,
//     #ff0000
//   );
//   position: absolute;
//   top: -2px;
//   left: -2px;
//   background-size: 400%;
//   z-index: -1;
//   filter: blur(5px);
//   -webkit-filter: blur(5px);
//   width: calc(100% + 4px);
//   height: calc(100% + 4px);
//   animation: glowing-button-85 20s linear infinite;
//   transition: opacity 0.3s ease-in-out;
//   border-radius: 10px;
// }

// @keyframes glowing-button-85 {
//   0% {
//     background-position: 0 0;
//   }
//   50% {
//     background-position: 400% 0;
//   }
//   100% {
//     background-position: 0 0;
//   }
// }

// .button-85:after {
//   z-index: -1;
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: #222;
//   left: 0;
//   top: 0;
//   border-radius: 10px;
// }
