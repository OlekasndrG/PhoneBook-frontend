import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

export const FilterLabel = styled.label`
  font-weight: bold;
  display: block;
  text-align: center;
`;

export const FilterInput = styled(DebounceInput)`
  padding: 3px;
  box-shadow: 3px 3px 5px grey;
  font-size: 14px;
  font-weight: 600;
  display: block;
  outline: none;
  border: 2px solid black;
  margin-top: 4px;
  border-radius: 10px;
  background-color: whitesmoke;
  &:hover,
  :active,
  :focus {
    border: 2px solid black;
  }
`;
