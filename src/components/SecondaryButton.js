import React from 'react'

export default function SecondaryButton(props) {
    return (
        <div className='p-0.5 rounded-full bg-primaryGradient hover:drop-shadow-lg hover:scale-110 hover:text-white  transition-all text-center text-xl text-accentOrange group active:bg-reverseGradient active:drop-shadow-none active:scale-100'>
            <div className=' bg-white py-4 px-16 rounded-full group-hover:bg-primaryGradient'>{props.text}</div>
        </div>
    )
}
