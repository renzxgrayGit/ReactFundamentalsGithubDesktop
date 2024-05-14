import React, { useState } from 'react'

const ToggleLoginSample = () => {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

  const handleToggleLogin = () => {
    setisUserLoggedIn(prevState => !prevState);
  }

  return (
    <div className="m-4">
      <div className="bg-gray-800 p-8">
        {isUserLoggedIn ? (
          <div className="bg-blue-400 w-96 p-4 m-4 text-white rounded">
            <h2>User is Logged In</h2>
            <h2>User name: {name}</h2>
          </div>
        ) : (
          <div className="bg-red-400 w-96 p-4 m-4 text-white rounded">
            <h2>User is NOT Logged In</h2>
            <h2>You need to log in first</h2>
          </div>
        )}
        <button
          className="bg-green-400 px-4 py-2 rounded text-slate-100 font-medium mx-4 hover:bg-green-500 active:bg-green-600"
          onClick={handleToggleLogin}>
          Click to Toggle Login
        </button>
      </div>
    </div>
  )
}

export default ToggleLoginSample