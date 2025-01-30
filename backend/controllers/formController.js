// import formModel from '../model/formModel.js';

// // Submit Form
// const submitForm = async (req, res) => {
//   const { type, name, phone, email, message, companyName ,countryCode , token  } = req.body;
//   if (!token) {
//     return res.status(400).json({ error: 'ReCAPTCHA verification failed' });
//   }
//   try {
//     // Verify ReCAPTCHA with Google
//     const recaptchaResponse = await axios.post(
//       `https://www.google.com/recaptcha/api/siteverify`,
//       null,
//       {
//         params: {
//           secret: process.env.RECAPTCHA_SECRET_KEY, // Use secret key from .env
//           response: token,
//         },
//       }
//     );
//      if (!recaptchaResponse.data.success) {
//       return res.status(400).json({ error: 'Failed reCAPTCHA verification' });
//     }
//     const newForm = new formModel({
//       type,
//       name,
//       countryCode,
//       phone,
//       email,
//       message,
//       companyName: type === 'investor' ? companyName : undefined,
//     });

//     await newForm.save();
//     res.status(201).json({ message: 'Form submitted successfully!', form: newForm });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to submit form', details: error.message });
//   }
// };

// // Get All Forms (Optional)
// const getAllForms = async (req, res) => {
//   try {
//     const forms = await formModel.find();
//     res.status(200).json(forms);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch forms', details: error.message });
//   }
// };

// export {getAllForms ,submitForm}

import formModel from '../model/formModel.js';
import axios from 'axios';

// Submit Form
const submitForm = async (req, res) => {
  const { type, name, phone, email, message, companyName, countryCode, token } = req.body;

  console.log("Incoming form data:", { type, name, phone, email, message, companyName, countryCode, token });

  if (!token) {
    console.log("Error: No ReCAPTCHA token provided.");
    return res.status(400).json({ error: 'ReCAPTCHA verification failed' });
  }

  try {
    // Verify ReCAPTCHA with Google
    console.log("Verifying reCAPTCHA...");
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY, // Use secret key from .env
          response: token,
        },
      }
    );

    console.log("reCAPTCHA Response:", recaptchaResponse.data);

    if (!recaptchaResponse.data.success) {
      console.log("Error: reCAPTCHA verification failed.");
      return res.status(400).json({ error: 'Failed reCAPTCHA verification' });
    }

    // Create new form entry
    console.log("Creating new form entry...");
    const newForm = new formModel({
      type,
      name,
      countryCode,
      phone,
      email,
      message,
      companyName: type === 'investor' ? companyName : undefined,
    });

    // Save form to database
    await newForm.save();
    console.log("Form submitted successfully:", newForm);

    res.status(201).json({ message: 'Form submitted successfully!', form: newForm });
  } catch (error) {
    console.error("Error submitting form:", error.message);
    res.status(500).json({ error: 'Failed to submit form', details: error.message });
  }
};

// Get All Forms
const getAllForms = async (req, res) => {
  try {
    console.log("Fetching all form entries...");
    const forms = await formModel.find();
    console.log("Forms retrieved:", forms.length);
    res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching forms:", error.message);
    res.status(500).json({ error: 'Failed to fetch forms', details: error.message });
  }
};

export { getAllForms, submitForm };
