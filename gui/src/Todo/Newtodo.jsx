const Newtodo = () => {

  const postTodo = (tname, tstatus) => {
    console.log(tname, tstatus);
    fetch('http://localhost:8000/todos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          taskName: tname,
          taskStatus: tstatus
        }),
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(data => {
        alert(data.message)
      })
      .catch(err => alert(err))
  }

  const addTodo = () => {
    const taskname = document.getElementById('taskname_val').value
    const taskstatus = document.getElementById('taskstatus_val').value
    postTodo(taskname, taskstatus)
  }

  return (
    <div className="flex flex-row justify-center mt-4">
      <div className="flex flex-col items-center justify-center h-fit w-fit bg-gray-300 m-2 p-2 rounded-2xl">

        <span className="text-lg font-bold text-blue-500">
          Add New Task
        </span>
        <div>
          <input
            id='taskname_val'
            type="text"
            placeholder="Enter Task Name"
            className="m-1 p-2 rounded-full w-80 text-lg text-white bg-gray-400 text-center"
          />
        </div>
        <div>
          <input
            id='taskstatus_val'
            type="text"
            placeholder="Enter Task Status"
            className="m-1 p-2 rounded-full w-80 text-lg text-white bg-gray-400 text-center"
          />
        </div>
        <div className="flex flex-row justify-between gap-x-10" >
          <button id='add-todo' onClick={() => { addTodo() }} className="m-1 px-4 py-1 rounded-full text-lg font-bold shadow-2xl shadow-green-900 transition-all duration-300 transform hover:scale-105 hover:bg-green-600 active:scale-90 ease-in-out text-white bg-green-500 cursor-pointer ">
            Submit
          </button>
          <button id='clear-add-todo' className="m-1 px-4 py-1 rounded-full text-lg font-bold shadow-2xl shadow-green-900 transition-all duration-300 transform hover:scale-105 hover:bg-red-600 active:scale-90 ease-in-out text-white bg-red-500 cursor-pointer ">
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newtodo