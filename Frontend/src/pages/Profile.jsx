import React, { useEffect, useState } from 'react'
import axiosInstance from '../axiosinstance'

const Profile = () => {
  const [response, setResponse] = useState("")


  useEffect(() => {
    const fetchProfile = async () => {
      try {

        const response = await axiosInstance.get('profile/')
        setResponse(response.data)
        console.log(response.data);

      }
      catch (error) {
        console.log("Error fetch : ", error);


      }

    }
    fetchProfile();


  }, [])

  return (
    <div className='text-center text-2xl max-w-md mx-auto'>Profile : {response.message}</div>
  )
}

export default Profile