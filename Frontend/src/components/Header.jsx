import { useContext } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'




const Header = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
    const navigate =useNavigate();


    const handleLogout = () => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        setIsLoggedIn(false)
        navigate("/")

    }

    return (
        <div>
            <nav className='flex item-center justify-between pt-5 pb-6   '>
                <Link to="/" className='text-3xl font-bold ps-20'> Portal</Link>
                <div className='flex px-10 gap-2'>
                    {isLoggedIn ? (<button className='bg-red-900 py-3 px-6 rounded-xl' onClick={handleLogout}>Logout</button>) : <>
                        <Button text="Login" bg="bg-darkgray2" to="/login" />
                        <Button text="Sign Up" bg="bg-darkgray2" to="/register" />


                    </>}

                </div>


            </nav>
        </div>
    )
}

export default Header