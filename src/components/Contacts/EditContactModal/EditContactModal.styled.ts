import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormContainer = styled(Form)`
  position: absolute;
  right: 110px;
  top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 40px;
  font-family: inherit;
  font-weight: bold;
  border-radius: 18px;
  height: 450px;
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
    input[type='radio'],
    input[type='checkbox'] {
      width: auto;
      cursor: pointer;
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
export const CheckBoxContainer = styled.label`
  display: flex;
  flex-direction: row !important;
`;
