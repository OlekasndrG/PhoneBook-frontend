import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 500;
  font-weight: bold;
  gap: 15px;
  color: rgb(146, 171, 207);

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
  button {
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
  }
`;
export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
