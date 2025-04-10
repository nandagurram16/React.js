import React, { useState } from 'react'
import './ToDo.css'
import Todo_list from './Todo_list.jsx'

const ToDo = () => {
    const [task,settask] = useState('')

    const changehandler = e =>{
        settask(e.target.value)
    }

    const submit = e =>{
        e.preventDefault()
        const newtodos = [...todos,task]
        settodos(newtodos)
        settask('')
    }

    const [todos,settodos] = useState([])

    const deletehandler = (indexvalue) =>{
        const newtodos = todos.filter((todo,index) => index !== indexvalue);
        settodos(newtodos)
    }

  return (
    <div className='card'>
      <div className='card-body'></div>
      <h5 className='card-title'>ToDo Application Management</h5>
      <form onSubmit={submit}>
        <input size='30' type='text' name='task' value={task} onChange={changehandler}/> &nbsp;
        <input type='submit' value='Add' name='Add'/>
      </form>
      <Todo_list todolist={todos} onDelete = {deletehandler}/>
    </div>
  )
}

export default ToDo
