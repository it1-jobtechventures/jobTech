import React, { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import PdfShow from './PdfShow';
import ExcelViwer from './ExcelViwer';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({url}) => {
  const [formData, setFormData] = useState({
    type: 'general',
    name: '',
    phone: '',
    countryCode:'',
    email: '',
    message: '',
    companyName: '',
    // companyPublishDate: '',
  });
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState("");

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "countryCode") {
      if (!/^\d{0,3}$/.test(value)) {
        toast.error("Country code must be a number (max 3 digits) and cannot contain special symbols.");
        return;
      }
      if (value.length > 3) {
        toast.error("Country code cannot be more than 3 digits.");
        return;
      }
      if (parseInt(value, 10) < 0) {
        toast.error("Country code cannot be negative.");
        return;
      }
    }
      // Allow only numbers in the phone input
      if (name === "phone" && !/^\d*$/.test(value)) {
        return; // Ignore non-numeric input
      }
    setFormData({ ...formData, [name]: value });
  };

    const sentEmail = (data) => {
    const subject = `${data.type.charAt(0).toUpperCase() + data.type.slice(1)} Enquiry From ${data.type.charAt(0).toUpperCase() + data.name.slice(1)}`;
    const templateParams = {
      from_name: data.name,
      email: data.email,
      type:data.type,
      countryCode:data.countryCode,
      phoneNo:data.phone,
      message:data.message,
      companyName:data.companyName,
      subject:subject
    };
    emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success(' form submit!');
      recaptchaRef.current.reset();
      const autoReplyParams = {
        to_name: data.name,
        to_email: data.email,  // Send the auto-reply to the user's email
        message: `Hi ${data.name},\n\nThank you for reaching out to us! We'll get back to you shortly.`,
      };
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID, // Use a different template ID for the auto-reply
        autoReplyParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(() => {
        // toast.success('Auto-reply sent!');
      }).catch((error) => {
        toast.error('Failed to send email: ' + error.text);
      })
    })
    .catch((error) => {
      toast.error('Failed to send email: ' + error.text);
    });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      toast.error('Phone number must be exactly 10 digits.');
      return;
    }
    if (!captchaToken) {
      toast.error("Please complete the ReCAPTCHA");
      return;
    }
  
    // const token = await recaptchaRef.current.executeAsync();
    // recaptchaRef.current.reset(); // Reset ReCAPTCHA after execution

    try {
      setLoading(true);
      const response = await axios.post(`${url}/api/form/submit`, { ...formData, token: captchaToken });
      if (response.data) {
        sentEmail(formData);
        setFormData({
          type: 'general',
          name: '',
          phone: '',
          countryCode:'',
          email: '',
          message: '',
          companyName: '',
          companyPublishDate: '',
        });
      } else {
        toast.error('Error submitting form.');
      }
    } catch (error) {
      toast.error(
        error.response?.data?.error || 'An error occurred during submission.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" py-12 pt-24 " id='section6'>
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className='flex flex-col gap-5'>
        <PdfShow url={url}/>
        <ExcelViwer url={url}/>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-bold -[#3678f4] mb-6">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selector */}
            <div className="flex space-x-4">
              <button type="button"className={`px-4 py-2 rounded ${ formData.type === 'general'?' bg-[#3678f4] text-white':'bg-gray-200 text-gray-700'}`}onClick={() => setFormData({ ...formData, type: 'general' })}>
                General
              </button>
              <button type="button" className={`px-4 py-2 rounded ${formData.type === 'investor'?'bg-[#3678f4] text-white':'bg-gray-200 text-gray-700'}`} onClick={() => setFormData({ ...formData, type: 'investor' })}>
                Investor
              </button>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3678f4]"/>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Phone</label>
              <div className='flex'>
                <input type='tel' name='countryCode' value={formData.countryCode} onChange={handleChange} required placeholder='+91'  className="w-24 p-3 border rounded focus:ring-2 focus:ring-[#3678f4]"/>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3678f4]"/>
              </div>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3678f4]"/>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3678f4]"></textarea>
            </div>
            {/* Conditional Fields for Investors */}
            {formData.type === 'investor' && (
              <>
                <div>
                  <label className="block font-medium text-gray-700">Company Name</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-700"/>
                </div>
              </>
            )}
            <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} ref={recaptchaRef} />
            <button type="submit" disabled={loading} className="w-full py-3 bg-[#3678f4] text-white rounded hover:bg-blue-800 transition duration-300">
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                  </div>
                ) : (
                  'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;