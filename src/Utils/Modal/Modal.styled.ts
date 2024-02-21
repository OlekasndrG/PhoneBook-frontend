import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* background-color: rgba(0, 0, 0, 0.4); */
  z-index: 1;
`;

export const InnerContainer = styled.div`
  /* min-height: 30vh;
  min-width: calc(100vh - 124px);
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);

  font-size: medium;
  background-color: white; */

  width: fit-content;
  height: fit-content;
`;
