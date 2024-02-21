import styled from "styled-components";
import pageLoader from "../../images/Car.gif";
export const Wrapper = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HomePageLoader = styled.div`
  width: 300px;
  height: 300px;
  background-image: url("${pageLoader}");
  background-size: cover;
  background-repeat: no-repeat;
`;
