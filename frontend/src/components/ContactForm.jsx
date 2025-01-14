// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

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

//   const validatePhone = (phone) => {
//     const phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phone);
//   };

//   const validateCompanyPublishDate = (date) => {
//     const today = new Date();
//     const selectedDate = new Date(date);
//     return selectedDate <= today;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate fields before submitting
//     if (!validatePhone(formData.phone)) {
//       toast.error('Phone number must be exactly 10 digits.');
//       return;
//     }

//     if (
//       formData.type === 'investor' &&
//       !validateCompanyPublishDate(formData.companyPublishDate)
//     ) {
//       toast.error('Company publish date cannot be in the future.');
//       return;
//     }

//     try {
//       const response = await axios.post('https://jobtech-backend.onrender.com/api/form/submit', formData);
//       toast.success(response.data.message);
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
//       toast.error(error.response?.data?.error || 'An error occurred during submission.');
//     }
//   };

//   return (
//     <div className="flex justify-around bg-pink-400 p-10">
//       <div>
//         <section className='shadow-2xl border border-gray-400 rounded-xl'>
//           <section>
//             🧡
//           </section>
//           <section>
//             <h1>Contact</h1>
//             <p>0984537278623</p>
//             <p>yourmail@gmail.com</p>
//           </section>
//         </section>
//         <section className='shadow-2xl border border-gray-400 rounded-xl'>
//           <section>
//             🧡
//           </section>
//           <section>
//             <h1>adreess</h1>
//             <p>175 5th Ave, New York, NY 10010</p>
//             <p>United States</p>
//           </section>
//         </section>
//         <section className='shadow-2xl border border-gray-400 rounded-xl'>
//           <section>
//             🧡
//           </section>
//           <section>
//             <h1>Schedule</h1>
//             <p>04 Hours / 7 Days Open</p>
//             <p>Office time: 10 AM - 5:30 PM</p>
//           </section>
//         </section>
//       </div>
//       <div>
//         <h2 className="">Contact Form</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Tap-like User Type Selector */}
//           <div className="flex space-x-4">
//             <button type="button" className={`px-4 py-2 rounded ${formData.type === 'general'? 'bg-blue-600 text-white': 'bg-gray-200 text-gray-700' }`} onClick={() => setFormData({ ...formData, type: 'general' })}>
//               General
//             </button>
//             <button type="button" className={`px-4 py-2 rounded ${formData.type === 'investor'? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700' }`} onClick={() => setFormData({ ...formData, type: 'investor' })}>
//               Investor
//             </button>
//           </div>
//           <div>
//             <label className="block font-medium">Name</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded"/>
//           </div>
//           <div>
//             <label className="block font-medium">Phone</label>
//             <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded"/>
//           </div>
//           <div>
//             <label className="block font-medium">Email</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded"/>
//           </div>
//           <div>
//             <label className="block font-medium">Message</label>
//             <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full p-2 border rounded"></textarea>
//           </div>
//           {formData.type === 'investor' && (
//             <div>
//               <label className="block font-medium">Company Name</label>
//               <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full p-2 border rounded"/>
//             </div>
//           )}
//           {formData.type === 'investor' && (
//             <div>
//               <label className="block font-medium">Company Publish Date</label>
//               <input type="date" name="companyPublishDate" value={formData.companyPublishDate} onChange={handleChange} required className="w-full p-2 border rounded"/>
//             </div>
//           )}
//           <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
//             Submit
//           </button>
//         </form>
//       </div>
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

  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const validateCompanyPublishDate = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate <= today;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const response = await axios.post(
        'https://jobtech-backend.onrender.com/api/form/submit',
        formData
      );
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
    <div className=" p-4 md:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information Cards */}
        <div className="flex flex-col gap-6">
          {[
            { title: 'Contact', content: '0984537278623\nyourmail@gmail.com' },
            { title: 'Address', content: '175 5th Ave, New York, NY 10010\nUnited States' },
            { title: 'Schedule', content: '04 Hours / 7 Days Open\nOffice time: 10 AM - 5:30 PM' },
          ].map((info, index) => (
            <div
              key={index}
              className="shadow-lg border border-gray-300 rounded-lg p-6 bg-white hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl text-blue-600 mb-4">🧡</div>
              <h2 className="text-xl font-bold text-gray-800">{info.title}</h2>
              <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-300">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selector */}
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

            {/* Form Fields */}
            <div>
              <label className="block font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Conditional Fields for Investors */}
            {formData.type === 'investor' && (
              <>
                <div>
                  <label className="block font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">Company Publish Date</label>
                  <input
                    type="date"
                    name="companyPublishDate"
                    value={formData.companyPublishDate}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
