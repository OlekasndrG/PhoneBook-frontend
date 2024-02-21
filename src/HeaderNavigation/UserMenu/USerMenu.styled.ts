import { SearchButton } from "components/Contacts/Contacts.styled";
import styled from "styled-components";
import { Form } from "formik";
import { ModalButton } from "./UpdateUserForm.styled";
export const UserMenuContainer = styled.div`
  display: flex;
  margin-left: auto;
  height: 40px;
  gap: 16px;
`;
export const NavigationButton = styled(ModalButton)`
  background-color: rgba(255, 255, 255, 0.12);
  padding: 8px;
  width: 110px;
  height: 48px;
  color: white;
`;
export const UserInterfaceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(255, 255, 255, 0.12); */
  height: 48px;
  gap: 16px;
  flex-direction: row;

  padding: 0 8px;
  img {
    border-radius: 50%;
  }
  p {
    font-weight: bold;
    font-size: 14;
    color: white;
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
  padding: 8px;
`;
