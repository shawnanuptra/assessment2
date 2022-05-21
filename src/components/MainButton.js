import React from 'react'

export default function MainButton(props) {
    return (
        <div className='text-xl text-white bg-gradient-to-r from-primaryRed to-accentOrange py-4 px-16 rounded-full hover:drop-shadow-lg hover:scale-110 transition-all'>{props.text}</div>
    )
}
