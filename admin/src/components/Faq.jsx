import React from 'react'
import { useState } from 'react'
import JoditEditor from 'jodit-react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { useEffect } from 'react';

const Faq = ({url}) => {
    const [data , setData] = useState({
        question:'',
        answer:''
    })
    const editorRef = useRef(null);
    const [listFaq , setListFaq] = useState([])

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const onEditorChange = (newAnswer) => {
        setData((prev) => ({ ...prev, answer: newAnswer }));
    };

    const onSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('question' , data.question);
        formData.append('answer',data.answer)
        try {
            const response = await axios.post('http://localhost:4000/api/faq/add', {question: data.question,answer: data.answer}, {headers: { 'Content-Type': 'application/json' }});
            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    question:'',
                    answer:''
                })
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Error adding faq');
        }
    }

    const editorConfig = {
        readonly: false,
        height: 400,
        uploader: {
            insertImageAsBase64URI: true,
        },
        toolbarSticky: false,
        buttons: [
            'bold',
            'italic',
            'underline',
            'link',
            'image',
            'align',
            'undo',
            'redo',
            'fontsize',
            'font',
        ],
    };

    const fetchFAQ = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/faq/list')
            if (response.data.success) {
                setListFaq(response.data.data)
            } else {
                toast.error("Failed to fetch categories");
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchFAQ()
    },[])

    const removeFaq = async(faqId) => {
        try {
            const response = await axios.post('http://localhost:4000/api/faq/delete' , {id:faqId})
            await fetchFAQ()
            if (response.data.success) {
                toast.success('faq removed successfully.');
            } else {
                toast.error('Error removing faq.');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <>
        <main>
            <div>
                <h1>Add questions</h1>
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label className=''>Type Question</label>
                            <input type='text' onChange={onChangeHandler} value={data.question} name='question' />
                        </div>
                        <div>
                            <label className=''>Type Answer</label>
                            <JoditEditor ref={editorRef} value={data.answer} config={editorConfig} onBlur={onEditorChange} />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <h1>List of faq</h1>
                <div>
                    {
                        listFaq.map((list) => (
                            <>
                                <div>
                                    <div className=''>
                                        <p>{list.question}</p>
                                        <p>{list.answer}</p>
                                        <div>
                                            <button>Update</button>
                                            <button onClick={() => removeFaq(list._id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </main>
    </>
  )
}

export default Faq