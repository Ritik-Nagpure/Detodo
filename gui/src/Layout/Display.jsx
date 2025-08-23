import Todos from "../Todo/Todos"
import Newtodo from "../Todo/Newtodo"

const display = () => {
  return (
    <div>
      <br></br>
      <p className="text-5xl text-center text-blue-500">
        Daily Tasks
      </p>
      <br></br>
      {addtodo ? <Newtodo /> : null}
      <Todos />      
      <br></br>
    </div>
  )
}

export default display