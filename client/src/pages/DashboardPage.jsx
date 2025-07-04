import React from 'react'
import { useForm } from "react-hook-form"
import { Plus, Search } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import JobCard from '../components/JobCard';
import LoadingSpinner from '../components/LoadingSpinner';

const DashboardPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting }, } = useForm()

  const onSubmit = (data) => console.log(data)

  const jobList = [
                      { id: 1, title: "Software Engineer", company: "Tech Solu", status: "applied", date: "Mar 8" },
                      { id: 2, title: "Software Developer", company: "Limited Collab", status: "offer", date: "Apr 19" },
                      { id: 3, title: "Software Tester", company: "Excel corp", status: "applied", date: "Mar 5" },
                      { id: 4, title: "Web Developer", company: "ins Solu", status: "rejected", date: "June 15" },
                      { id: 5, title: "AIML Engineer", company: "Tech corp", status: "applied", date: "Mar 3" },
                      { id: 1, title: "Software Engineer", company: "Tech Corp", status: "interview", date: "Mar 5" },
                      { id: 2, title: "Frontend Developer", company: "DesignHub", status: "applied", date: "Mar 7" },
                      { id: 3, title: "Backend Developer", company: "CloudWave", status: "offer", date: "Mar 8" },
                      { id: 4, title: "Full Stack Developer", company: "InnovateX", status: "rejected", date: "Mar 3" },
                      { id: 5, title: "UI/UX Designer", company: "PixelSoft", status: "interview", date: "Mar 9" },
                      { id: 6, title: "DevOps Engineer", company: "OpsNow", status: "applied", date: "Mar 2" },
                      { id: 7, title: "Mobile App Developer", company: "AppGenie", status: "rejected", date: "Mar 10" },
                      { id: 8, title: "QA Engineer", company: "Testify", status: "interview", date: "Mar 4" },
                      { id: 9, title: "Data Scientist", company: "DataWiz", status: "offer", date: "Mar 1" },
                      { id: 10, title: "AI Engineer", company: "NeuroTech", status: "applied", date: "Mar 6" },
                      { id: 11, title: "Web Developer", company: "CodeCraft", status: "interview", date: "Mar 11" },
                      { id: 12, title: "SDE I", company: "ByteLogic", status: "rejected", date: "Mar 12" },
                      { id: 13, title: "Cloud Architect", company: "SkyNet", status: "offer", date: "Mar 13" },
                      { id: 14, title: "Product Manager", company: "FlowWork", status: "applied", date: "Mar 14" },
                      { id: 15, title: "ML Engineer", company: "VisionAI", status: "interview", date: "Mar 15" }
           ]




  return (
    <>
      <div className='bg   bg-black min-h-[100dvh] flex  justify-center  font-sans p-3  '>
        <div className="dashboard  md:min-w-[80dvw] h-fit  border-2 border-gray-600
        rounded-xl text-white mx-auto my-5 py-3 px-3 md:px-5 lg:px-10 shadow-md shadow-gray-500">
          <div className='flex justify-between md:px-5 items-center py-2  ' >
            <h1 className='text-2xl md:text-3xl font-bold lg:w-full text-center px-2 '>Dashboard</h1> 
            {/* <Button type='submit' loading={isSubmitting} className='bg-white  lg:hidden flex items-center  p-1 px-4 
             h-[100%] text-md '><span><Plus className='px-1 ' color="#000000" size={30} /></span>Add New
            </Button> */}
          </div>
          <div className=" my-2 flex justify-center lg:w-full md:w-fit md:mx-auto  lg:px-5  ">

            {/* <Button type='submit' loading={isSubmitting} className='bg-white hidden lg:flex   items-center  p-1 px-5 h-[100%] 
             '><span><Plus className='px-1' color="#000000" size={35} /></span> Add New</Button> */}

            <div className="aboutJobs text-sm  flex   flex-wrap lg:flex-nowrap gap-4 md:gap-10 lg:px-5 py-2 ">
              <div className='flex justify-between items-center px-3 md:px-4 py-1 font-bold gap-2 border border-gray-600 rounded-full '>
                <span>ALL Applications</span>
                <span>16</span>
              </div>

              <div className='flex justify-between items-center px-3 md:px-4 py-1 font-bold gap-2 border border-gray-600 rounded-full text-orange-800 bg-orange-200'>
                <span>Interviews</span>
                <span>3</span>
              </div>

              <div className='flex justify-between items-center px-3 md:px-4 py-1 font-bold gap-2 border border-gray-600 rounded-full  text-green-800 bg-green-200'>
                <span>Offers</span>
                <span>5</span>
              </div>

              <div className='flex justify-between items-center px-3 md:px-4 py-1 font-bold gap-2 border border-gray-600 rounded-full  text-red-800 bg-red-200'>
                <span>rejected</span>
                <span>5</span>
              </div>
            </div>
          </div>

          <div className='search  flex gap-2 items-center  mb-2'>
            <Input label='Search by company,title' type='text' icon={Search} className=''
              error={errors.search?.message}
              {...register("password", { required: { value: true } })} />
          </div>

          <div className='flex items-ceter md:gap-2 lg:gap-4 flex-col md:flex-row '>
            <div className="filters text-sm md:text-lg flex md:flex-col border   border-gray-700 rounded-lg h-fit 
            lg:w-1/4 md:w-1/3 p-2 md:p-4 gap-6 justify-center mb-2 ">

              {/* <h3 className='text-xl text-center font-bold pb-2  '>Filters</h3> */}

              <div className='my-1 flex flex-col'>
                <label className='px-1' htmlFor="status">Status</label>
                <select className=' w-full  bg-transparent outline-none border  border-gray-600 rounded-full cursor-pointer p-1 my-1' name="" id="status">
                  <option className='bg-gray-800 text-black ' value="">All</option>
                  <option className='bg-gray-800 text-white ' value="applied">Applied</option>
                  <option className='bg-gray-800 text-white ' value="interview">Interview</option>
                  <option className='bg-gray-800 text-white ' value="interview">Rejected</option>
                  <option className='bg-gray-800 text-white ' value="Offer">Offer</option>
                </select>
              </div>

              <div className='my-1 flex flex-col'>
                <label className='px-1' htmlFor="status">Company</label>
                <select className=' w-full  bg-transparent border outline-none border-gray-600 rounded-full cursor-pointer p-1 my-1' name="" id="status">
                  <option className='bg-gray-800 text-black ' value="">All</option>
                  <option className='bg-gray-800 text-white ' value="applied">Applied</option>
                  <option className='bg-gray-800 text-white ' value="interview">Interview</option>
                  <option className='bg-gray-800 text-white ' value="interview">Rejected</option>
                  <option className='bg-gray-800 text-white ' value="Offer">Offer</option>
                </select>
              </div>

              <div className='my-1 flex flex-col'>
                <label className='px-1' htmlFor="status">Latest</label>
                <select className='w-full   bg-transparent border outline-none border-gray-600 rounded-full cursor-pointer p-1 my-1' name="" id="status">
                  <option className='bg-transparent text-black ' value="">Latest</option>
                  <option className='bg-gray-800 text-white ' value="applied">Oldest</option>
                </select>
              </div>
                          </div>



            <div className="jobList  border border-gray-700 rounded-lg lg:w-3/4 md:w-2/3 p-1   ">
              <h3 className='text:sm md:text-xl   text-center font-bold py-2 sticky top-0 bg-black z-40' > JobList</h3>
              <div className=' p-1 md:p-2 pt-0  text-sm md:text-lg  max-h-[51dvh] md:max-h-[52.5dvh]  lg:max-h-[62.5dvh] overflow-y-scroll   scroll-thin-dark'>
                {jobList.map((job) => {
                  return <JobCard key={job.id} job={job} />
                })}
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </>
  )
}

export default DashboardPage
