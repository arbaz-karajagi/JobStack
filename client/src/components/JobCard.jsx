import React from 'react'
import { Eye } from "lucide-react"
import StatusBadge from './StatusBadge'

const JobCard = ({ job }) => {
    return (
        <div className=' flex justify-between border border-gray-600 rounded-lg p-1 px-2 my-2'>
            <div className='jobCompany flex flex-col' >
                <span className=' font-semibold'>{job.title}</span>
                <span className='text-sm px-2'>{job.company}</span>
            </div>
            <div className='statusTime flex flex-col items-end gap-2 p-1'>
                <StatusBadge status={job.status} />
                <span className='text-sm'>Applied on {job.date}</span>
            </div>
        </div>

    )
}

export default JobCard
