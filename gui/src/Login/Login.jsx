import { useState } from 'react';
const Login = () => {
  const [signState, setSignState] = useState(false);

  const handleSignState = () => {
    setSignState(!signState);
  }

  const signinPage = () => {
    return (
      <div >
        <form className='flex flex-col space-y-4'>
          <input className="rounded-2xl bg-gray-700 p-2" type="text" placeholder="Username" required />
          <input className="rounded-2xl bg-gray-700 p-2" type="password" placeholder="Password" required />
          <button className="text-xl font-bold rounded-2xl bg-indigo-700 p-1" type="submit">Submit</button>
        </form>
      </div>
    )
  }

  const signupPage = () => {
    return (
      <div>
        <form className='flex flex-col space-y-4'>
          <input className="rounded-2xl bg-gray-700 p-2" type="text" placeholder="Username" required />
          <input className="rounded-2xl bg-gray-700 p-2" type="password" placeholder="Password" required />
          <input className="rounded-2xl bg-gray-700 p-2" type="email" placeholder="Email@example.com" required />
          <button className="text-xl font-bold rounded-2xl bg-indigo-700 p-1" type="submit">Submit</button>
        </form>
      </div>
    )
  }

  const displayBox = () => {
    return (
      <>
        <div className='bg-gray-600 rounded-4xl w-fit h-fit m-2 flex flex-col items-center justify-center p-8'>
          <div className='flex flex-col items-center justify-center'>
            <button
              className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
              onClick={handleSignState}
            >
            </button>
            <p className='text-3xl font-bold mb-4'>
              {signState ? "Sign Up" : "Sign In"}
            </p>
          </div>
          {signState ? signinPage() : signupPage()}

        </div>

        <div className='bg-gray-600 rounded-4xl w-fit h-fit m-2 flex flex-col items-center justify-center p-8'>
          <p className='text-xl'>Welcome !!
            Please Sign In or Sign Up to Continue</p>
        </div>
      </>
    )
  }

  return (
    <>
      {displayBox()}
    </>
  )
}

export default Login