import React from 'react'
import Icon from '../vectors/account.svg'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';

export default function SignOut() {

    const nav = useNavigate();

    function handleClick() {
        auth.signOut();
        nav('/')
    }

    return (
        <div onClick={handleClick} className='flex justify-center flex-col items-center cursor-pointer hover:scale-110 transition-transform'>
            <img src={Icon} className='w-[30px]' />
            <div className='bg-primaryGradient bg-clip-text text-transparent text-xs'>Sign Out</div>
        </div>
    )
}
