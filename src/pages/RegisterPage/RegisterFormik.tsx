import { FC, useEffect, ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

import { registerUser } from "redux/auth/authOperationsTS";
import "react-toastify/dist/ReactToastify.css";

import { LoginForm, StyledPassword } from "../LoginPage/Login.styled";
import { useNavigate } from "react-router-dom";
import { getUserName } from "redux/selectors";

import GoogleRedirect from "components/GoogleAuth/GoogleAuthTS";
import { useAppDispatch } from "redux/storeTS";
import { H1, RegisterPageContainer } from "./Registerstyle";
import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import { SignUpSchema } from "Utils/Schemas/SignupSchema";
import { FormikErrorMessage } from "components/Phonebook/ContactsForm.styled";
import DefaultButton from "Utils/Button";

interface UserRegister {
  name: string;
  email: string;
  password: string;
}

const initialValues: UserRegister = {
  name: "",
  email: "",
  password: "",
};

export const RegistrationFormik: FC = () => {
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const user = useSelector(getUserName);
  let navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/login", { replace: true });
    }
  }, [navigate, user]);
  const handleSubmit = (
    values: UserRegister,
    actions: FormikHelpers<UserRegister>
  ) => {
    console.log(values);
    actions.resetForm();
    dispatch(registerUser(values));
  };
  const passWordLength = password.length;
  return (
    <RegisterPageContainer>
      <H1>Register Page</H1>
      <Formik
        validationSchema={SignUpSchema}
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({ values, errors, setFieldValue }) => (
          <LoginForm>
            <label htmlFor="name">
              Name
              <Field
                type="text"
                id="name"
                name="name"
                placeholder={"Please enter Your Name"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("name", e.target.value)
                }
                value={values.name}
                autoComplete="off"
                errors={errors.name}
              />
              <ErrorMessage name="name" component={FormikErrorMessage} />
            </label>

            <label htmlFor="email">
              Email
              <Field
                type="email"
                id="email"
                name="email"
                placeholder={"Please enter Your Email"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("email", e.target.value)
                }
                value={values.email}
                errors={errors.email}
                autoComplete="off"
              />
              <ErrorMessage name="email" />
            </label>
            <label htmlFor="password">
              Password
              <Field
                type="password"
                id="password"
                name="password"
                placeholder={"Please enter Your password"}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("password", e.target.value);
                  setPassword(e.target.value);
                }}
                value={values.password}
                errors={errors.password}
                autoComplete="off"
              />
              <ErrorMessage name="password" />
              <StyledPassword $length={passWordLength}>
                {/* {!passWordLength && <p>Enter Password</p>} */}
                {passWordLength > 0 && passWordLength < 5 && (
                  <p>Very weak password</p>
                )}
                {passWordLength > 5 &&
                  passWordLength < 9 &&
                  /[A-Z]/.test(password) && <p>Weak password</p>}
                {passWordLength >= 5 &&
                  passWordLength < 9 &&
                  !/[A-Z]/.test(password) && <p>Medium password</p>}
                {passWordLength >= 9 && !/[A-Z]/.test(password) && (
                  <p>Good password</p>
                )}
                {passWordLength >= 9 && /[A-Z]/.test(password) && (
                  <p>Very Good password</p>
                )}
              </StyledPassword>
            </label>
            <DefaultButton
              type="submit"
              disabled={!values.password || !values.name || !values.email}
            >
              Register
            </DefaultButton>
            <GoogleRedirect />
          </LoginForm>
        )}
      </Formik>
    </RegisterPageContainer>
  );
};
