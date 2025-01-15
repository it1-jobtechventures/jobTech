import axios from 'axios'
import React, { useEffect, useState } from 'react'

const JobRinger = () => {
    const [data , setData] = useState([])

    const fetchAllData = async() => {
        const response = await axios.get()
        console.log(response.data)
        if (response.data.success) {
            setData(response.data)
        } else {
            
        }
    }

    useEffect(() => {
        fetchAllData()
    },[])

  return (
    <div>JobRinger</div>
  )
}

export default JobRinger