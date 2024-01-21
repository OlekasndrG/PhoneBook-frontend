import styled from 'styled-components';
// export const FormContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 500;
  font-weight: bold;
  gap: 15px;
  color: rgb(146, 171, 207);
  button {
    display: inline-block;
    width: 120px;
    margin-top: 10px;
    border-radius: 8px;
    cursor: pointer;
    padding: 10px;
    border: none;
    font-family: inherit;
    font-weight: bold;
    opacity: 0.9;

    :hover {
      opacity: 1.2;
    }
  }
  input {
    margin-left: 10px;
    box-shadow: 3px 3px 5px grey;
    font-size: 14px;
    border-radius: 10px;
    background-color: whitesmoke;
    font-family: inherit;
    font-weight: 600;
    padding: 3px;
    outline: none;
    &:hover,
    :active,
    :focus {
      border: 2px solid black;
    }
  }
`;
// export const FilterInput = styled(DebounceInput)`


//   display: block;

//   margin-top: 4px;
