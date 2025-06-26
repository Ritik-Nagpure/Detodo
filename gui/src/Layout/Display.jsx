import Todos
  from "../Todo/Todos"
const display = () => {
  return (
    <div>
      <br></br>
      <p className="text-5xl text-center text-blue-500">
        Daily Tasks
      </p>
      <br></br>
      <Todos />
      <br></br>
    </div>
  )
}

export default display