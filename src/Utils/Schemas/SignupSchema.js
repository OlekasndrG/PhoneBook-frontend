import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .matches('^([^0-9]*)$', 'Wrong Fullname')
    .min(3, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Enter FullName'),
  email: Yup.string()
    .email('Wrong Email')
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Wrong Email')
    .required('Enter Email'),
  password: Yup.string()
    .matches('^([^0-9]*)$', 'Wrong Fullname')
    .min(3, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Enter FullName'),
});

export const SignInSchema = Yup.object().shape({
  name: Yup.string()
    .matches('^([^0-9]*)$', 'Wrong Fullname')
    .min(3, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Enter FullName'),
  email: Yup.string()
    .email('Wrong Email')
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Wrong Email')
    .required('Enter Email'),
});
export const EditProfileSchema = Yup.object().shape({
  name: Yup.string()
    .matches('^([^0-9]*)$', 'Wrong Fullname')
    .min(3, 'Too Short!')
    .max(70, 'Too Long!'),
  email: Yup.string()
    .email('Wrong Email')
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Wrong Email'),
  subscription: Yup.string().oneOf(['starter', 'business', 'pro']),
});
