import React from 'react'

const LoadingSpinner = ({color,size, className=""}) => {
  return (
    <div className= {`${color} ${size} flex justify-center items-center border-4 rounded-full  
   border-red-500 border-l-transparent border-r-transparent border-b-transparent animate-spin  ${className}`}>
     
    </div>
  )
}

export default LoadingSpinner
