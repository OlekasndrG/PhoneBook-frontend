import styled from 'styled-components';
import { Field, Form } from 'formik';
import { ReactComponent as Cross } from '../../images/SVG/Cross.svg';
import { ReactComponent as Plus } from '../../images/SVG/Plus.svg';
import DefaultButton from 'Utils/Button';

export const FormContainer = styled(Form)`
  position: absolute;
  right: 110px;
  top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;

  font-family: inherit;
  font-weight: bold;
  border-radius: 18px;
  height: 600px;
  gap: 15px;
  background-color: rgb(146, 171, 207);
  padding: 15px 0;
  font-family: inherit;

  transition: all 1s ease-out;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    input[type='radio'] {
      width: auto;
    }
    input[type='file'] {
      width: 100%;
      height: 100%;
      padding: 0;
    }
  }
  input {
    box-shadow: 3px 3px 5px grey;
    font-size: 14px;
    border-radius: 10px;
    background-color: whitesmoke;
    font-family: inherit;
    font-weight: 600;
    padding: 3px;
    outline: none;
    width: 205px;
    &:hover,
    :active,
    :focus {
      border: 2px solid black;
    }
  }
`;
export const AvatarLabel = styled.label`
  position: relative;
  display: flex;
  width: 98px;
  height: 98px;

  &:hover,
  :active,
  :focus {
    svg {
      opacity: 1.2;
    }
  }
`;

export const AvatarImage = styled.img`
  position: absolute;
  /* z-index: 1; */
  width: 100%;
  height: 100%;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const AvatarInput = styled(Field)`
  width: 100%;
  background-color: rgba(217, 217, 217, 1);
  color: transparent;
  border-radius: 50%;
  opacity: 0;
  z-index: 3;
  cursor: pointer;
`;
export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  label {
    display: flex;
    flex-direction: row;
  }
`;

export const ModalButton = styled(DefaultButton)`
  background-color: rgba(3, 32, 44, 0.611);
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
  border: none;
  font-family: inherit;
  font-weight: bold;
  opacity: 0.9;
  height: 40px;
  width: 215px;
  :hover {
    opacity: 1.2;
  }
`;

export const CrossSVG = styled(Cross)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -8px;
  left: 170px;
  z-index: 11112;

  /* stroke: black; */
  opacity: 0.8;
  cursor: pointer;

  :hover {
    opacity: 1.2;
    /* color: red; */
  }
`;
export const PlusSVG = styled(Plus)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 91%;
  left: 72%;
  transform: translate(-50%, -50%);
  z-index: 2;
  opacity: 0.8;
  cursor: pointer;
  circle {
    fill: white;
  }
  path {
    stroke: currentColor;
  }
`;
