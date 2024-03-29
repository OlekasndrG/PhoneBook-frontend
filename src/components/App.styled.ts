import { tablet, desktop } from "Utils/Breakpoints/Breakpoints";
import styled from "styled-components";

export const MainContainer = styled.div`
  min-width: 360px;

  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: ${tablet}) {
    /* max-width: none; */
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;
