// import React, { useState ,useEffect} from 'react'
// import axios from 'axios'

// const Faq = ({url}) => {
//     const [listFaq , setListFaq] = useState([])

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

//     const [openIndex, setOpenIndex] = useState(0);

//     const toggleFAQ = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     useEffect(() => {
//         fetchFAQ()
//     },[])

//   return (
//     <>
//         <div className="max-w-2xl mx-auto mt-10 p-4">
//             <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
//             <div className="space-y-4">
//                 {listFaq.map((faq, index) => (
//                     <div key={index} className="border-b border-gray-300 pb-3">
//                         <button className="w-full text-left text-lg font-medium flex justify-between items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200"onClick={() => toggleFAQ(index)}>
//                             {faq.question}
//                             <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
//                         </button>
//                         {openIndex === index && (
//                             <div className="mt-2 p-3 bg-gray-50 text-justify  border-l-4 border-[#6B727F] rounded-md max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-[#6B727F] scrollbar-track-gray-200">
//                                 <div className="faq-answer" dangerouslySetInnerHTML={{ __html: faq.answer }}/>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </>
//   )
// }

// export default Faq

import React, { useState ,useEffect} from 'react'
import axios from 'axios'

const Faq = ({url}) => {
    const [listFaq , setListFaq] = useState([])

    const fetchFAQ = async () => {
        try {
            const response = await axios.get(`${url}/api/faq/list`)
            if (response.data.success) {
                setListFaq(response.data.data)
            } else {
                toast.error("Failed to fetch categories");
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        fetchFAQ()
    },[])

  return (
    <>
        <div className=" mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {listFaq.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300 pb-3">
                        <button className="w-full text-left text-lg font-medium flex justify-between items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200"onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="mt-2 p-3 bg-gray-50 text-justify  border-l-4 border-[#6B727F] rounded-md   scrollbar-thin scrollbar-thumb-[#6B727F] scrollbar-track-gray-200">
                                <div className="faq-answer" dangerouslySetInnerHTML={{ __html: faq.answer }}/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Faq