import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

// Set the modal app element for accessibility
Modal.setAppElement('#root');

const Pdf = ({url}) => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const [sequence, setSequence] = useState("");
  const [title ,setTitle] = useState("")

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      toast.error('Please select a file to upload.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('sequence', sequence)
    formData.append('title', title)

    try {
      const response = await axios.get(`${url}/api/pdf/files`);
      const existingPdf = response.data.data.find(pdf => pdf.sequence === parseInt(sequence));
      if (existingPdf) {
        toast.error("Sequence number already exists. Please choose another one.");
        setLoading(false);
        return;
      }
      const res = await axios.post(`${url}/api/pdf/upload`, formData, {headers: { 'Content-Type': 'multipart/form-data', },});
      if (res.data) {
        toast.success('File uploaded successfully!');
        displayPdf();
        setFile(null);
        setSequence('')
        setTitle('')
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
  };

  // Fetch PDF list and apply LIFO (reverse order)
  const displayPdf = async () => {
    try {
      const res = await axios.get(`${url}/api/pdf/files`);
      // Reverse the array to apply LIFO order
      setData(res.data.data.reverse());
    } catch (error) {
      console.error('Error fetching PDF list:', error);
    }
  };

  const updatePdfSequence = async (pdfId, newSequence, newTitle) => {
    if (!newSequence || !newTitle) {
      toast.warning("Sequence and Title are required.");
      return;
    }
    try {
      const response = await axios.put(`${url}/api/pdf/files/sequence/${pdfId}`,{sequence: parseInt(newSequence), title: newTitle,});
      // Update the local state after successful update
      setPdfs((prevPdfs) =>
        prevPdfs.map((pdf) => (pdf._id === pdfId ? response.data.data : pdf))
      );
      toast.success("Updated successfully!");
    } catch (error) {
      console.error("Error updating sequence:", error);
      toast.error(error.response?.data?.message || "Error updating sequence");
    } finally {

    }
  };

  // Handle file deletion
  const handleFileDelete = async (pdfId) => {
    try {
      await axios.delete(`${url}/api/pdf/files/${pdfId}`);
      toast.success('File deleted successfully!');
      displayPdf(); // Refresh the file list
    } catch (error) {
      toast.error('Error deleting file.');
      console.error(error);
    }
  };

  // Open the modal and set the selected PDF
  const openModal = (file) => {
    setSelectedPdf(file);
    setModalIsOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPdf(null);
  };

  useEffect(() => {
    displayPdf();
  }, []);

  return (
    <div className=' shadow-2xl p-8 mt-15'>
      <div className=" mb-4 mt-11">
        <h1 className="text-2xl font-bold">File Upload</h1>
        <div className='flex md:flex-row flex-col gap-5 mt-4'>
          <input type="file" onChange={handleFileChange} className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type='number' placeholder='sequence' value={sequence} onChange={(e) => setSequence(e.target.value)}className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type='text' placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)}className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <button onClick={handleFileUpload} className="mt-2 ml-2 bg-blue-500 text-white p-2 rounded-md">
            Upload
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">List of PDFs</h2>
        <div className='overflow-x-auto rounded-lg bg-white shadow-sm'>
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border px-4 py-2">PDF name</th>
                <th className="border px-4 py-2">Sequence</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">update</th>
                <th className="border px-4 py-2">View</th>
                <th className="border px-4 py-2">Remove</th>
              </tr>
            </thead>
          </table>
          <tbody>
            {data.map((file) => (
              <>
                <tr key={file._id} className="border-b">
                  <td className="px-4 py-2">{file.name}</td>
                  <td className="px-4 py-2"><input type='number' className="border p-2" value={file.sequence} onChange={(e) => {const newValue = parseInt(e.target.value); setData((prevData) =>prevData.map((p) => p._id === file._id) ? {...p, sequence:newValue}:p ) }}/></td>
                  <td className="px-4 py-2"><input type='text' className="border p-2" value={file.title} onChange={(e) => {const newTitle = (e.target.value); setData((prevData) =>prevData.map((p) => p._id === file._id) ? {...p, title:newTitle}:p ) }}/></td>
                  <td className="px-4 py-2"><button onClick={() => updatePdfSequence(file._id ,file.sequence ,file.title)} className="border p-2">update</button></td>
                  <td className="px-4 py-2"><button onClick={() => openModal(file)} >view </button></td>
                  <td className="px-4 py-2"><button onClick={() => handleFileDelete(file._id)} >remove </button></td>
                </tr>
              </>
            ))}
          </tbody>
        </div>
      </div>
      {/* Modal for PDF viewing */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="View PDF" className=" z-50 fixed inset-0 bg-white p-4 w-11/12 md:w-2/3 mx-auto my-auto rounded-lg shadow-lg" overlayClassName="fixed inset-0 bg-black bg-opacity-50">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-xl font-bold text-gray-700 hover:text-black">
            X
          </button>
        </div>
        <div className="modal-body">
          {selectedPdf && (
            <iframe src={selectedPdf.url} width="100%" height="600px" title="PDF Viewer" className="border-0"/>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Pdf;

// import React, {  useEffect,useState } from "react";
// import axios from "axios";

// const Pdf = () => {
//   const [file, setFile] = useState(null);
//   const [sequence, setSequence] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [pdfs, setPdfs] = useState([]);
// const [title ,setTitle] = useState("")

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) return alert("Please select a PDF file");
  
//     setLoading(true);
  
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("sequence", sequence);
//     formData.append("title", title)
//     try {
//       // Check if the sequence already exists in the database
//       const response = await axios.get("http://localhost:4000/api/pdf/files");
//       const existingPdf = response.data.data.find(pdf => pdf.sequence === parseInt(sequence));
  
      // if (existingPdf) {
      //   alert("Sequence number already exists. Please choose another one.");
      //   setLoading(false);
      //   return;
      // }
  
//       // Upload the file
//       await axios.post(" http://localhost:4000/api/pdf/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
  
//       alert("PDF uploaded successfully!");
//       setFile(null);
//       setSequence("");
//       setTitle(""); 
//     } catch (error) {
//       console.error("Error uploading PDF:", error);
//       alert("Error uploading PDF");
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   useEffect(() => {
//     const fetchPdfs = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/pdf/files");
//         console.log(response.data.data)
//         setPdfs(response.data.data);
//       } catch (error) {
//         console.error("Error fetching PDFs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfs();
//   }, []);


  
 
//   const updatePdfSequence = async (pdfId, newSequence, newTitle) => {
//     if (!newSequence || !newTitle) {
//       alert("Sequence and Title are required.");
//       return;
//     }
  
//     setLoading(true); // Start loading
  
//     try {
//       const response = await axios.put(
//         `http://localhost:4000/api/pdf/files/sequence/${pdfId}`,
//         {
//           sequence: parseInt(newSequence, 10), // Ensure it's a number
//           title: newTitle,
//         }
//       );
  
//       // ✅ Update the local state after successful update
//       setPdfs((prevPdfs) =>
//         prevPdfs.map((pdf) => (pdf._id === pdfId ? response.data.data : pdf))
//       );
  
//       alert("Updated successfully!"); // ✅ Success message
//     } catch (error) {
//       console.error("Error updating sequence:", error);
//       alert(error.response?.data?.message || "Error updating sequence");
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };
  

//   return (
//     <>
//         <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold">Upload PDF</h1>
//       <form onSubmit={handleSubmit} className="mt-4">
//         <div className="mb-4">
//           <label htmlFor="file" className="block text-lg">PDF File</label>
//           <input
//             type="file"
//             id="file"
//             onChange={handleFileChange}
//             className="mt-2 p-2 border border-gray-300"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="sequence" className="block text-lg">Sequence</label>
//           <input
//             type="number"
//             id="sequence"
//             value={sequence}
//             onChange={(e) => setSequence(e.target.value)}
//             className="mt-2 p-2 border border-gray-300"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-lg">Title</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="mt-2 p-2 border border-gray-300"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className={`bg-blue-500 text-white px-4 py-2 ${loading ? "cursor-not-allowed" : ""}`}
//           disabled={loading}
//         >
//           {loading ? "Uploading..." : "Upload PDF"}
//         </button>
//       </form>
//     </div>
//     <div>
//     <h2 className="mt-4 text-xl">Uploaded PDFs</h2>
//     <table className="min-w-full mt-4 border-collapse border border-gray-200">
//       <thead>
//         <tr>
//           <th className="border px-4 py-2">PDF Name</th>
//           <th className="border px-4 py-2">Sequence</th>
//           <th className="border px-4 py-2">Title</th>
//           <th className="border px-4 py-2">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//   {pdfs.map((pdf) => (
//     <tr key={pdf._id}>
//       <td className="border px-4 py-2">{pdf.name}</td>
      
    

// <td className="border px-4 py-2">
//   <input
//     type="number"
//     value={pdf.sequence}
//     onChange={(e) => {
//       const newValue = parseInt(e.target.value, 10);
//       setPdfs((prevPdfs) =>
//         prevPdfs.map((p) =>
//           p._id === pdf._id ? { ...p, sequence: newValue } : p
//         )
//       );
//     }}
//     className="border p-2"
//   />
// </td>
// <td className="border px-4 py-2">
//   <input
//     type="text"
//     value={pdf.title}
//     onChange={(e) => {
//       const newTitle = e.target.value;
//       setPdfs((prevPdfs) =>
//         prevPdfs.map((p) =>
//           p._id === pdf._id ? { ...p, title: newTitle } : p
//         )
//       );
//     }}
//     className="border p-2"
//   />
// </td>


//       <td className="border px-4 py-2">
//   <button
//     className={`bg-blue-500 text-white px-4 py-2 ${loading ? "cursor-not-allowed" : ""}`}
//     onClick={() => updatePdfSequence(pdf._id, pdf.sequence, pdf.title)}
//     disabled={loading} // Disable when loading
//   >
//     {loading ? "Updating..." : "Update"}
//   </button>
// </td>

//     </tr>
//   ))}
// </tbody>

//     </table>
//   </div>
//     </>

//   )
// }

// export default Pdf