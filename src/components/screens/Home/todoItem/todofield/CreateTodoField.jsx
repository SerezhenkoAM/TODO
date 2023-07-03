import React from 'react'
import { useState } from 'react'
const CreateTodoField = ({ addTodo }) => {

  const [title, setTitle] = useState('')

  return (
    <div className='  rounded-2xl p-2 mb-4 '>
      <input className='rounded-2xl bg-gray-600 p-2 pl-5' type="text" onChange={(event) => {
        setTitle(event.target.value)
      }} value={title} onKeyDown={(e) => {
        if (e.key === 'Enter') {
          addTodo(title)
          setTitle('')
        }
      }} placeholder='Enter todo' />
    </div>
  )
}

export default CreateTodoField