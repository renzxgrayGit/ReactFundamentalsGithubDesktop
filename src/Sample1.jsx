const Person = (props) => {
  return (
    <div className="p-4 border-2 w-40 m-4">
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  )
}

const Sample1 = () => {
  const name = "";
  const isName = false;

  return (
    <div className="Sample1">
      <h1>Hello {isName ? name : "Stranger"}</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>There's no name</h1>
          <h2>There's no name</h2>
        </>
      )
      }

      <div>
        <Person name='Renz' lastName='Chris' age='24' />
        <Person name='Amy' lastName='Alegado' age='23' />
      </div>
    </div>
  );
}

export default Sample1