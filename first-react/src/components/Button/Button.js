import React from 'react'
import classes from './button.module.css';
const Button = ({ children, handleShow }) => {
  return (
    <button onClick={() => handleShow()} className={classes.addButton}>{children}</button>
  )
}

export default Button


// rafce