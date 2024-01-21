import { SearchButton } from 'components/Contacts/Contacts.styled';
import styled from 'styled-components';
import { Form } from 'formik';
export const UserMenuContainer = styled.div`
  display: flex;
  margin-left: auto;
  height: 40px;
  p {
    font-family: inherit;
    font-weight: bold;
    margin-right: 10px;
    color: rgb(146, 171, 207);
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 320px;
  gap: 15px;
  outline: 1px solid black;
  padding: 15px 0;

  transition: all 1s ease-out;
`;

export const UserMenuButton = styled(SearchButton)`
  font-size: 14px;
  font-weight: bold;
  padding: 0 14px;
`;
