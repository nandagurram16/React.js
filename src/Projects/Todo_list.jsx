import React from 'react'

const Todo_list = ({todolist, onDelete}) => {
  return (
    <div>
      {todolist.map((todo,index)=>
        <div key={index}>
        <h5>{todo} &nbsp; <button onClick={() =>onDelete(index)}>Delete</button></h5>
        </div>
        )}
    </div>
  )
}

export default Todo_list
