import React from 'react'

export default function SecondaryButton({ text, onClick }) {
    return (
        <div onClick={onClick} className='p-0.5 rounded-full bg-primaryGradient hover:drop-shadow-lg hover:scale-110 hover:text-white  transition-all text-center text-xl text-accentOrange group active:bg-reverseGradient active:drop-shadow-none active:scale-100 cursor-pointer'>
            <div className=' bg-white py-4 px-16 rounded-full group-hover:bg-primaryGradient'>{text}</div>
        </div>
    )
}
