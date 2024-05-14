const Sample = () => {
  let names = ["Renz", "Amy", "Zoe"];
  let namesRepeat = ["Unknown", "Unknown", "Unknown", "Summer", "Mulag"]

  return (
    <div>
      <button
        className="text-white text-lg bg-blue-400 px-4 py-2 m-4 rounded hover:bg-blue-500"
        onClick={() => {
          console.log("You clicked me :)");
        }}>
        Click me!
      </button>
      <div>
        {names.map((name) => {
          return <p key={name}>{name}</p>
        })}
      </div>
      <div>
        {namesRepeat
          .filter((name) => name !== "Unknown")
          .map((name) => <p key={name}>{name}</p>)}
      </div>
    </div>
  );
}

export default Sample