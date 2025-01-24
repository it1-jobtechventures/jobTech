import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

// Set the modal app element for accessibility
Modal.setAppElement('#root');

const PdfShow = ({url}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    displayPdf();
  }, []);

  // Open the modal and set the selected PDF
  const openModal = () => {
    if (data.length > 0) {
      setSelectedPdf(data[0]); // Set the first file (latest) as the selected PDF
      setModalIsOpen(true); // Open the modal
    }
  };

  // Close the modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPdf(null); // Clear the selected PDF
  };

  return (
    <>
      {/* Button to open the modal */}
      <div className="space-y-6">
        <div className="cursor-pointer shadow-lg flex items-center gap-4 p-6 rounded-lg bg-white hover:shadow-xl transition duration-300" onClick={openModal}>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3678f4] text-white text-xl">
            📄
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#3678f4]">View Latest PDF</h2>
            <p className="text-gray-600 whitespace-pre-line">Open the most recent uploaded PDF</p>
          </div>
        </div>
      </div>

      {/* Modal to display the PDF */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="View PDF" className="fixed inset-0 bg-white p-4 w-11/12 md:w-2/3 mx-auto my-auto rounded-lg shadow-lg mt-20" overlayClassName="fixed inset-0 bg-black bg-opacity-50">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-xl font-bold text-gray-700 hover:text-black">
            X
          </button>
        </div>
        <div className="modal-body">
          {selectedPdf && (
            <iframe src={selectedPdf?.url}   width="100%" height="600px" title="PDF Viewer" className="border-0"/>
          )}
        </div>
      </Modal>
    </>
  );
};

export default PdfShow;
