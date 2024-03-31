import React from 'react';

const Blockquote = ({ children }) => {
    return (
    <blockquote class="p-4 my-4 border-s-4 border-quote-sidebar-bg bg-gray-200 dark:bg-quote-dark-bg">
        <p class="text-xl italic font-medium leading-relaxed ">
            {children }
        </p>
    </blockquote>
)
}


export default Blockquote;