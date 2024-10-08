import React from 'react'

export const Button = ({ children }) => {
    return (
        <button className="
            text-white 
            bg-gradient-to-br from-green-400 to-blue-600 
            hover:bg-gradient-to-bl 
            focus:ring-4 
            focus:outline-none 
            focus:ring-green-200 
            dark:focus:ring-green-800 
            font-medium 
            rounded-lg 
            text-xl
            px-5 
            py-4 
            text-center 
            me-2 
            mb-2
            
        ">
           {children}
        </button>
    )
}
