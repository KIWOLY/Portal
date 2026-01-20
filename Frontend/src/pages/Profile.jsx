import React, { useEffect } from 'react'
import axios from "axios"
import axiosInstance from '../axiosinstance'

const Profile = () => {
  const accessToken =localStorage.getItem("accessToken")
  console.log(accessToken);

  useEffect(() => {
    const fetch = async () => {
      try {

        const response = await axiosInstance.get('profile/' ,   { headers :{
            Authorization :`Bearer ${accessToken}`
          }}
        )
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