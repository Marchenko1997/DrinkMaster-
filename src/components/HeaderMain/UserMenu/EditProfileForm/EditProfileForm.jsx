import {
  AddAvatar,
  Avatar,
  AvatarContainer,
  ChangeNameInput,
  SaveChangeBtn,
  FormEdit,
  SvgIcon,
  EditNameButton,
  LabelChangeName,
} from "./EditProfileForm.styled";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  selectAvatarURL,
  selectUserName,
} from "../../../../redux/selectors/auth.selectors";
import { updateUser } from "../../../../redux/auth/auth.operations";
const sprite = "/icons.svg";

const EditProfileForm = () => {
  return <div>EditProfileForm</div>;
};

export default EditProfileForm;
