import React from 'react'
import { useForm } from "react-hook-form"
import Input from '../components/Input'
import Button from '../components/Button'


const AddJobPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting }, } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className='bg  bg-black min-h-[100dvh]   flex justify-center  p-3'>

        <div className='addJob h-fit w-full border-2 border-gray-600  md:w-1/2  rounded-2xl p-3 text-white  shadow-md shadow-gray-500' >
          <h1 className='text-center text-2xl md:text-3xl font-bold pt-2'>Add Job</h1>

          <div className='p-2 '>
            <div className='py-2  '>
              <label htmlFor="companyname">Company Name</label>
              <Input className='py-2 md:py-0'  type='text'
                error={errors.companyname?.message}
                {...register("companyname", { required: { value: true } })} />
            </div>

            {/* <div className='py-2  '>
              <label htmlFor="position">Position</label>
              <Input className='py-2 md:py-0' type='text'
                error={errors.position?.message}
                {...register("position", { required: { value: true } })} />

            </div> */}

            <div className='py-2'>
              <label htmlFor="location">Location</label>
              <Input className='py-2 md:py-0' type='text'
                error={errors.location?.message}
                {...register("location", { required: { value: true } })} />
            </div>

            <div className='py-2 flex flex-col'>
              <label htmlFor="date">Date Applied</label>
              <input className='  w-full outline-none bg-transparent border border-gray-400  px-2 py-3 md:py-1 bg-gray-800 rounded-full  cursor-pointer text-sm md:text-lg' type="date" name="date" id="date" />
            </div>

            <div className='py-2 flex flex-col '>
              <label htmlFor="status">Application Status </label>
              <select className=' w-full outline-none bg-transparent border border-gray-400  px-2 py-3 md:py-2 bg-gray-800 rounded-full  cursor-pointer text-sm md:text-lg' name="" id="status">
                <option className='bg-gray-800 text-white  ' value="">All</option>
                <option className='bg-gray-800 text-white ' value="applied">Applied</option>
                <option className='bg-gray-800 text-white ' value="interview">Interview</option>
                <option className='bg-gray-800 text-white ' value="interview">Rejected</option>
                <option className='bg-gray-800 text-white ' value="offer">Offer</option>
              </select>
            </div>

            <div className='py-2 flex flex-col '>
              <label htmlFor="status">Employement Type</label>
              <select className=' w-full outline-none bg-transparent border border-gray-400  px-2 py-3 md:py-2 bg-gray-800 rounded-full  cursor-pointer text-sm md:text-lg' name="" id="status">
                <option className='bg-gray-800 text-white ' value="applied">Full-Time</option>
                <option className='bg-gray-800 text-white ' value="applied">Part-Time</option>
              </select>
            </div>


            <div className='py-2 flex flex-col'>
              <span>Notes</span>
              <textarea className='bg-gray-800 rounded-lg outline-none p-2' rows={2} cols={1} name="" id="textarea"></textarea>

            </div>
          </div>


          <div className="btn text-center p-2 flex justify-center">
            <Button  type='submit' loading={isSubmitting } className='bg-white px-10 p-2  md:p-1 md:px-10 w-fit text-center ' >Submit</Button>
          </div>
        </div>

      </div>
    </>
  )
}

export default AddJobPage
