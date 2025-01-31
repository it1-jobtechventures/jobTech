import faqModel from "../model/faqModel.js"

const faqAdd = async (req , res) => {
    try {
        const faq = new faqModel({
            question : req.body.question,
            answer : req.body.answer
        });
        await faq.save()
        res.json({success:true , message:'Question Added.'})
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

const listFaq = async (req, res) => {
    try {
        const faqs = await faqModel.find({})
        res.json({success:true , data:faqs})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
}

const removeFaq = async (req, res) => {
    try {
        const faq = await faqModel.findById(req.body.id)
        await faqModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"remove faq"})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
}

const updateFaq = async (req, res) => {
    try {
        const { id, question, answer } = req.body;
        const updatedFaq = await faqModel.findByIdAndUpdate(
            id,
            { question, answer },
            { new: true }
        );
        if (!updatedFaq) {
            return res.json({ success: false, message: 'FAQ not found.' });
        }
        res.json({ success: true, message: 'FAQ updated successfully.' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { faqAdd, listFaq, removeFaq, updateFaq };