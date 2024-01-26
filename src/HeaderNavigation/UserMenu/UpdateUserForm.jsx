import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';

import defaultimage from '../../images/photo.jpg';
import monobankPhoto from '../../images/monobankPhoto.jpg';
import {
  AvatarImage,
  AvatarInput,
  AvatarLabel,
  CrossSVG,
  FormContainer,
  ModalButton,
  PlusSVG,
  RadioContainer,
} from './UpdateUserForm.styled';

import { logOutUser, updateUser } from 'redux/auth/AuthOperations';
import { useAuth } from 'Utils/Hooks/';

function UserInfoModal2({ onClose }) {
  const { name, avatar } = useAuth();
  const dispatch = useDispatch();
  const [picture, setPicture] = useState(avatar || defaultimage);

  const handleSubmit = (values, actions) => {
    const formData = new FormData();

    Object.keys(values).forEach(key => {
      if (key === 'file') {
        formData.append('avatar', values.file);
      } else {
        formData.append(key, values[key]);
      }
    });

    dispatch(updateUser(formData));
    actions.resetForm();
    onClose();
  };

  return (
    <>
      <Formik
        initialValues={{
          file: null,
          name: name ?? '',
          subscription: 'starter',
          checkbox: false,
        }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormContainer>
            <AvatarLabel htmlFor="file">
              <AvatarInput
                name="file"
                type="file"
                accept=".jpg, .jpeg, .png"
                value={undefined}
                onChange={event => {
                  const avatarTempUrl = URL.createObjectURL(
                    event.target.files[0]
                  );
                  if (event.target.files[0].size > 5000000)
                    return alert(`Image too big, choose another image`);
                  console.log(avatarTempUrl);
                  setPicture(avatarTempUrl);
                  setFieldValue('file', event.currentTarget.files[0]);
                }}
              />
              <PlusSVG />
              <AvatarImage
                src={picture}
                alt="User avatar"
                width={60}
                height={60}
              />

              <CrossSVG onClick={onClose} />
            </AvatarLabel>

            <label htmlFor="name">
              Name
              <Field
                type="text"
                id="name"
                name="name"
                placeholder={name}
                onChange={e => setFieldValue('name', e.target.value)}
                value={values.name}
                autoComplete="off"
              />
            </label>
            <RadioContainer
              role="group"
              aria-labelledby="subscription-radio-group"
            >
              <span>Subscription</span>
              <label htmlFor="subscription">
                <Field type="radio" name="subscription" value="starter" />
                <span>starter</span>
              </label>
              <label>
                <Field type="radio" name="subscription" value="pro" />
                <span>pro</span>
              </label>
              <label>
                <Field type="radio" name="subscription" value="business" />
                <span>business</span>
              </label>
            </RadioContainer>
            <a href="https://send.monobank.ua/jar/2zJPLDZWzA?widget">
              Donate for Armed Forces of Ukraine
              <img
                src={monobankPhoto}
                alt="monobankJar"
                width={60}
                height={60}
              />
            </a>

            <ModalButton type="submit" aria-label="submit editing user profile">
              Submit
            </ModalButton>
            <ModalButton
              type="button"
              onClick={() => dispatch(logOutUser())}
              aria-label="logout user"
            >
              Log out
            </ModalButton>
          </FormContainer>
        )}
      </Formik>
    </>
  );
}

// export const UserinfoMOdalnotFormik = ({ onClose }) => {
//   const nickName = useSelector(getUserName);
//   const newAvatarUrl = useSelector(getUserAvatar);

//   const [name, setName] = useState(nickName);
//   const [avatar, setAvatar] = useState(newAvatarUrl || '');
//   const [file, setFile] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const dispatch = useDispatch();

//   const uploadAvatar = e => {
//     if (!e.target.files[0]) return;
// if (e.target.files[0].size > 5000000)
//   return alert(`Image too big, choose another image`);

//     const avatarTempUrl = URL.createObjectURL(e.target.files[0]);
//     setDisabled(false);
//     setAvatar(avatarTempUrl);
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const formData = new FormData();
//     if (name) {
//       formData.append('name', name);
//     }
//     if (file) {
//       formData.append('avatar', file);
//     }

//     dispatch(updateUser(formData));
//     onClose();
//   };

//   return (
//     <form id="modal">
//       <label htmlFor="avatar" id="modal">
//         <input
//           type="file"
//           accept=".jpg, .jpeg, .png"
//           id="avatar"
//           name="avatar"
//           onChange={uploadAvatar}
//         />
//         <img src={avatar || defaultimage} alt="avatar_image" width={60} />
//       </label>
//       <label htmlFor="name" id="modal">
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder={nickName}
//           onChange={e => {
//             setDisabled(false);
//             setName(e.target.value);
//           }}
//           value={name}
//           autoComplete="off"
//         />
//         {/* <UserDefault className={css.svgbefore} /> */}
//       </label>
//       <button
//         type="submit"
//         onClick={handleSubmit}
//         aria-label="edit-profile-save-changes-button"
//         disabled={disabled}
//       >
//         Save changes
//       </button>
//     </form>
//   );
// };

export default UserInfoModal2;
