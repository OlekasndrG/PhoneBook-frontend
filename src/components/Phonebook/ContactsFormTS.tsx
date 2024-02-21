import { memo } from "react";
import { Formik, ErrorMessage, FormikHelpers } from "formik";
import {
  FormContainer,
  FormInput,
  FormikErrorMessage,
} from "./ContactsForm.styled";

import { toast } from "react-toastify";
import { AddContactSchema } from "Utils/Schemas/ContactSchema";
import { Contact } from "redux/contacts/contactsReducer";
import { FC } from "react";
// const initialValues = {
//   name: "",
//   number: "",
// };

export interface AddContactFormikValues {
  name: string;
  number: string;
}
const initialValues: AddContactFormikValues = {
  name: "",
  number: "",
};

type ContactsFormType = {
  onAdd: (data: AddContactFormikValues) => void;
  contacts: Contact[];
};
const ContactsForm: FC<ContactsFormType> = ({ onAdd, contacts }) => {
  console.log("peremalyovka  add to Contacts form");
  // const [add] = useAddContactMutation();
  const formSubmitHandler = (
    data: AddContactFormikValues,
    { resetForm, setSubmitting }: FormikHelpers<AddContactFormikValues>
  ) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      toast.warning(`${data.name} is already in contacts.`, {
        theme: "colored",
      });
      setSubmitting(false);
      return;
    }

    onAdd(data);

    toast.success(`${data.name} is added to Your Phonebook.`, {
      theme: "colored",
    });
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={AddContactSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={formSubmitHandler}
      >
        {({ errors, isSubmitting }) => (
          <FormContainer encType="multipart/formdata">
            <label htmlFor="name">
              Name
              <FormInput
                type="text"
                name="name"
                id="name"
                errors={errors.name}
              />
              <ErrorMessage name="name" component={FormikErrorMessage} />
            </label>

            <label htmlFor="number">
              Number
              <FormInput
                type="text"
                name="number"
                id="number"
                errors={errors.number}
              />
              <ErrorMessage name="number" component={FormikErrorMessage} />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-label="add-to-contacts-button"
            >
              Add to contacts
            </button>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};
// ContactsForm.propTypes = {
//   onAdd: PropTypes.func.isRequired,
//   contacts: PropTypes.array,
// };

export default memo(ContactsForm);
// export default ContactsForm;
