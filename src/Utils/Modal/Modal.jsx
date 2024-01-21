// import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, InnerContainer } from './Modal.styled';

import { createPortal } from 'react-dom';
const ModalRoot = document.getElementById('modal-root');

export const Modal = ({ onClose, children }) => {
  const handleBackdropCLick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    // const handleDocumentClick = e => {
    //   console.log(e.target);
    //   if (e.target.id === 'modal-root') {
    //     onClose();
    //   }
    // };
    window.addEventListener('keydown', handleKeyDown);
    // window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // window.removeEventListener('click', handleDocumentClick);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={handleBackdropCLick}>
      <InnerContainer>{children}</InnerContainer>
    </Overlay>,
    ModalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
