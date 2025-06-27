import { todos } from "./Gettodo"

const Todos = () => {

  const todoList = todos.map(todo => (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed ? "Completed" : "Not Completed"}</td>
    </tr>
  ))
  // console.log(todos)
  // console.log(todoList)
  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {todoList}
        </tbody>
      </table>

    </div>
  )
}

export default Todos