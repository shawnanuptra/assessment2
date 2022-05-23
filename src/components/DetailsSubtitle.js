import React from 'react'

export default function DetailsSubtitle(props) {
    return (
        <div className='w-full mb-2'>
            <div className='text-2xl font-bold mb-1'>
                {props.text}
            </div>
            <div className='h-1 bg-primaryGradient rounded-full'></div>
        </div>
    )
}
