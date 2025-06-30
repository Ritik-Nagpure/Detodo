import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate()
  const load_app = (applink) => {
    nav(applink)
  }
  const [isloggedIn, setisloggedIn] = useState(false);

  const handleSignout = () => {
    setisloggedIn(false);
  }

  const handleLogin = () => {
    if (isloggedIn) {
      load_app('/profile');
    } else {
      load_app('/login');
      // setisloggedIn(true);
    }
    
  }

  return (
    <div className="flex flex-row p-2 justify-between items-center ">
      <div className="">

      </div>
      <div className="text-5xl font-bold text-blue-200" onClick={() => load_app('/')}>
        Detodo
      </div>
      <div className="">
        <button className='bg-gray-600 rounded-xl p-2' onClick={handleLogin}>
          {isloggedIn ? "Profile" : "Sign in"}
        </button>

        {isloggedIn ? <button className='bg-gray-600  ml-2 rounded-xl p-2' onClick={handleSignout}>
          Sign out</button> : null}

      </div>
    </div>
  )
}

export default Header