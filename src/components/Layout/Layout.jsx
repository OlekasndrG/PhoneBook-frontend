import { Link, Outlet } from 'react-router-dom';

import { NavContainer } from './Layout.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'HeaderNavigation/UserMenu/UserMenu';
import { StyledLink } from 'components/Contacts/Contacts.styled';

const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const userName = useSelector(getUserName);
  // const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  return (
    <>
      <NavContainer>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'rgb(146, 171, 207)',
            fontSize: '800',
          }}
        >
          <h1
            style={{ margin: '0', paddingTop: '10px', textDecoration: 'none' }}
          >
            PhoneBook
          </h1>
        </Link>
        {isLoggedIn ? (
          <>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contacts">Contacts</StyledLink>
            <UserMenu />
          </>
        ) : (
          <>
            <StyledLink to="/">Home</StyledLink>
            <div style={{ display: 'flex', gap: '15px', marginLeft: 'auto' }}>
              <StyledLink to="/registration">Registration</StyledLink>
              <StyledLink to="/login">Log in</StyledLink>
            </div>
          </>
        )}
      </NavContainer>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
