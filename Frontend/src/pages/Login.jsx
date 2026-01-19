import React, { useState } from 'react'

const Login = () => {


  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlelogin = (e) => {
    e.preventDefault();

    const userData = {
      username: formData.username,
      password: formData.password

    }
    console.log("userdata ===> :", userData);
    setLoading(true)

    try { }
    catch { }

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