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
    try {
      const response = await axios.post(`${url}/api/pdf/upload`, formData, {headers: { 'Content-Type': 'multipart/form-data', },});
      if (response.data) {
        toast.success('File uploaded successfully!');
        displayPdf();
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
    <div className=' shadow-2xl p-8'>
      <div className="file-upload mb-4">
        <h1 className="text-2xl font-bold">File Upload</h1>
        <input type="file" onChange={handleFileChange} className="mt-2 p-2 border border-gray-300 rounded-md"/>
        <button onClick={handleFileUpload} className="mt-2 ml-2 bg-blue-500 text-white p-2 rounded-md">
          Upload
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">List of PDFs</h2>
        <div className=' p-4 rounded-md'>
          {data.map((file) => (
            <div className='p-5' key={file._id}>
              <p>{file.name}</p>
              <button onClick={() => openModal(file)} className="text-blue-500 hover:text-blue-700">
                View
              </button>
              <button onClick={() => handleFileDelete(file._id)} className="ml-2 bg-red-500 text-white p-2 rounded-md">
                Remove
              </button>
              <hr className="my-4" />
            </div>
          ))}
        </div>
      </div>
      {/* Modal for PDF viewing */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="View PDF" className="fixed inset-0 bg-white p-4 w-11/12 md:w-2/3 mx-auto my-auto rounded-lg shadow-lg" overlayClassName="fixed inset-0 bg-black bg-opacity-50">
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