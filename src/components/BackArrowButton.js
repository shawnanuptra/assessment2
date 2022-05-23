import React from 'react'
import Arrow from '../vectors/arrow.svg'
export default function BackArrowButton() {
    return (
        <div className='flex justify-end mt-4'>
            <div className='text-3xl text-white bg-gradient-to-r from-primaryRed to-accentOrange p-3 rounded-full hover:drop-shadow-lg hover:scale-110 transition-all w-12 h-12 flex justify-center items-center cursor-pointer'>
                <img src={Arrow} className='rotate-180' />
            </div>
        </div>
    )
}
