import { useDispatch, useSelector } from 'react-redux';

import { getUserAvatar, getUserName, getisLoading } from 'redux/selectors';
import { UserMenuButton, UserMenuContainer } from './USerMenu.styled';
import { logOutUser } from 'redux/auth/AuthOperations';

import UserInfoModal2 from 'HeaderNavigation/UserMenu/UpdateUserForm';

import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { Modal } from 'Utils/Modal/Modal';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const avatar = useSelector(getUserAvatar);
  const isLoading = useSelector(getisLoading);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(false);
  };
  const openModal = e => {
    setShowModal(true);
  };
  return (
    <UserMenuContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <p onClick={openModal}>Welcome, {userName}</p>
          <img src={avatar} alt="User avatar" width={60} height={60} />
          <UserMenuButton type="button" onClick={() => dispatch(logOutUser())}>
            Log out
          </UserMenuButton>
          {showModal && (
            <Modal onClose={toggleModal}>
              {isLoading ? (
                <Loader />
              ) : (
                <UserInfoModal2 onClose={toggleModal} />
              )}
            </Modal>
          )}
        </>
      )}
    </UserMenuContainer>
  );
};
