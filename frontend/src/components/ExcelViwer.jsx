import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import * as XLSX from 'xlsx';

// Set the modal app element for accessibility
Modal.setAppElement('#root');

const ExcelViewer = ({ url }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [latestExcel, setLatestExcel] = useState(null);
  const [excelData, setExcelData] = useState([]);
  const [data, setData] = useState([]);

  // Fetch Excel list and apply LIFO (reverse order)
  const fetchExcels = async () => {
    try {
      const res = await axios.get(`${url}/api/excel/files`);
      const excelFiles = res.data.data.reverse();
      setData(excelFiles);

      // Set the latest Excel file as the selected file
      if (excelFiles.length > 0) {
        setLatestExcel(excelFiles[0]);
      }
    } catch (error) {
      console.error('Error fetching Excel list:', error);
    }
  };

  useEffect(() => {
    fetchExcels();
  }, []);

  // Open the modal and parse the latest Excel file
  const openModal = async () => {
    if (latestExcel) {
      try {
        const response = await fetch(latestExcel.url);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(worksheet);

        setExcelData(parsedData);
        setModalIsOpen(true);
      } catch (error) {
        console.error('Error reading Excel file:', error);
      }
    }
  };

  // Close the modal
  const closeModal = () => {
    setModalIsOpen(false);
    setExcelData([]);
  };

  return (
    <>
      {/* Button to open the modal */}
      <div className="space-y-6">
        <div className="cursor-pointer shadow-lg flex items-center gap-4 p-6 rounded-lg bg-white hover:shadow-xl transition duration-300" onClick={openModal}>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#424343] text-white text-xl">
            📊
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#424343]">View Latest Excel</h2>
            <p className="text-gray-600 whitespace-pre-line">Open the most recently uploaded Excel</p>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="View Excel" className="fixed inset-0 bg-white p-4 w-11/12 md:w-3/4 mx-auto my-auto rounded-lg shadow-lg mt-20 overflow-hidden" overlayClassName="fixed inset-0 bg-black bg-opacity-50">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-bold">Excel Viewer</h2>
          <button onClick={closeModal} className="text-xl font-bold text-gray-700 hover:text-black">
            ✕
          </button>
        </div>
        <div className="modal-body overflow-x-auto overflow-y-hidden">
          {excelData.length > 0 ? (
            <div className="w-full overflow-x-auto">
              <table className="table-auto min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    {Object.keys(excelData[0]).map((key) => (
                      <th key={key} className="border border-gray-300 px-2 py-1 text-left text-xs font-medium text-gray-700">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
            {excelData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 px-2 py-1 text-xs text-gray-600">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <p className="text-center text-gray-500">No data found in the Excel file.</p>
    )}
  </div>
</Modal>



    </>
  );
};

export default ExcelViewer;
