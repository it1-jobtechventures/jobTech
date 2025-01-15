import axios from 'axios'
import React, { useEffect, useState } from 'react'
import JobRingerCard from './JobRingerCard'

const JobRinger = () => {
    const [data , setData] = useState([])

    const fetchAllData = async() => {
        const response = await axios.get()
        
        if (response.data.success) {
            setData(response.data)
        } else {
            
        }
    }

    useEffect(() => {
        fetchAllData()
    },[])

  return (
    <div id='section2'>
        <div className=' p-6 pt-24'>
            <JobRingerCard/>
        </div>
    </div>
  )
}

export default JobRinger