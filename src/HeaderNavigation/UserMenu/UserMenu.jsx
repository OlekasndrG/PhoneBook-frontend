import UserInfoModal2 from 'HeaderNavigation/UserMenu/UpdateUserForm';

import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { Modal } from 'Utils/Modal/Modal';
import { useAuth } from 'Utils/Hooks';
import {
  NavigationButton,
  UserInterfaceContainer,
  UserMenuContainer,
} from './USerMenu.styled';

export const UserMenu = () => {
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
          <UserInterfaceContainer>
            <img src={avatar} alt="User avatar" width={40} height={40} />
            <p>Welcome, {name}</p>
          </UserInterfaceContainer>
          {showModal && (
            <Modal onClose={toggleModal}>
              <UserInfoModal2 onClose={toggleModal} />
            </Modal>
          )}
          <NavigationButton
            type="button"
            onClick={openModal}
            aria-label="logout user"
          >
            Edit Profile
          </NavigationButton>
        </>
      )}
    </UserMenuContainer>
  );
};
//  <UserInfoModal2 onClose={() => console.log('sd')} />;
