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

        <div className=' w-fit h-fit m-2 flex flex-col items-center justify-center p-8'>
          <p className='text-xl'>Welcome !!</p>
          <p>Please Sign In or Sign Up to Continue</p>
        </div>

        <div className='bg-indigo-950 rounded-4xl w-fit h-fit m-2 flex flex-col items-center justify-center p-8'>
          <div className='flex flex-row items-center justify-center w-full'>
            <button
              className='bg-indigo-600 text-white px-4 py-2 rounded-4xl m-2'
              onClick={handleSignState}
            >&#xf135;
            </button>
            <p className='text-3xl font-bold m-4'>
              {signState ? "Sign Up" : "Sign In"}
            </p>
          </div>
          {signState ? signinPage() : signupPage()}

        </div>

      </>
    )
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center mt-6'>
        {displayBox()}
      </div>
    </>
  )
}

export default Login