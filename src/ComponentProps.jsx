// Create another component with the same jsx file and access that into other component, component "Person" access into component "ComponentProps", used props as an argument to pass name, lastName, age value so it's dynamic.

const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  )
}

const ComponentProps = () => {
  return (
    <div>
      <Person name='Renz' lastName='Cabajar' age='24' />
      <Person name='Amy' lastName='Alegado' age='23' />
    </div>
  )
}

export default ComponentProps