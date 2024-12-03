const Hello = (prop) => {
  console.log(prop)
  return (
    <div>
      <p>Hello {prop.name}, you are {prop.age} years old</p>
    </div>
  )
}


const App = () => {
  const name = 'Peter'
  const age = 10
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26+10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App