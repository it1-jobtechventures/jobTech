import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from  'axios'
import { toast } from 'react-toastify'

const Contact = () => {
    const [data , setData] = useState([])

    const fetchAllData= async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/form/')
            console.log(response.data)
            if (response.data) {
                setData(response.data)
                toast.success('data fetch success')
            } else {
                toast.error("error ")
            }
        } catch (error) {
            toast.error(error.message)
        }

    }

    useEffect(() => {
        fetchAllData()
    },[])
  return (
    <div className="overflow-x-auto py-6">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                    {/* <th className="p-2 border border-gray-300 text-left">ID</th> */}
                    <th className="p-2 border border-gray-300 text-left">Type</th>
                    <th className="p-2 border border-gray-300 text-left">Name</th>
                    <th className="p-2 border border-gray-300 text-left">Email</th>
                    <th className="p-2 border border-gray-300 text-left">Message</th>
                    <th className="p-2 border border-gray-300 text-left">Phone No.</th>
                    <th className="p-2 border border-gray-300 text-left">Company Name</th>
                    <th className="p-2 border border-gray-300 text-left">Company Publish Date</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item._id} className="even:bg-gray-50">
                        {/* <td className="p-2 border border-gray-300 break-words">{item._id}</td> */}
                        <td className="p-2 border border-gray-300 break-words">{item.type}</td>
                        <td className="p-2 border border-gray-300 break-words">{item.name}</td>
                        <td className="p-2 border border-gray-300 break-words">{item.email}</td>
                        <td className="p-2 border border-gray-300 break-words">{item.message}</td>
                        <td className="p-2 border border-gray-300 break-words">{item.phone}</td>
                        <td className="p-2 border border-gray-300 break-words">{item.companyName}</td>
                        <td className="p-2 border border-gray-300 break-words">{new Date(item.companyPublishDate).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Contact