import { useDispatch } from 'react-redux';

import { NavigationButton, UserMenuContainer } from './USerMenu.styled';
import { logOutUser } from 'redux/auth/AuthOperations';

import UserInfoModal2 from 'HeaderNavigation/UserMenu/UpdateUserForm';

import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { Modal } from 'Utils/Modal/Modal';
import { useAuth } from 'Utils/Hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { loading, name, avatar } = useAuth();

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(false);
  };
  const openModal = e => {
    setShowModal(true);
  };
  return (
    <UserMenuContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <button type="button" onClick={openModal}>
            <p>Welcome, {name}</p>
            <img src={avatar} alt="User avatar" width={88} height={88} />
          </button>
          {showModal && (
            <Modal onClose={toggleModal}>
              <UserInfoModal2 onClose={toggleModal} />
            </Modal>
          )}

          <NavigationButton
            type="button"
            onClick={() => dispatch(logOutUser())}
            aria-label="logout user"
          >
            Log out
          </NavigationButton>
        </>
      )}
    </UserMenuContainer>
  );
};
//  <UserInfoModal2 onClose={() => console.log('sd')} />;
