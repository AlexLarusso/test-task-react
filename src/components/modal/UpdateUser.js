import React, { useState } from 'react';
export default function UpdateUser({modal, user, callback}) {
  const [userInfo, setUserInfo] = useState(user);

  const handleInputChanges = e => setUserInfo({
    ...userInfo,
    [e.target.name]: e.target.value
  });

  return (
    <form onSubmit={e => {
      e.preventDefault();
      callback(user.id, modal, userInfo);
    }}>
      <div className="bg-black/50 fixed top-0 right-0 bottom-0 left-0" onClick={modal.hide} />
      <div className="w-[500px] fixed top-16 rounded p-6 bg-gray-800 left-1/2 -translate-x-1/2" >
        <h1 className="text-center mb-2 text-lg text-white"> Please update information for user: {user.username} </ h1>
        <label htmlFor="city" className="text-white">City</label>
        <input 
          className="block border mb-2 w-full rounded"
          type="text" name="city" placeholder={user.address.city} onChange={handleInputChanges}></input>
        <label htmlFor="street" className="text-white">Street</label>
        <input 
          className="block border mb-2 w-full rounded"
          type="text" name="street" placeholder={user.address.street} onChange={handleInputChanges}></input>
        <label htmlFor="suite" className="text-white">Suite</label>
        <input 
          className="block border w-full rounded"
          type="text" name="suite" placeholder={user.address.suite} onChange={handleInputChanges}></input>
        <button 
          type="submit"
          className="border border-blue-700 rounded-full py-2 px-4 text-xs font-semibold text-blue-700 cursor-pointer mt-5"
          >
            Update
          </button>
      </ div>
      </ form>
  )
}