import styled from "styled-components";

export const DeleteModalContainer = styled.li`
  position: absolute;
  top: 200px;
  left: 200px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  font-family: inherit;
  font-weight: bold;
  background-color: rgb(146, 171, 207);
  border: 1px solid black;
  border-radius: 16px;
  width: fit-content;
  height: fit-content;
  list-style: none;
  div {
    display: flex;
    gap: 15px;
  }
`;
