

const Newtodo = () => {
  return (
    <div className="flex flex-row justify-center mt-4">
      <div className="flex flex-col items-center justify-center h-fit w-fit bg-gray-300 m-2 p-2 rounded-2xl">

        <span className="text-lg font-bold text-blue-500">
          Add New Task
        </span>
        <div>
          <input
            type="text"
            placeholder="Enter Task Name"
            className="m-1 p-2 rounded-full w-80 text-lg text-white bg-gray-400 text-center"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Task Status"
            className="m-1 p-2 rounded-full w-80 text-lg text-white bg-gray-400 text-center"
          />
        </div>
        <div className="flex flex-row justify-between">
          <button className="m-1 p-2 rounded-full text-lg font-bold text-white bg-green-500">
            SUBMIT
          </button>
          <button className="m-1 p-2 rounded-full text-lg font-bold text-white bg-red-500">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newtodo