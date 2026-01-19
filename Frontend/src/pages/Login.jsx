import React, { useState } from 'react'
import axios from "axios"

const Login = () => {


  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlelogin = async (e) => {
    e.preventDefault();

    const userData = {
      username: formData.username,
      password: formData.password

    }
    console.log("userdata ===> :", userData);
    setLoading(true)

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      console.log(response.data);



    }
    catch(error) {
      console.log("invalid credentilas");
     }
    finally{
      setLoading(false)
    }

  }




  return (
    <>
      <div className='text-center bg-darkgray2 mx-96  mt-16 p-8'>
        <h1 className='text-2xl font-bold'>Login to our portal</h1>
        <form action="" onSubmit={handlelogin}>
          <div className='mx-28 py-3'>

            <input className='w-full rounded-md p-3 text-black ' type="text" name='username' value={formData.username} placeholder='Enter your username' onChange={handleChange} /><br />

          </div>
          <div className='mx-28 py-3'>

            <input className='w-full rounded-md p-3 text-black ' type="password" name='password' value={formData.password} placeholder='enter your pasword' onChange={handleChange} />

          </div>
          <div className='mt-3'>



            <button type='submit' className='bg-darkgray px-6  py-3 rounded-md' disabled={loading}> {loading ? "Logging in..." : "Login"}</button>
          </div>



        </form>


      </div>
    </>
  )
}

export default Login