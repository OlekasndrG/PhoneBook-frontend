import { FC, useEffect, useState, ChangeEvent, FormEvent } from "react";

import {
  loginUser,
  resendVerify,
  verify,
} from "../../redux/auth/authOperationsTS";

import { LoginFormWithoutFormik, StyledPassword } from "./Login.styled";
import { useSearchParams } from "react-router-dom";

import DefaultButton from "Utils/Button";
import { useAuth } from "Utils/Hooks/";
import { GoogleRedirect } from "../../components/GoogleAuth/GoogleAuthTS";
import { useAppDispatch } from "redux/storeTS";

export const Login: FC = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { loading } = useAuth();
  const [demoLoader, setDemoLoader] = useState(false);
  const [loginLoader, setLoginLoader] = useState(false);
  // const [disabled, setDisabled] = useState(true);

  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const verificationToken = searchParams.get("verificationToken");
  const disabledButton = email && password;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value.trim());

        break;
      case "password":
        setPassword(e.target.value.trim());

        break;
      default:
        return;
    }
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ password, email }));
    setLoginLoader(true);
    // setDisabled(true);
    // e.currentTarget.reset();
  };
  const handleDemoSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      loginUser({ password: "123456", email: "doyanij485@konican.com" })
    );
    setDemoLoader(true);
    // e.currentTarget.reset();
  };
  useEffect(() => {
    const verifyRequest = async () => {
      try {
        if (verificationToken) await verify(verificationToken);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setSearchParams({});
      }
    };
    if (verificationToken) verifyRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const passWordLength = password.length;

  return (
    <>
      {!verificationToken && (
        <LoginFormWithoutFormik onSubmit={handleSubmit} autoComplete="off">
          <h1>Login page</h1>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder={"Please enter Your Eamil"}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={password}
              placeholder={"Please enter Your password"}
              onChange={handleChange}
            />
          </label>

          <DefaultButton
            type="submit"
            disabled={!disabledButton}
            aria-label="login-button"
            loader={loading && loginLoader}
          >
            Log in
          </DefaultButton>
          <DefaultButton
            type="button"
            onClick={handleDemoSubmit}
            // disabled={!disabledButton}
            aria-label="login-button"
            loader={loading && demoLoader}
          >
            Try Demo
          </DefaultButton>
          <GoogleRedirect />

          <DefaultButton
            type="button"
            disabled={!email}
            onClick={() => resendVerify(email)}
            aria-label="resend-verify-email-button"
          >
            Resend Verification email
          </DefaultButton>
          <StyledPassword $length={passWordLength}>
            {!passWordLength && <p>Enter Password</p>}
            {passWordLength < 9 && <p>Weak password</p>}
            {passWordLength >= 9 && !/[A-Z]/.test(password) && (
              <p>Medium password</p>
            )}
            {passWordLength >= 9 && /[A-Z]/.test(password) && (
              <p>Good password</p>
            )}
          </StyledPassword>
        </LoginFormWithoutFormik>
      )}
    </>
  );
};
