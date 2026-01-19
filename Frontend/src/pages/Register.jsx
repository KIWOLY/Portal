import React, { useState } from 'react'
import axios from "axios"



const Register = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false) 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRegistration = async (e) => {
    e.preventDefault()


    setLoading(true)
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    }
    console.log("userdata =====>", userData);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
      console.log("response.data===>", response.data);
      console.log("succesfull");
    
      setErrorMessage({})
      setSuccess(true)
    }
    catch (error) {
      console.error("response error ====> ", error.response.data);
      setErrorMessage(error.response.data)
      setSuccess(false)

    }
    finally{
      setLoading(false)
    }

  }


  return (
    <>
    <div className='text-center bg-darkgray2 mx-96  mt-16 p-8'>
      <h1 className='text-2xl font-bold'>Create an Account</h1>
      <form action="" onSubmit={handleRegistration}>
        <div className='mx-28 py-3'>

          <input className='w-full rounded-md p-3 text-black ' type="text" name='username' value={formData.username} placeholder='Enter your username' onChange={handleChange} /><br />
          <small>{errorMessage.username && <div className='text-red-800 bg-darkgray text-lg'>{errorMessage.username}</div>}</small>
        </div>
        <div className='mx-28 py-3'>

          <input className='w-full rounded-md p-3 text-black' type="email" name='email' value={formData.email} placeholder='Enter your email' onChange={handleChange} />
          <small>{errorMessage.email && <div className='text-red-800 bg-darkgray  text-lg'>{errorMessage.email}</div>}</small>

        </div>
        <div className='mx-28 py-3'>

          <input className='w-full rounded-md p-3 text-black ' type="password" name='password' value={formData.password} placeholder='enter your pasword' onChange={handleChange} />
          <small>{errorMessage.password && <div className='text-red-800 bg-darkgray text-lg'>{errorMessage.password}</div>}</small>
        </div>
        <div className='mt-3'>
          <small>{success && <div className='text-green-800 text-xl'>"registration succesfull"</div>}</small>
        

          <button type='submit' className='bg-darkgray px-6  py-3 rounded-md' disabled={loading}> {loading ? "Registering..." : "Register"}</button>
        </div>



      </form>


    </div>
    </>
  )
}

export default Register