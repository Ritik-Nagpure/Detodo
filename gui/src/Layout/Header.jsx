import { useState } from 'react';

const Header = () => {
  const [isloggedIn, setisloggedIn] = useState(false);

  const handleLogin = () => {
    setisloggedIn(!isloggedIn)
  }

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