import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';

import defaultimage from '../../images/photo.jpg';
import monobankPhoto from '../../images/monobankPhoto.jpg';
import { FormContainer } from './UpdateUserForm.styled';
import { updateUser } from 'redux/auth/AuthOperations';
import { useAuth } from 'Utils/Hooks/';

function UserInfoModal2({ onClose }) {
  const { name, avatar } = useAuth();
  const dispatch = useDispatch();
  const [picture, setPicture] = useState(avatar || defaultimage);
  console.log('rebeder USermodal');
  const handleSubmit = (values, actions) => {
    const formData = new FormData();

    // if (values.name) {
    //   formData.append('name', values.name);
    // }

    // if (values.file) {
    //   formData.append('avatar', values.file);
    // }
    // if (values.subscription) {
    //   formData.append('subscription', values.subscription);
    // }
    // if (values.zalupa) {
    //   formData.append('zalupa', values.zalupa);
    // }
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
          <label>
            <Field
              name="file"
              type="file"
              value={undefined}
              onChange={event => {
                const avatarTempUrl = URL.createObjectURL(
                  event.target.files[0]
                );
                if (event.target.files[0].size > 5000000)
                  return alert(`Image too big, choose another image`);
                setPicture(avatarTempUrl);
                setFieldValue('file', event.currentTarget.files[0]);
              }}
            />
          </label>
          <label>
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
          <label>
            <Field type="radio" name="subscription" value="starter" />
          </label>
          <label>
            <Field type="radio" name="subscription" value="pro" />
            pro
          </label>
          <label>
            <Field type="radio" name="subscription" value="business" />
            business
          </label>
          <a href="https://send.monobank.ua/jar/2zJPLDZWzA?widget">
            Donate for Armed Forces of Ukraine
          </a>

          <img src={monobankPhoto} alt="monobankJar" width={60} height={60} />
          <button type="submit">Submit</button>
          <img src={picture} alt="User avatar" width={60} height={60} />
          <label>
            <Field type="checkbox" id="checkbox" name="checkbox" />
          </label>
        </FormContainer>
      )}
    </Formik>
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
