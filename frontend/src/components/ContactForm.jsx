import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoCall } from 'react-icons/io5';

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

  const info = [
    {
      title: 'Contact',
      content: '0984537278623\nyourmail@gmail.com',
      icon: <IoCall />,
    },
    {
      title: 'Address',
      content: '175 5th Ave, New York, NY 10010\nUnited States',
      icon: <IoCall />,
    },
    {
      title: 'Schedule',
      content: '04 Hours / 7 Days Open\nOffice time: 10 AM - 5:30 PM',
      icon: <IoCall />,
    },
  ];

  return (
    <div className=" py-12 pt-24 " id='section4'>
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information Cards */}
        <div className="space-y-6">
          {info.map((info, index) => (
            <div key={index} className="shadow-lg flex items-center gap-4 p-6 rounded-lg bg-white hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 text-white text-xl">
                {info.icon}
              </div>
              <div>
                <h2 className="text-lg font-bold text-blue-700">{info.title}</h2>
                <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selector */}
            <div className="flex space-x-4">
              <button type="button"className={`px-4 py-2 rounded ${ formData.type === 'general'?'bg-blue-600 text-white':'bg-gray-200 text-gray-700'}`}onClick={() => setFormData({ ...formData, type: 'general' })}>
                General
              </button>
              <button type="button" className={`px-4 py-2 rounded ${formData.type === 'investor'?'bg-blue-600 text-white':'bg-gray-200 text-gray-700'}`} onClick={() => setFormData({ ...formData, type: 'investor' })}>
                Investor
              </button>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            {/* Conditional Fields for Investors */}
            {formData.type === 'investor' && (
              <>
                <div>
                  <label className="block font-medium text-gray-700">Company Name</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">Company Publish Date</label>
                  <input type="date" name="companyPublishDate" value={formData.companyPublishDate} onChange={handleChange} required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500" />
                </div>
              </>
            )}
            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
