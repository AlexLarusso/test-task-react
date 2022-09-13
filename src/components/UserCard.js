import React from 'react';
import { useModal, MODAL_TYPES } from './ModalContext';

export default function UserCard({ user }) {
  const { address } = user;
  const { show } = useModal();

  return (
    <>
      <div className="inline-block mx-auto right-0 mt-2 mr-10 ml-10 min-w-210 mb-10">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="text-center p-6 bg-gray-800 border-b">
            <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path></svg>
            <p className="pt-2 text-lg font-semibold text-gray-50">{ user.username }</p>
            <p className="text-sm text-gray-100">{ user.email }</p>
            <div className="mt-5">
              <button 
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 mr-5 cursor-pointer"
                onClick={() => show(user, MODAL_TYPES.UPDATE)}>
                Edit User
              </button>
              <button 
                className="border border-red-700 rounded-full py-2 px-4 text-xs font-semibold text-red-700 cursor-pointer"
                onClick={() => show(user, MODAL_TYPES.DELETE)}>
                Delete User
              </button>
            </div>
          </div>
          <div className="border-b pb-5 pt-2">
            <div className="pl-3 mb-2">
              <p className="text-sm font-medium text-gray-800 leading-none">
                  City
              </p>
              <p className="text-xs text-gray-500">{address.city}</p>
            </div>
            <div className="pl-3 mb-2">
              <p className="text-sm font-medium text-gray-800 leading-none">
                  Street
              </p>
              <p className="text-xs text-gray-500">{address.street}</p>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                  Suite
              </p>
              <p className="text-xs text-gray-500">{address.suite}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
