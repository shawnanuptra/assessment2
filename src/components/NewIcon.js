import React from 'react'
import { Link } from 'react-router-dom'

export default function NewIcon(props) {
    const selected = props.selected
    return (
        <Link to='/home'>
            <div className='flex flex-col items-center w-20 mt-2 cursor-pointer'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id='Gradient2'>
                            <stop offset={'0%'} stopColor='#FF1F1F'></stop>
                            <stop offset={'100%'} stopColor='#FB7722'></stop>
                        </linearGradient>
                    </defs>
                    <circle cx="15" cy="15" r="14" stroke={selected ? 'url(#Gradient2)' : 'black'} strokeWidth="2" fill={selected ? 'url(#Gradient2)' : 'none'} />
                    <path d="M13 21.0012C13 20.7388 13.0517 20.4789 13.1522 20.2364C13.2528 19.9939 13.4001 19.7735 13.5858 19.5879C13.7715 19.4023 13.992 19.2551 14.2346 19.1546C14.4773 19.0542 14.7374 19.0025 15 19.0025C15.2626 19.0025 15.5227 19.0542 15.7654 19.1546C16.008 19.2551 16.2285 19.4023 16.4142 19.5879C16.5999 19.7735 16.7472 19.9939 16.8478 20.2364C16.9483 20.4789 17 20.7388 17 21.0012C17 21.5314 16.7893 22.0397 16.4142 22.4146C16.0391 22.7894 15.5304 23 15 23C14.4696 23 13.9609 22.7894 13.5858 22.4146C13.2107 22.0397 13 21.5314 13 21.0012V21.0012ZM13.196 8.99875C13.1694 8.74659 13.1961 8.49165 13.2744 8.25047C13.3527 8.0093 13.4809 7.78727 13.6506 7.5988C13.8204 7.41033 14.0278 7.25963 14.2596 7.15647C14.4914 7.05331 14.7423 7 14.996 7C15.2497 7 15.5006 7.05331 15.7324 7.15647C15.9642 7.25963 16.1716 7.41033 16.3414 7.5988C16.5111 7.78727 16.6393 8.0093 16.7176 8.25047C16.7959 8.49165 16.8226 8.74659 16.796 8.99875L16.096 16.0084C16.0676 16.2801 15.9394 16.5317 15.7363 16.7146C15.5331 16.8975 15.2694 16.9987 14.996 16.9987C14.7226 16.9987 14.4589 16.8975 14.2557 16.7146C14.0526 16.5317 13.9244 16.2801 13.896 16.0084L13.196 8.99875Z" fill={selected ? 'white' : 'black'} />
                </svg>

                <div className={selected ? 'bg-primaryGradient bg-clip-text text-transparent' : 'text-black'}>
                    <span className='text-xs'>New</span>
                </div>
            </div>
        </Link>
    )
}
