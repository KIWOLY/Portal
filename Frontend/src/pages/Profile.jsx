import React, { useEffect } from 'react'
import axios from "axios"
import axiosInstance from '../axiosinstance'

const Profile = () => {


  useEffect(() => {
    const fetch = async () => {
      try {

        const response = await axiosInstance.get('profile/' )
        console.log(response.data);

      }
      catch (error) {
        console.log("Error fetch : ", error);


      }

    }
    fetch();


  }, [])

  return (
    <div>Profile</div>
  )
}

export default Profile