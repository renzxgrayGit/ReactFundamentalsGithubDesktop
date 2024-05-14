// Functional Components, Declared Variable and pass the value as JSX

const FunctionalSample = () => {
  const name = 'Renz';
  const isNameShowing = true;
  const newName = 'Amy';
  const isUserLoggedIn = Math.random() < 0.5; // Randomly assigned true or false to isUserLoggedIn

  return (
    <div className="m-4">
      <h1>My name is {name}</h1>
      <h2>{isNameShowing ? newName : "New name is false"}</h2>
      <div>
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
      </div>
    </div>
  )
}

export default FunctionalSample