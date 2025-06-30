import { useState } from "react"


const Profile = () => {
  const [signState, setSignState] = useState(false);

  const handleSignState = () => {
    setSignState(!signState);
  }


  return (
    <>
      Profile
    </>
  )
}

export default Profile