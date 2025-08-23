import { useState } from "react"


const Profile = () => {
  const [signState, setSignState] = useState(false);

  const handleSignState = () => {
    setSignState(!signState);
  }


  return (
    <>
      <div className="bg-gray-700 sm:h-screen w-screen m-1 p-1">
        <div className="">
        </div>
        <div className="flex flex-col items-center justify-center h-fit">
          <span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Profile