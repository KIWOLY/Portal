import React,{ useState }   from 'react'
import axios from "axios"


const Register = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRegistration = async (e) =>{
    e.preventDefault()

  

    const userData ={
      username :formData.username ,
      email :formData.email,
      password:formData.password
    }
    console.log("userdata =====>" , userData);

    try{
      const response= await axios.post('http://127.0.0.1:8000/api/v1/register/' , userData)
      console.log("response.data===>", response.data);
      console.log("succesfull");
    }
    catch(error){
      console.error("response error ====> " , error.response.data);
      
    }

  }


  return (
    <div className='text-center bg-darkgray2 mx-96  mt-16 p-8'>
      <h1 className='text-2xl font-bold'>Create an Account</h1>
      <form action="" onSubmit={handleRegistration}>
        <div className='flex justify-center  py-5'>

          <input className='w-full rounded-md p-3 mx-10' type="text" name='username' value={formData.username} placeholder='Enter your username' onChange={handleChange} />
        </div>
        <div className='flex justify-center py-5'>

          <input className='w-full rounded-md p-3 mx-10' type="email" name='email' value={formData.email} placeholder='Enter your email' onChange={handleChange} />
        </div>
        <div className='flex justify-center  py-5'>

          <input className='w-full rounded-md p-3 mx-10' type="password" name='password' value={formData.password} placeholder='enter your pasword' onChange={handleChange} />
        </div>
        <div>
          <button type='submit' className='bg-darkgray px-6  py-3 rounded-md' > Register</button>
        </div>



      </form>


    </div>
  )
}

export default Register