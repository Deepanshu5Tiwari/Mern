import React, { Children } from 'react'

const Button = ({ children }) => {
    return (
        <button
            className='border border-black bg-gray-700 text-white rounded px-4 py-2'>
            {children}
        </button>
    )
}

export default Button
