import * as Yup from 'yup';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const AddContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches('^([^0-9]*)$', 'Wrong Fullname')
    .min(3, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Enter FullName'),
  number: Yup.string()
    .matches(phoneRegExp, 'Not a correct phone number')
    .min(8, 'too short')
    .max(12, 'too long')
    .required('Enter Phone'),
});
export const EditContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches('^([^0-9]*)$', 'Wrong Fullname')
    .min(3, 'Too Short!')
    .max(70, 'Too Long!'),
  number: Yup.string()
    .matches(phoneRegExp, 'Not a correct phone number')
    .min(8, 'too short')
    .max(12, 'too long'),
  favorite: Yup.boolean(),
});
