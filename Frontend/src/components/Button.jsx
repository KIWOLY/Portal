import React from 'react'

const Button = (props) => {
  return (
    <>
       <a href="#" className={`px-6 py-3 text-white rounded  inline-block ${props.bg}`}> {props.text}</a>
    
    </>
  )
}

export default Button