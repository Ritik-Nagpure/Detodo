import { useState, useEffect } from 'react';

const Header = () => {
  const [isloggedIn, setisloggedIn] = useState(false);

  const handleLogin = () => {
    setisloggedIn(!isloggedIn)
  }


  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("Header Component mounted or updated");
  });

  // componentDidMount only
  useEffect(() => {
    console.log("Header Component mounted");
  }, [isloggedIn]);

  const navEntry = performance.getEntriesByType("navigation")[0];
  // componentWillUnmount
  useEffect(() => {
    if (navEntry.type === "reload" || navEntry.type === "back_forward") {
      return () => {
        alert("Header Component will unmount");
      };
    }
  }, []);

  return (
    <div className="flex flex-row p-2 justify-between items-center ">
      <div className="">

      </div>
      <div className="text-5xl font-bold text-blue-200">
        Detodo
      </div>
      <div className="">
        <button className='bg-gray-600 rounded-xl p-2' onClick={handleLogin}>
          {isloggedIn ? "Profile" : "Login"}
        </button>
      </div>
    </div>
  )
}

export default Header