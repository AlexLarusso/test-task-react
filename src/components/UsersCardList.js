import React from 'react';
import UserCard from './UserCard';
import Modal from './Modal';
import { useModal, MODAL_TYPES } from './ModalContext';

export default function UsersCardList({ users, updateUsers }) {
  const modal = useModal();

  const deleteUserById = (id, modal) => {
    const updatedUsers = users.filter(user => user.id !== id)

    updateUsers(updatedUsers);
    modal.hide();
  };

  const updateUserById = (id, modal, userInfo) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        user.address = {...user.address, ...userInfo}
      }

      return user;
    });

    updateUsers(updatedUsers);
    modal.hide();
  }

  const addUser =  (modal, userInfo) => {
    userInfo.id = Date.now();
    users.push(userInfo);
    updateUsers(users);
    modal.hide();
  }

  return (
    <div className="text-center">
      <button 
        className="block ml-10 mt-10 border rounded-full border-green-700 py-2 px-4 text-xs font-semibold text-green-600 cursor-pointer"
        onClick={() => modal.show(null, MODAL_TYPES.ADD)}>
        Add User
      </button>
        <Modal deleteUserById={deleteUserById} updateUserById={updateUserById} addUser={addUser}/>
          { users.map(user => <UserCard user={user} key={user.id}/>) }
    </ div>
  )
}