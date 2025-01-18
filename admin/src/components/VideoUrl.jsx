import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {toast} from 'react-toastify'

const VideoUrl = ({url}) => {
    const [data , setData ] = useState([])
    const [link , setLink] = useState('')

    const addUrl = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${url}/api/videoUrl/add`,{link})
            console.log(response.data)
            if (response.data.success) {
                toast.success("added ")
                fetchAllData()
                setLink('')
            } else {
                toast.error("not added")
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const fetchAllData = async() => {
        try {
            const res = await axios.get(`${url}/api/videoUrl/all`)
            if (res.data.success) {
                setData(res.data.data)
                toast.success("data fetch ")
            } else {
                toast.error("error ")
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const removeUrl = async(urlId) => {
        try {
            const response = await axios.post(`${url}/api/videoUrl/remove` , {id:urlId})
            await fetchAllData()
            if (response.data.success) {
                toast.success("url removed")
            } else {
                toast.error("error")
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchAllData()
    },[])



  return (
    <>
        <div className='shadow-2xl m-6 p-10'>
            <form onSubmit={addUrl} className='flex border rounded-md justify-between p-2 items-center'>
                <div className="mb-6">
                    <label htmlFor='link' className="block text-gray-700 text-sm font-medium mb-2">Enter Url</label>
                    <input type='text' value={link} onChange={(e) => setLink(e.target.value)} placeholder='Enter your' className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <button type='submit' className='bg-blue-700 p-2 rounded-md h-10 w-20 text-white'>Add</button>
            </form>
        </div>
        <main className="overflow-x-auto py-6">
            <table  className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border border-gray-300 text-left">URL</th>
                        <th className="p-2 border border-gray-300 text-left">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item._id} className="even:bg-gray-50">
                                <td className="p-2 border border-gray-300 break-words">{item.link}</td>
                                <td onClick={() => removeUrl(item._id)} className="p-2 border border-gray-300 break-words cursor-pointer hover:text-red-700">Remove</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    </>
  )
}

export default VideoUrl