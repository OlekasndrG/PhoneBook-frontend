import { SearchButton } from 'components/Contacts/Contacts.styled';
import styled from 'styled-components';
import { Form } from 'formik';

export const FormContainer = styled(Form)`
  position: absolute;
  right: 200px;
  top: 200px;
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
