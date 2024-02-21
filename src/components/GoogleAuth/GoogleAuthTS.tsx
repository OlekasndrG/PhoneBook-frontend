import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { ReactComponent as GoogleLogo } from "../../images/SVG/GoogleLogo.svg";
import axios from "axios";
import { setGoogleAuth } from "../../redux/auth/authSliceTS";
import { GoogleButton } from "./GoogleAuth.styled";
// import googleLogo from '../../images/SVG/googleLogo.svg';
export const GoogleRedirect = () => {
  // const BASE_URL = process.env.REACT_APP_PRODUCTION_URL;

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");
    const name = searchParams.get("name");
    const avatarURL = searchParams.get("avatarURL");
    const subscription = searchParams.get("subscription");

    if (!token || !email || !name) {
      // console.log('missing fields');
      return;
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    dispatch(
      setGoogleAuth({ user: { name, email, avatarURL, subscription }, token })
    );
  }, [dispatch, searchParams]);

  return (
    <GoogleButton type="button" aria-label="authentificate with google">
      <a href="https://phonebook-backend-5bos.onrender.com/api/users/google">
        {location.pathname === "/login" ? (
          <span> Sign Up with Google</span>
        ) : (
          <span> Sign In with Google</span>
        )}
      </a>
      <GoogleLogo height={30} width={30} />
      {/* <img height={30} width={30} alt="googleLogo" src={googleLogo} /> */}
    </GoogleButton>
  );
};

export default GoogleRedirect;
