import React from 'react'

const StatusBadge = ({status}) => {
    const base = "border border-gray-600 w-fit px-3 rounded-full  text-sm md:text-md"
    const statusStyles = {
        applied : "bg-blue-200 text-blue-800",
        rejected : "bg-red-200 text-red-800",
        offer : "bg-green-200 text-green-800",
        interview : "bg-orange-200 text-orange-800",
    } 
  return (
                    <span className={`${base} ${statusStyles[status]} `}>{status}</span>
  )
}

export default StatusBadge
