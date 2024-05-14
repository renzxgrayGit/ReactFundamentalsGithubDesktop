import { useState } from "react";

const App = () => {
  const name = 'Renz';
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setUserLoggedIn((prevState) => !prevState)
  }

  return (
    <div>
      {userLoggedIn ? (
        <div>
          <h1>User is logged in</h1>
          <h2>Username: {name}</h2>
        </div>
      ) : (
        <div>
          <h1>User is NOT logged in</h1>
          <h2>You need to login first</h2>
        </div>
      )}
      <div>
        <button onClick={handleLoggedIn}>Click to Toggle Login</button>
      </div>
    </div>
  )
}

export default App