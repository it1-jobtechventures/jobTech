import formModel from '../model/formModel.js';

// Submit Form
const submitForm = async (req, res) => {
  const { type, name, phone, email, message, companyName, companyPublishDate } = req.body;

  try {
    const newForm = new formModel({
      type,
      name,
      phone,
      email,
      message,
      companyName: type === 'investor' ? companyName : undefined,
      companyPublishDate: type === 'investor' ? companyPublishDate : undefined,
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