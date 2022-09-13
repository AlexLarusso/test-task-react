import React, { useState } from 'react';

export default function UpdateUser({modal, user, callback}) {
  const [userInfo, setUserInfo] = useState(user);

  const handleInputChanges = e => {
    const isAddress = e.target.name === 'city' || e.target.name === 'street' || e.target.name === 'suite';

    isAddress ?  setUserInfo({
      ...userInfo,
      address: {
        ...userInfo.address,
        [e.target.name]: e.target.value
      }
    }) :

    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={e => {
      e.preventDefault();
      callback(modal, userInfo);
    }}>
      <div className="bg-black/50 fixed top-0 right-0 bottom-0 left-0" onClick={modal.hide} />
      <div className="w-[500px] fixed top-16 rounded p-6 bg-gray-800 left-1/2 -translate-x-1/2" >
        <h1 className="text-center mb-2 text-lg text-white"> Please provide an information for a new user. </ h1>

        <label htmlFor="name" className="text-white">Name</label>
        <input 
          className="block border mb-2 w-full rounded"
          type="text" name="name" onChange={handleInputChanges}></input>

        <label htmlFor="username" className="text-white">Username</label>
        <input 
          className="block border mb-2 w-full rounded"
          type="text" name="username" onChange={handleInputChanges}></input>

        <label htmlFor="email" className="text-white">Email</label>
        <input 
          className="block border mb-2 w-full rounded"
          type="text" name="email" onChange={handleInputChanges}></input>

        <label htmlFor="city" className="text-white">City</label>
        <input 
          className="block border mb-2 w-full rounded"
          type="text" name="city" onChange={handleInputChanges}></input>

        <label htmlFor="street" className="text-white">Street</label>
        <input 
          className="block border mb-2 w-full rounded"
          type="text" name="street" onChange={handleInputChanges}></input>

        <label htmlFor="suite" className="text-white">Suite</label>
        <input 
          className="block border mb-2 w-full rounded"
          type="text" name="suite" onChange={handleInputChanges}></input>

        <button 
          type="submit"
          className="border border-green-700 rounded-full py-2 px-4 text-xs font-semibold text-green-700 cursor-pointer mt-5"
          >
            Add
          </button>
      </ div>
      </ form>
  )
}