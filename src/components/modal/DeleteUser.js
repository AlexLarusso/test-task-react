import React from 'react';

export default function DeleteUser({modal, user, callback}) {

  return (
    <>
      <div className="bg-black/50 fixed top-0 right-0 bottom-0 left-0" onClick={modal.hide} />
      <div className="w-[500px] bg-gray-800 fixed top-16 rounded p-6 left-1/2 -translate-x-1/2">
        <h1 className="text-center mb-2 text-lg text-white"> Are you sure you want to delete {user.username} ?</ h1>  
        <button 
          className="border border-red-700 rounded-full py-2 px-4 text-xs font-semibold text-red-700 cursor-pointer mt-5"
          onClick={() => callback(user.id, modal)}>
            Delete
          </button>
      </ div>
      </>
  )
}