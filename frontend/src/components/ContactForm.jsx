// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     type: 'general',
//     name: '',
//     phone: '',
//     email: '',
//     message: '',
//     companyName: '',
//     companyPublishDate: '',
//   });

//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [data, setData] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://jobtech-backend.onrender.com/api/form/submit', formData);
//       setSuccessMessage(response.data.message);
//       setErrorMessage('');
//       setFormData({
//         type: 'general',
//         name: '',
//         phone: '',
//         email: '',
//         message: '',
//         companyName: '',
//         companyPublishDate: '',
//       });
//     } catch (error) {
//       setErrorMessage(error.response?.data?.error || 'An error occurred');
//       setSuccessMessage('');
//     }
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://jobtech-backend.onrender.com/api/form/');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-5 border rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-5">Contact Form</h2>

//       {successMessage && <p className="text-green-600 mb-3">{successMessage}</p>}
//       {errorMessage && <p className="text-red-600 mb-3">{errorMessage}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Tap-like User Type Selector */}
//         <div className="flex space-x-4">
//           <button
//             type="button"
//             className={`px-4 py-2 rounded ${
//               formData.type === 'general'
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-700'
//             }`}
//             onClick={() => setFormData({ ...formData, type: 'general' })}
//           >
//             General
//           </button>
//           <button
//             type="button"
//             className={`px-4 py-2 rounded ${
//               formData.type === 'investor'
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-700'
//             }`}
//             onClick={() => setFormData({ ...formData, type: 'investor' })}
//           >
//             Investor
//           </button>
//         </div>

//         {/* Name */}
//         <div>
//           <label className="block font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="block font-medium">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Message */}
//         <div>
//           <label className="block font-medium">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows="4"
//             className="w-full p-2 border rounded"
//           ></textarea>
//         </div>

//         {/* Company Name */}
//         {formData.type === 'investor' && (
//           <div>
//             <label className="block font-medium">Company Name</label>
//             <input
//               type="text"
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//               required={formData.type === 'investor'}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//         )}

//         {/* Company Publish Date */}
//         {formData.type === 'investor' && (
//           <div>
//             <label className="block font-medium">Company Publish Date</label>
//             <input
//               type="date"
//               name="companyPublishDate"
//               value={formData.companyPublishDate}
//               onChange={handleChange}
//               required={formData.type === 'investor'}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//         )}

//         <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    type: 'general',
    name: '',
    phone: '',
    email: '',
    message: '',
    companyName: '',
    companyPublishDate: '',
  });

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/; // Matches exactly 10 digits
    return phoneRegex.test(phone);
  };

  const validateCompanyPublishDate = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate <= today; // Ensure the date is not in the future
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields before submitting
    if (!validatePhone(formData.phone)) {
      toast.error('Phone number must be exactly 10 digits.');
      return;
    }

    if (
      formData.type === 'investor' &&
      !validateCompanyPublishDate(formData.companyPublishDate)
    ) {
      toast.error('Company publish date cannot be in the future.');
      return;
    }

    try {
      const response = await axios.post('https://jobtech-backend.onrender.com/api/form/submit', formData);
      toast.success(response.data.message);
      setFormData({
        type: 'general',
        name: '',
        phone: '',
        email: '',
        message: '',
        companyName: '',
        companyPublishDate: '',
      });
    } catch (error) {
      toast.error(error.response?.data?.error || 'An error occurred during submission.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5">Contact Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Tap-like User Type Selector */}
        <div className="flex space-x-4">
          <button
            type="button"
            className={`px-4 py-2 rounded ${
              formData.type === 'general'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFormData({ ...formData, type: 'general' })}
          >
            General
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded ${
              formData.type === 'investor'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFormData({ ...formData, type: 'investor' })}
          >
            Investor
          </button>
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        {/* Company Name */}
        {formData.type === 'investor' && (
          <div>
            <label className="block font-medium">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        {/* Company Publish Date */}
        {formData.type === 'investor' && (
          <div>
            <label className="block font-medium">Company Publish Date</label>
            <input
              type="date"
              name="companyPublishDate"
              value={formData.companyPublishDate}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
