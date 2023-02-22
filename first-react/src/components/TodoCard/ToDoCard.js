import React from 'react'
import classes from './todocard.module.css'
import Button from '../Button/Button'
const ToDoCard = ({ todo, handleDone }) => {
  return (
    <div className={classes.wrapperCard}>
         <div className={todo.completed ? [ classes.todoCard, classes.done ] : classes.todoCard }>
        <h3>{todo.title}</h3>
    </div>
    <Button onClick={handleDone} id={todo.id}>Done</Button>
    <button>delete</button>
    </div>
  )
}

export default ToDoCard