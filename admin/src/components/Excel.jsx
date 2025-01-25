import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';

const Excel = ({url}) => {
    const [excel, setExcel] = useState(null);
    const [data, setData] = useState([]);
    const [modalData, setModalData] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    // Handle file selection
    const handleFileChange = (event) => {
        setExcel(event.target.files[0]);
    };

    // Handle file upload
    const handleExcelUpload = async () => {
        if (!excel) {
            toast.error('Please select a file to upload.');
            return;
        }
        const formData = new FormData();
        formData.append('file', excel);
        try {
            const response = await axios.post(`${url}/api/excel/upload`, formData, {headers: { 'Content-Type': 'multipart/form-data', },});
            if (response.data) {
                toast.success('File uploaded successfully!');
                setExcel(null);
                displayExcel();
            }
        } catch (error) {
            if (error.response?.status === 400 && error.response.data?.message.includes('File size')) {
                toast.error('File size exceeds the 10 MB limit (from server).');
            } else {
            toast.error('Error uploading file.');
            }
            toast.error('Error uploading file.');
            console.error(error);
        }
    }
    

    // Fetch PDF list and apply LIFO (reverse order)
    const displayExcel = async () => {
        try {
            const res = await axios.get(`${url}/api/excel/files`);
                // Reverse the array to apply LIFO order
            setData(res.data.data.reverse());
        } catch (error) {
            console.error('Error fetching PDF list:', error);
        }
    };

      // Handle file deletion
    const handleFileDelete = async (excelId) => {
        try {
            await axios.delete(`${url}/api/excel/${excelId}`);
            toast.success('File deleted successfully!');
            displayExcel() // Refresh the file list
        } catch (error) {
            toast.error('Error deleting file.');
            console.error(error);
        }
    };

    const openExcelModal = async (fileUrl) => {
        try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const excelData = XLSX.utils.sheet_to_json(worksheet);
            setModalData(excelData);
            setModalOpen(true);
        } catch (error) {
            console.error('Error reading Excel file:', error);
        }
    };

    useEffect(() => {
        displayExcel()
    },[])

  return (
    <div className=' shadow-2xl p-8'>
        <div className="file-upload mb-4">
            <h1 className="text-2xl font-bold">Excel Upload</h1>
            <input type="file" onChange={handleFileChange} className="mt-2 p-2 border border-gray-300 rounded-md"/>
            <button onClick={handleExcelUpload} className="mt-2 ml-2 bg-blue-500 text-white p-2 rounded-md">
                Upload
            </button>
        </div>
        <div>
        <h2 className="text-xl font-bold mb-4">Uploaded Files</h2>
        <ul>
            {data.map((file) => (
                <li key={file._id} className="mb-2 flex items-center justify-between">
                    <span>{file.name}</span>
                    <div>
                        <button onClick={() => openExcelModal(file.url)} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                            View
                        </button>
                        <button onClick={() => handleFileDelete(file._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
        {/* Modal for Excel Data */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg w-3/4 max-h-[80%] overflow-auto">
                    <h2 className="text-lg font-bold mb-4">Excel Data</h2>
                    <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded">
                        Close
                    </button>
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                {modalData.length > 0 &&Object.keys(modalData[0]).map((header) => (
                                    <th key={header} className="p-2 border border-gray-300 text-left">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {modalData.map((row, index) => (
                                <tr key={index} className="even:bg-gray-50">
                                    {Object.values(row).map((value, i) => (
                                        <td key={i} className="p-2 border border-gray-300">
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
    </div>
  )
}

export default Excel