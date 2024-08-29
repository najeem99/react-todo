import React, { useEffect, useState } from 'react'

export default function AddTodo({ addTodo, editTodoValue }) {
    const [content, setContent] = useState('')
    useEffect(() => {
        setContent(editTodoValue)
    }, [editTodoValue])

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContent(event.target.value);

    }
    const AddButtonHandler = () => {
        addTodo(content);
        setContent('');

    }
    return (
        <div className='max-w-md rounded overflow-hidden shadow-lg mt-2 px-1 border-solid border-gray-500'>
            <h2 className="font-bold text-xl mb-2 px-3 font-serif">Create Todo</h2>
            <div className=' flex items-center m-2	'>

                <input
                    className='w-full h-full p-1 mx-2 appearance-none block bg-gray-200 text-gray-700 border border-black-500 rounded leading-tight focus:outline-none focus:bg-white'
                    value={content} onChange={handleValueChange}
                    placeholder="eg:water Plants"
                />
                <button className={`mx-2 h-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded  ${content == '' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                    }`} onClick={AddButtonHandler} disabled={content == ''}>{editTodoValue ? "Update" : "Add"}</button>
            </div>
        </div>
    )
}
