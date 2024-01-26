import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Registration } from 'pages/RegisterPage/Register';
import { Login } from 'pages/LoginPage/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Contacts from 'pages/ContactsPage/ContactsPage';
import { getCurrentUser } from 'redux/auth/AuthOperations';
import PrivateRoute from 'Routes/PrivateRoute';
import PublicRoute from 'Routes/PublicRoute';
import { getIsFetchingCurrentUser } from 'redux/selectors';
import PageLoader from './Loader/PageLoader';
import { ToastContainer } from 'react-toastify';
import { HomeText } from './Layout/Layout.styled';

// import WindowResizeHook from 'Utils/Hooks/WindowResizeHook';
// demo - doyanij485@konican.com password 123456
export default function App() {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  const dispatch = useDispatch();
  // const windowwidth = WindowResizeHook();
  // console.log(windowwidth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <PageLoader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeText>This project</HomeText>} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <p
                  style={{
                    textDecoration: 'none',
                    color: 'rgb(146, 171, 207)',
                    fontSize: '34px',
                  }}
                >
                  Sorry, no page found
                </p>
              </div>
            }
          />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
}
