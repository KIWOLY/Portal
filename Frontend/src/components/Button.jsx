import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <>
       <Link to={props.to} className={`px-6 py-3 text-white rounded  inline-block ${props.bg}`}> {props.text}</Link>
    
    </>
  )
}

export default Button