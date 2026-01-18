import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className='flex item-center justify-between pt-5 pb-6   '>
                <Link to="/" className='text-3xl font-bold ps-20'> Portal</Link>
                <div className='flex px-10 gap-2'>
                    <Button text="Login"  bg="bg-darkgray2" to="/login"/>
                    <Button text="Sign Up"  bg="bg-darkgray2" to="/register" />
                </div>


            </nav>
        </div>
    )
}

export default Header