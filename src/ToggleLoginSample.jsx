// created a simple toggle login component in React. It displays a message depending on whether the user is logged in or not and provides a button to toggle the login status.

import React, { useState } from 'react'

const ToggleLoginSample = () => {
  const name = 'Renz';
  // State the variable to track whether the user is logged in or not
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

  // Event handler function to toggle the login status
  const handleToggleLogin = () => {
    setisUserLoggedIn(prevState => !prevState);
  }

  return (
    <div className="m-4">
      <div className="bg-gray-800 p-8">
        {isUserLoggedIn ? (
          <div className="bg-blue-400 w-full px-8 py-6 m-auto text-white text-xl rounded">
            <h2>User is Logged In</h2>
            <h2>User name: {name}</h2>
          </div>
        ) : (
          <div className="bg-red-400 w-full px-8 py-6 m-auto text-white text-xl rounded">
            <h2>User is NOT Logged In</h2>
            <h2>You need to log in first</h2>
          </div>
        )}
        <button
          className="bg-green-400 px-4 py-2 rounded text-slate-100 font-medium mt-4 hover:bg-green-500 active:bg-green-600"
          onClick={handleToggleLogin}>
          Click to Toggle Login
        </button>
      </div>
    </div>
  )
}

export default ToggleLoginSample