import React from 'react'
import { Pencil, Trash2, Download } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';


const JobDetailsPage = () => {
  const { id } = useParams();

  return (
    <>
      <div className='bg   bg-black min-h-[100dvh] text-white p-3 flex justify-center  '>
        <div className="jobDetail   mx-auto md:max-w-[80dvw] h-fit border-2 border-gray-600 rounded-2xl
         px-3 py-2 shadow-md shadow-gray-500">
          <h1 className='font-bold text-3xl px-2 py-3 '>Software Engineer {id}</h1>
          <div className='border border-gray-600 rounded-2xl px-5 my-2  py-2'>
            <div className='flex justify-between  items-center lg:gap-5 flex-wrap
         '>
              <div className="company flex flex-col gap-1 my-4">
                <span className='font-bold'>Company</span>
                <span>Tech Solutions inc</span>
              </div>
              <div className="location flex flex-col gap-1 my-4">
                <span className='font-bold'>Location</span>
                <span>New York, NY</span>
              </div>
              <div className="empType flex flex-col gap-1 my-4">
                <span className='font-bold'>Employement Type</span>
                <span>Full-Time</span>
              </div>
              <div className="dateApplied flex flex-col gap-1 my-4">
                <span className='font-bold'>Date Applied</span>
                <span>March 1,2025</span>
              </div>
              <div className="status flex flex-col gap-1 my-4">
                <span className='font-bold'>Status</span>
                <span>Interview</span>
              </div>

            </div>
            <div className="description flex flex-col gap-1 my-4 ">
              <span className='font-bold'>Descripton</span>
              <p>Responsibilities include developing, testing, and maintaining software applications. Collaborate with cross-functional teams to design and implement new features.</p>
            </div>

            <div className="downloadResume flex  flex-wrap items-center justify-center gap-3  md:gap-5 w-full   py-3 ">
              <Button className='      bg-white   flex justify-center items-center  text-md      px-7   md:px-7 p-1 md:p-0  '> <Download className='px-2 ' color="#000000" size={35} />Download Resume</Button>
              <Button className="cancel bg-white  flex justify-center  items-center  text-md      px-4  md:px-5 p-1 md:p-0 "><span><Pencil className='px-2 ' color="#000000" size={35} /></span>Edit</Button>
              <Button className="save bg-white   flex  justify-center items-center  text-md        px-4 md:px-6 p-1 md:p-0 "><span><Trash2 className='px-2 ' color="#000000" size={35} /></span>Delete</Button>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default JobDetailsPage
