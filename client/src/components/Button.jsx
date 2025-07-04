import React from 'react'
import LoadingSpinner from './LoadingSpinner';

const Button = ({children , type = "button" , onClick, disabled = false, loading= false, className = ""}) => {
  return (
    <button type={type} onClick={onClick} disabled = {disabled || loading}
    className={ ` text-black font-bold rounded-full flex justify-center items-center  md:text-lg  hover:scale-x-[1.03] transition duration-200 ease-linear
       disabled:opacity-50 disabled:cursor-not-allowed ${className}`} >

       {loading ? <LoadingSpinner color="border-black" size="w-6 h-6 md:w-9 md:h-9" />:children}
    </button>
  );
}

export default Button
