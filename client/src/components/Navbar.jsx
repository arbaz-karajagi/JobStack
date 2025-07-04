import React, { useState }  from 'react'
import { NavLink } from 'react-router-dom'
import { Menu , X } from 'lucide-react';


const Navbar = () => {

   const [isNavOpen, setIsNavOpen] = useState(false)

 
   const toggleNav = () => {
            setIsNavOpen(!isNavOpen);
        };

    return (
        <>
            <div className='bg-black py-2 sticky top-0 z-10'>
                <nav className='border-b-2 border-gray-600  w-[94dvw] md:w-[98dvw] mx-auto rounded-2xl  bg-black  md:flex  justify-around items-center px-1 py-1 md:px-4 lg:px-20 text-white  shadow-md shadow-gray-800  '>
                    <div className='flex  items-center justify-between'>
                        <div>
                            <div className="logo text-2xl md:text-3xl font-bold px-2 md:border-b-2  md:border-gray-600 rounded-full "> &lt;JobStack /&gt; </div>
                        </div>
                        <span className=' ham  md:hidden'>
                        <Menu onClick={toggleNav} className='px-2.5 md:px-2' color="#ffffff" size={45} /></span>
                    </div>

                    <ul className='  hidden md:flex md:items-center md:gap-2 lg:gap-4 text-md md:text- '>
                        {["Dashboard","AddJob","JobDetails"].map((item ,i)=> ( <NavLink key={i} className={(e) => e.isActive ? "blue" : ""} to={`/${item.toLowerCase()}` }>
                                <li className='hover:cursor-pointer md:hover:ring-2 ring-gray-600 px-2 rounded-lg'> {item}</li> </NavLink>))}

                      
                        <li className='hidden md:flex  items-center gap-2'>
                            <NavLink  to="/login"   className={(e) => e.isActive ? "blue" : "" }> <button className='font-bold  my-2 py-1 px-2 rounded-full bg-white text-black hover:cursor-pointer'>  Log in</button>   </NavLink>
                            <NavLink  to="/register" className={(e) => e.isActive ? "blue" : "" } ><button className='font-bold my-2 py-1 px-2 rounded-full bg-white text-black hover:cursor-pointer'>  Sign up</button>  </NavLink>
                        </li>
                    </ul>
                </nav>

    {/* Mobile Nav */}
                <ul  className= {` ${isNavOpen ? "  flex" : " hidden"} flex-col  md:hidden     text-md text-white border-b-2 border-gray-600  rounded-2xl
                   w-[94dvw] absolute top-2 right-[11px] z-50  p-2 pb-4 bg-black font-bold shadow-md shadow-gray-800  `}>

                    <li className="close flex justify-between  items-center">
                        <span className='text-2xl px-1 '>&lt;JobStack /&gt;</span>
                        <span><X onClick={toggleNav} className='px-2.5 md:px-2' color="#ffffff" size={45} /> </span>
                    </li>
                    {["Dashboard","AddJob","JobDetails"].map((item , i)=> (
                        <NavLink key={i} to={`/${item.toLowerCase()}`} className={(e) => e.isActive ? "blue" : ""} ><li className='hover:cursor-pointer   text-center md:hover:ring-2 ring-gray-600 px-2 py-1 rounded-lg' >{item} </li></NavLink>
                    ))}
                    </ul>
            </div>
        </> 
    )
}

export default Navbar



 