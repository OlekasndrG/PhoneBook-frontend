import React, { memo } from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  FormContainer,
  FormInput,
  FormikErrorMessage,
} from './ContactsForm.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { AddContactSchema } from 'Utils/Schemas/ContactSchema';
// const phoneRegExp =
//   /^$| ^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  name: '',
  number: '',
};

const ContactsForm = ({ contacts, onAdd }) => {
  // const { data: Contacts } = useFetchContactsQuery();
  console.log('render contactsform');
  // const [add] = useAddContactMutation();
  const formSubmitHandler = (data, { resetForm, setSubmitting }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      toast.warning(`${data.name} is already in contacts.`, {
        theme: 'colored',
      });
      setSubmitting(false);
      return;
    }
    onAdd(data);

    toast.success(`${data.name} is added to Your Phonebook.`, {
      theme: 'colored',
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
        {({ errors, isSubmitting, touched, isValid, dirty }) => (
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
ContactsForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  contacts: PropTypes.array,
};

export default memo(ContactsForm);
// export default ContactsForm;
