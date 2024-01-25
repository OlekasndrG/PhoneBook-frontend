import styled from 'styled-components';
import { Field, Form } from 'formik';
export const FormContainer = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;
  /* outline: 1px solid black; */
  padding: 15px 0;

  button {
    display: inline-block;
    /* margin-left: 11px; */
    margin-top: 28px;
    padding: 5px;
    font-family: inherit;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    background-color: lightgreen;
    opacity: 0.8;
    width: 140px;
    box-shadow: 3px 3px 5px grey;
    &:hover {
      background-color: green;
      opacity: 1;
    }
  }

  label {
    margin-top: 5px;
    font-weight: bold;
    display: block;
    text-align: center;
    position: relative;
  }

  /* input {
    padding: 3px;
    box-shadow: 3px 3px 5px grey;
    font-size: 14px;
    font-weight: 600;
    display: block;
    outline: none;
    margin-top: 4px;
    border-radius: 10px;
    background-color: whitesmoke;
    border-bottom: ${({ errors }) =>
    errors
      ? '1px solid rgba(210, 139, 139, 1)'
      : '1px solid var(--primary-green-color)'};
    &:hover,
    :active,
    :focus {
      border: 2px solid black;
    }
  } */
`;
export const FormikErrorMessage = styled.div`
  position: absolute;
  min-width: 220px;
  min-height: 50px;
  overflow: auto;
  color: red;
`;
export const FormInput = styled(Field)`
  padding: 3px;
  box-shadow: 3px 3px 5px grey;
  font-size: 14px;
  font-weight: 600;
  display: block;
  border: transparent;
  outline: none;
  margin-top: 4px;
  border-radius: 10px;
  background-color: whitesmoke;
  border: ${({ errors }) =>
    errors ? '2px solid rgba(210, 139, 139, 1)' : '2px solid black'};
  &:hover,
  :active,
  :focus {
    border: 2px solid black;
  }
`;
