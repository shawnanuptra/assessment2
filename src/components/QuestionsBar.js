import React from 'react'

export default function QuestionsBar(props) {

    const qNum = props.question
    const inactive = 'inline w-[31%] bg-gray-500 rounded-full';
    const active2 = 'inline w-[31%] bg-gradient-to-r from-primaryRed to-accentOrange rounded-full';
    const active3 = 'inline w-[31%] bg-accentOrange rounded-full';
    return (
        <div className='w-full flex justify-between h-1 mb-5'>
            <div className='inline w-[31%] bg-primaryRed rounded-full'></div>
            <div className={qNum >= 2 ? active2 : inactive}></div>
            <div className={qNum >= 3 ? active3 : inactive}></div>
        </div>
    )
}
