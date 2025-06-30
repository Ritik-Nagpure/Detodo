import Todos from "../Todo/Todos"
import Newtodo from "../Todo/Newtodo"
import { useState, useEffect } from "react"


const display = () => {
  const [addtodo, setAddtodo] = useState(true)

  const handleAddTodo = () => {
    setAddtodo(!addtodo)
  }

  const submitTodo = (todo) => {
    console.log("New Todo Submitted:", todo);
    setAddtodo(false);
  }

  return (
    <div>
      <br></br>
      <p className="text-5xl text-center text-blue-500">
        Daily Tasks
      </p>
      <br></br>
      <Todos />
      {addtodo ? <Newtodo /> : null}
      <br></br>
    </div>
  )
}

export default display