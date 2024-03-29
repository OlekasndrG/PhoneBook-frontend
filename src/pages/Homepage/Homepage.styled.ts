import styled from "styled-components";
import { desktop, tablet } from "../../Utils/Breakpoints/Breakpoints";

export const Title = styled.h1`
  text-align: center;
  font-size: 44px;
  margin-bottom: 20px;
  color: rgb(146, 171, 207);
`;
export const MainText = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: rgb(146, 171, 207);
`;
export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  flex-wrap: wrap;

  svg {
    fill: rgb(146, 171, 207);
    stroke: white;
    width: 30px;
    height: 30px;
    &:hover {
      fill: red;
      stroke: blue;
    }
  }

  @media screen and (min-width: ${tablet}) {
    gap: 30px;
    margin-top: 16px;
    svg {
      width: 44px;
      height: 44px;
    }
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 20px;
    gap: 35px;
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;
