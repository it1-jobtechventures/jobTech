import formModel from '../model/formModel.js';
import axios from 'axios';
// Submit Form
const submitForm = async (req, res) => {
  const { type, name, phone, email, message, companyName ,countryCode , token  } = req.body;
  if (!token) {
    return res.status(400).json({ error: 'ReCAPTCHA verification failed' });
  }
  try {
    // Verify ReCAPTCHA with Google
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
     if (!recaptchaResponse.data.success) {
      return res.status(400).json({ error: 'Failed reCAPTCHA verification' });
    }
    const newForm = new formModel({
      type,
      name,
      countryCode,
      phone,
      email,
      message,
      companyName: type === 'investor' ? companyName : undefined,
    });

    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully!', form: newForm });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit form', details: error.message });
  }
};

// Get All Forms (Optional)
const getAllForms = async (req, res) => {
  try {
    const forms = await formModel.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch forms', details: error.message });
  }
};

export {getAllForms ,submitForm}

