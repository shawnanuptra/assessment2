import React from 'react'
import { Link } from 'react-router-dom'

export default function ArchiveIcon(props) {
    const selected = props.selected
    return (
        <Link to='/archive'>
            <div className='flex flex-col items-center w-20 mt-2 cursor-pointer'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id='Gradient1'>
                            <stop offset={'0%'} stopColor='#FF1F1F'></stop>
                            <stop offset={'90%'} stopColor='#FF300C'></stop>
                            <stop offset={'100%'} stopColor='#FB7722'></stop>
                        </linearGradient>
                    </defs>
                    <path d="M0 3.75C0 3.25272 0.197544 2.77581 0.549175 2.42417C0.900806 2.07254 1.37772 1.875 1.875 1.875H28.125C28.6223 1.875 29.0992 2.07254 29.4508 2.42417C29.8025 2.77581 30 3.25272 30 3.75V7.5C30 7.99728 29.8025 8.47419 29.4508 8.82582C29.0992 9.17746 28.6223 9.375 28.125 9.375V23.4375C28.125 24.6807 27.6311 25.873 26.7521 26.7521C25.873 27.6311 24.6807 28.125 23.4375 28.125H6.5625C5.3193 28.125 4.12701 27.6311 3.24794 26.7521C2.36886 25.873 1.875 24.6807 1.875 23.4375V9.375C1.37772 9.375 0.900806 9.17746 0.549175 8.82582C0.197544 8.47419 0 7.99728 0 7.5V3.75ZM3.75 9.375V23.4375C3.75 24.1834 4.04632 24.8988 4.57376 25.4262C5.10121 25.9537 5.81658 26.25 6.5625 26.25H23.4375C24.1834 26.25 24.8988 25.9537 25.4262 25.4262C25.9537 24.8988 26.25 24.1834 26.25 23.4375V9.375H3.75ZM28.125 3.75H1.875V7.5H28.125V3.75ZM9.375 14.0625C9.375 13.8139 9.47377 13.5754 9.64959 13.3996C9.8254 13.2238 10.0639 13.125 10.3125 13.125H19.6875C19.9361 13.125 20.1746 13.2238 20.3504 13.3996C20.5262 13.5754 20.625 13.8139 20.625 14.0625C20.625 14.3111 20.5262 14.5496 20.3504 14.7254C20.1746 14.9012 19.9361 15 19.6875 15H10.3125C10.0639 15 9.8254 14.9012 9.64959 14.7254C9.47377 14.5496 9.375 14.3111 9.375 14.0625Z" fill={selected ? 'url(#Gradient1)' : 'black'} />
                </svg>


                <div className={selected ? 'bg-primaryGradient bg-clip-text text-transparent' : 'text-black'}>
                    <span className='text-xs'>Archive</span>
                </div>
            </div>
        </Link>
    )
}
