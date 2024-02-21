import React, { useState, FC, ChangeEvent } from "react";

import { Formik, Field, FormikHelpers } from "formik";

import defaultimage from "../../images/photo.jpg";
// import monobankPhoto from '../../images/monobankPhoto.jpg';

// import defaultimage from '../../photo.jpg';
import monobankPhoto from "../../images/monobankPhoto.jpg";

import {
  AvatarImage,
  AvatarInput,
  AvatarLabel,
  CrossSVG,
  FormContainer,
  ModalButton,
  PlusSVG,
  RadioContainer,
} from "./UpdateUserForm.styled";

import { logOutUser, updateUser } from "../../redux/auth/authOperationsTS";
import { useAuth } from "Utils/Hooks/";
import { useAppDispatch } from "redux/storeTS";
interface IuserInfoModal {
  onClose: () => void;
}
interface FormValues {
  file: string | Blob;
  name: string;
  subscription: string | null;
  checkbox: boolean;
  [key: string]: string | Blob | boolean | null;
}

const UserInfoModal2: FC<IuserInfoModal> = ({ onClose }) => {
  const { name, avatar } = useAuth();
  const dispatch = useAppDispatch();
  const [picture, setPicture] = useState<string>(avatar || defaultimage);
  const initialValues: FormValues = {
    file: "",
    name: name ?? "",
    subscription: null,
    checkbox: false,
  };
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const formData = new FormData();

    Object.keys(values).forEach((key: string) => {
      if (key === "file") {
        formData.append("avatar", values.file);
      } else {
        formData.append(key, values[key] as string);
      }
    });

    dispatch(updateUser(formData));
    actions.resetForm();
    onClose();
  };
  console.log("update user form ts");
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <FormContainer>
            <AvatarLabel htmlFor="file">
              <AvatarInput
                name="file"
                type="file"
                accept=".jpg, .jpeg, .png"
                value={undefined}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (!event.target.files) {
                    return;
                  }
                  const avatarTempUrl = URL.createObjectURL(
                    event.target.files[0]
                  );
                  if (event.target.files[0].size > 5000000)
                    return alert(`Image too big, choose another image`);
                  console.log(avatarTempUrl);
                  setPicture(avatarTempUrl);
                  setFieldValue("file", event.currentTarget?.files?.[0]);
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
                // placeholder={name}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("name", event.target.value)
                }
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
              onClick={() => dispatch(logOutUser(null))}
              aria-label="logout user"
            >
              Log out
            </ModalButton>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

export default UserInfoModal2;

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
