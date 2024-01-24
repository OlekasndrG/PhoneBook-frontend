import { tablet } from 'Utils/Breakpoints/Breakpoints';
import DefaultButton from 'Utils/Button';
import styled from 'styled-components';

export const GoogleButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 215px;
  a {
    text-decoration: none;
    color: black;
  }
  svg {
  }
  &:hover {
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
  }
  @media screen and (min-width: ${tablet}) {
  }
`;
