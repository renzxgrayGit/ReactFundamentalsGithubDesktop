// Add 1 and Subtract 1 the counter useState, useEffect used for changing the value of counter instantly after loading the AddMinusOne component
import React, { useEffect, useState } from 'react'

const AddMinusOne = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, [])

  return (
    <div className="p-4 border-2 w-40 m-4">
      <button
        className="bg-blue-400 px-2 py-1 rounded text-white font-medium w-10 hover:bg-blue-500"
        onClick={() => setCounter((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <h1 className="font-bold text-center">{counter}</h1>
      <button
        className="bg-blue-400 px-2 py-1 rounded text-white font-medium w-10 hover:bg-blue-500"
        onClick={() => setCounter((prevCount) => prevCount - 1)}
      >
        -
      </button>
    </div>
  )
}

export default AddMinusOne