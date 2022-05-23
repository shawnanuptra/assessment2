import React from 'react'

export default function MainButton(props) {

    const clickFunc = props.onClick;

    return (
        <div onClick={clickFunc} className='p-0.5 rounded-full bg-primaryGradient hover:drop-shadow-lg hover:scale-110 hover:text-white  transition-all text-center text-xl text-white active:bg-reverseGradient active:drop-shadow-none active:scale-100 cursor-pointer w-max'>

            <div className='py-4 px-16 rounded-full bg-primaryGradient'>{props.text}</div>
        </div>
    )
}
