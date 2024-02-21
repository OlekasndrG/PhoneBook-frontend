import * as Yup from "yup";
const noNumberRegExp = /^[^0-9]*$/;
const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(70, "Too Long!")
    .required("Enter FullName"),
  email: Yup.string()
    .email("Wrong Email")
    .matches(emailRegExp, "Wrong Email")
    .required("Enter Email"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(70, "Too Long!")
    .required("Enter Password"),
});

export const SignInSchema = Yup.object().shape({
  name: Yup.string()
    .matches(noNumberRegExp, "Wrong Fullname")
    .min(3, "Too Short!")
    .max(70, "Too Long!")
    .required("Enter FullName"),
  email: Yup.string()
    .email("Wrong Email")
    .matches(emailRegExp, "Wrong Email")
    .required("Enter Email"),
});
export const EditProfileSchema = Yup.object().shape({
  name: Yup.string()
    .matches(noNumberRegExp, "Wrong Fullname")
    .min(3, "Too Short!")
    .max(70, "Too Long!"),
  email: Yup.string().email("Wrong Email").matches(emailRegExp, "Wrong Email"),
  subscription: Yup.string().oneOf(["starter", "business", "pro"]),
});
