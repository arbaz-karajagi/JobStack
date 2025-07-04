import React from 'react'

const Input = ({label, type="", icon:Icon ,className = "",error, ...props}) => {
  return (
    <div className='border border-gray-400 rounded-full flex items-center px-2 py-1  w-full'>
        <input
        type={type}
        placeholder = {label}
        className={` w-full outline-none bg-transparent px-2 text-sm md:text-lg  ${className}`}
        {...props}
        />
        {Icon && <Icon className='px-2.5 md:px-2' color="#ffffff" size={35} />} 
        {error && <p className='text-red-500 text-sm'>{error}</p> }
    </div>
  )
 }

export default Input
