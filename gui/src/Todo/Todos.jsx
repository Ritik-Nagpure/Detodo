import { todos, todos_fixed } from "./Gettodo"
import { useEffect } from "react";

const Todos = () => {

  useEffect(() => {
    cruptodo();
  }, []);

  const cruptodo = async () => {
    let todoslist = await todos();
    const todoList = todoslist.map(todo => (
      `<tr key=${todo.id}>
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>${todo.completed ? "Completed" : "Not Completed"}</td>
      </tr>`
    )).join('');
    document.getElementById('tbody').innerHTML = todoList;
  }

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
        <tbody id='tbody'></tbody>
      </table>

    </div>
  )
}

export default Todos