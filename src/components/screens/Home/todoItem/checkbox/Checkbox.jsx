import React from 'react'
import { HiCheck } from "react-icons/hi2";
const Checkbox = ({isCompleted}) => {
  return (
    <div className={`border-2 rounded-lg border-pink-400 w-5 h-5 mr-4 flex items-center justify-center ju  ${isCompleted ? 'bg-pink-400' : ''}`}>
      {
      isCompleted &&
      <HiCheck size={24} className='text-gray-900' />
      }
    </div>
  ) 
}

export default Checkbox