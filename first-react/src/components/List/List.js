import React from 'react'
import ToDoCard from '../TodoCard/ToDoCard'

const List = ({ list, handleDone }) => {
  return (
    <>
    {list.map((todo) => <ToDoCard 
    key={todo.id} 
    todo={todo} 
    handleDone={handleDone}
    />)}
    </>
  )
}

export default List