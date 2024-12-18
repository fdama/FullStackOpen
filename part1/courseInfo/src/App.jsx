const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )

}

const Part = (props) => {
  return(
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name = {props.part1} exercises = {props.exercises1}/>
      <Part name = {props.part2} exercises = {props.exercises2}/>
      <Part name = {props.part3} exercises = {props.exercises3}/>
    </div>
  )
}
  const Total = (props) => {
    return(
      <div>
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
      </div>
    )
  }

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name:'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    ]
  }

  return(
    <div>
      <h3><Header course = {course.name} /></h3>
      <Content part1 = {course.parts[0].name} exercises1 = {course.parts[0].exercises}
      part2 = {course.parts[1].name} exercises2 = {course.parts[1].exercises}
      part3 = {course.parts[2].name} exercises3 = {course.parts[2].exercises}/>
      <Total exercises1 = {course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3 = {course.parts[2].exercises}/>
    </div>
  )
}

export default App