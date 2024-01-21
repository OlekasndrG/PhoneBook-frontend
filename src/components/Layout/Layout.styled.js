import styled from 'styled-components';
export const NavContainer = styled.nav`
  background-color: rgba(3, 32, 44, 0.911);
  display: flex;
  gap: 30px;
  padding: 15px;
  padding-bottom:20px;
  border-bottom: 4px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const HomeText = styled.p`
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  color: rgb(146, 171, 207);
`;


// export const StyledLink = styled(NavLink)`
// padding: 8px 16px;
// border-radius: 4px;
// text-decoration: none;
//   color: black;
//   font-weight: 500;
//   &.active {
//     color: white;
//     background-color: orangered;
//   }
// `;
