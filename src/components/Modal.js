import React from "react";
import { useModal, MODAL_TYPES } from './ModalContext';
import DeleteUserModal from './modal/DeleteUser';
import UpdateUserModal from './modal/UpdateUser';
import AddUserModal from './modal/AddUser';

export default function Modal({addUser, updateUserById, deleteUserById}) {
  const modal = useModal();
  const user = modal.user;
  let callback;
  let UserModal;

  switch(modal.modalType) {
    case MODAL_TYPES.ADD: {
      callback = addUser;
      UserModal = AddUserModal;
      break;
    }
    case MODAL_TYPES.UPDATE: {
      callback = updateUserById;
      UserModal = UpdateUserModal;
      break;
    }
    case MODAL_TYPES.DELETE: {
      callback = deleteUserById;
      UserModal = DeleteUserModal;
      break;
    }
    default:
      break;
  }

  if (!modal.visible) return null;

  return (
    <>
      <UserModal modal={modal} user={user} callback={callback} />
    </>
  )
}