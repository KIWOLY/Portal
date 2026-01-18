import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
    return (
        <> 
        
            <div className='text-center p-5  bg-darkgray2 mx-72  my-10 rounded-xl  '>
               
                 <h1  className='text-4xl font-bold'> Stock Prediction App</h1>
                <p className='px-20 mb-4 pt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    . Quasi veniam totam eius minima magni, numquam provident ut exercitationem vel
                    saepe officia, laborum dolor eaque tempora praesentium t
                    emporibus odio in accusantium?</p>
              <Button text="login" bg="bg-darkgray" to="/login"/>
              
            </div>
           

        </>
    )
}

export default Main