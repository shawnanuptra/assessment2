import React from 'react'
import SignOut from '../components/SignOut'
export default function CouncilTitle(props) {
    return (
        <div className='flex flex-row justify-between'>
            {/* The Title itself */}
            <div className='w-full max-w-[75%] z-10'>
                <div className='text-3xl font-bold mb-2'>
                    {props.text}
                </div>
                <div className='h-2 bg-primaryGradient rounded-full'></div>
            </div>

            <SignOut />
        </div>
    )
}
