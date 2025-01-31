// import React from 'react'
// import { useState } from 'react'
// import JoditEditor from 'jodit-react';
// import axios from 'axios'
// import { toast } from 'react-toastify';
// import { useRef } from 'react';
// import { useEffect } from 'react';

// const Faq = ({url}) => {
//     const [data , setData] = useState({
//         question:'',
//         answer:''
//     })
//     const editorRef = useRef(null);
//     const [listFaq , setListFaq] = useState([])

//     const onChangeHandler = (e) => {
//         const { name, value } = e.target;
//         setData((prev) => ({ ...prev, [name]: value }));
//     };

//     const onEditorChange = (newAnswer) => {
//         setData((prev) => ({ ...prev, answer: newAnswer }));
//     };

//     const onSubmit = async(e) => {
//         e.preventDefault()
//         const formData = new FormData();
//         formData.append('question' , data.question);
//         formData.append('answer',data.answer)
//         try {
//             const response = await axios.post(`${url}/api/faq/add`, {question: data.question,answer: data.answer}, {headers: { 'Content-Type': 'application/json' }});
//             if (response.data.success) {
//                 toast.success(response.data.message);
//                 setData({
//                     question:'',
//                     answer:''
//                 })
//                 fetchFAQ()
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             toast.error('Error adding faq');
//         }
//     }

//     const editorConfig = {
//         readonly: false,
//         height: 400,
//         uploader: {
//             insertImageAsBase64URI: true,
//         },
//         toolbarSticky: false,
//         buttons: [
//             'bold',
//             'italic',
//             'underline',
//             'link',
//             'image',
//             'align',
//             'undo',
//             'redo',
//             'fontsize',
//             'font',
//         ],
//     };

//     const fetchFAQ = async () => {
//         try {
//             const response = await axios.get(`${url}/api/faq/list`)
//             if (response.data.success) {
//                 setListFaq(response.data.data)
//             } else {
//                 toast.error("Failed to fetch categories");
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     useEffect(() => {
//         fetchFAQ()
//     },[])

//     const removeFaq = async(faqId) => {
//         try {
//             const response = await axios.post(`${url}/api/faq/delete` , {id:faqId})
//             await fetchFAQ()
//             if (response.data.success) {
//                 toast.success('faq removed successfully.');
//             } else {
//                 toast.error('Error removing faq.');
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     }
//   return (
//     <>
//         <main className="p-6 md:p-10 lg:p-14 pt-24">
//             <div className="mb-8">
//                 <h1 className="text-2xl font-semibold mb-4">Add a New Question</h1>
//                 <div>
//                     <form onSubmit={onSubmit} className="space-y-4">
//                         <div className="flex flex-col">
//                             <label className="text-lg font-medium">Type Question</label>
//                             <input type='text' onChange={onChangeHandler} value={data.question} name='question' className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                         </div>
//                         <div>
//                             <label className="text-lg font-medium">Type Answer</label>
//                             <JoditEditor ref={editorRef} value={data.answer} config={editorConfig} onBlur={onEditorChange} className="mt-2"/>
//                         </div>
//                         <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
//                     </form>
//                 </div>
//             </div>
//             <div>
//                 <h1 className="text-2xl font-semibold mb-4">List of faq</h1>
//                 <div className="space-y-4">
//                     {
//                         listFaq.map((list) => (
//                             <>
//                                 <div key={list._id} className="border-b border-gray-300 pb-4">
//                                     <div className='shadow-2xl p-5'>
//                                         <p className="text-xl font-semibold">{list.question}</p>
//                                         <div className="faq-answer mt-2" dangerouslySetInnerHTML={{ __html: list.answer }}/>
//                                         <div className="mt-4 flex space-x-4">
//                                             <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">Update</button>
//                                             <button onClick={() => removeFaq(list._id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Remove</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </>
//                         ))
//                     }
//                 </div>
//             </div>
//         </main>
//     </>
//   )
// }

// export default Faq

import React, { useState, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Faq = ({ url }) => {
    const [data, setData] = useState({ question: '', answer: '' });
    const [listFaq, setListFaq] = useState([]);
    const [editingFaq, setEditingFaq] = useState(null); // Track the FAQ being edited
    const editorRef = useRef(null);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const onEditorChange = (newAnswer) => {
        setData((prev) => ({ ...prev, answer: newAnswer }));
    };

    const fetchFAQ = async () => {
        try {
            const response = await axios.get(`${url}/api/faq/list`);
            if (response.data.success) {
                setListFaq(response.data.data);
            } else {
                toast.error('Failed to fetch FAQs');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (editingFaq) {
            // If editingFaq is set, call updateFaq instead of adding new one
            await updateFaq();
        } else {
            // If not in editing mode, add new FAQ
            try {
                const response = await axios.post( `${url}/api/faq/add`, { question: data.question, answer: data.answer }, { headers: { 'Content-Type': 'application/json' } });
                if (response.data.success) {
                    toast.success(response.data.message);
                    setData({ question: '', answer: '' });
                    fetchFAQ();
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                toast.error('Error adding FAQ');
            }
        }
    };

    const updateFaq = async () => {
        if (editingFaq) {
            try {
                const response = await axios.post(`${url}/api/faq/update`, {
                    id: editingFaq._id,
                    question: data.question,
                    answer: data.answer,
                });
                if (response.data.success) {
                    toast.success('FAQ updated successfully.');
                    fetchFAQ();
                    setEditingFaq(null); // Reset editing mode
                    setData({ question: '', answer: '' });
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                toast.error('Error updating FAQ');
            }
        }
    };

    const handleEdit = (faq) => {
        setEditingFaq(faq);
        setData({ question: faq.question, answer: faq.answer });
    };

    const removeFaq = async (faqId) => {
        try {
            const response = await axios.post(`${url}/api/faq/delete`, { id: faqId });
            if (response.data.success) {
                toast.success('FAQ removed successfully.');
                fetchFAQ();
            } else {
                toast.error('Error removing FAQ.');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleCancel = () => {
        setEditingFaq(null); // Reset the editing state
        setData({ question: '', answer: '' }); // Reset the form fields to blank
    };

    useEffect(() => {
        fetchFAQ();
    }, []);

    return (
        <main className="p-6 md:p-10 lg:p-14 pt-24">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold mb-4">
                    {editingFaq ? 'Update FAQ' : 'Add a New Question'}
                </h1>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-lg font-medium">Type Question</label>
                        <input type="text" onChange={onChangeHandler} value={data.question} name="question" className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div>
                        <label className="text-lg font-medium">Type Answer</label>
                        <JoditEditor ref={editorRef} value={data.answer} config={{ readonly: false, height: 400 }} onBlur={onEditorChange} className="mt-2"/>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {editingFaq ? 'Update' : 'Submit'}
                    </button>
                </form>
                {editingFaq && (
                    <button onClick={handleCancel}className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mt-4">
                        Cancel
                    </button>
                )}
            </div>
            <div>
                <h1 className="text-2xl font-semibold mb-4">List of FAQ</h1>
                <div className="space-y-4">
                    {listFaq.map((faq) => (
                        <div key={faq._id} className="border-b border-gray-300 pb-4">
                            <div className="shadow-2xl p-5">
                                <p className="text-xl font-semibold">{faq.question}</p>
                                <div className="faq-answer mt-2" dangerouslySetInnerHTML={{ __html: faq.answer }}/>
                                <div className="mt-4 flex space-x-4">
                                    <button onClick={() => handleEdit(faq)}  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                        Update
                                    </button>
                                    <button onClick={() => removeFaq(faq._id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Faq;
