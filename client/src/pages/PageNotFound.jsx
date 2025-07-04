import React from 'react'
import {NavLink} from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <div className='bg  bg-black min-h-[100dvh] text-white flex  justify-center    p-3' >
        <div className="notFound flex flex-col justify-center items-center font-bold  text-xl md:text-3xl rounded-2xl w-full md:w-2/3 max-h-[80dvh] border-2 border-gray-600 p-5 shadow-md shadow-gray-500">
          <div>
            <img className='size-52' src="/images/no-page-to-show.svg" alt="" />
          </div>
          Oops! Page Not Found

          <div className="btn text-center p-5">
            
             <NavLink to="/"><button className=' flex justify-center items-center bg-gray-800 border border-gray-600  rounded-lg w-full p-2 font-bold text-lg 
             hover:scale-x-[1.03] transition duration-200 ease-linear'>Go to Home</button></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
