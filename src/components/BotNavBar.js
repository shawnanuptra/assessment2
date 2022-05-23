import React from 'react'
import InProgressIcon from './InProgressIcon'
import NewIcon from './NewIcon'
import ArchiveIcon from './ArchiveIcon'

export default function BotNavBar(props) {

    const index = props.tabIndex;
    let colouredBarPosition;

    if (index === 0) {
        colouredBarPosition = 'left-0'
    } else if (index === 1) {
        colouredBarPosition = 'left-1/3'

    } else {
        colouredBarPosition = 'right-0'
    }

    return (
        <div>

            {/* The line above the icons */}
            <div className='h-1 bg-gray-500 mb-2 relative rounded-full'>
                <div className={'absolute top-0 h-1 bg-primaryGradient w-1/3 rounded-full ' + colouredBarPosition}></div>
            </div>
            {/* Icons itself */}
            <div className='flex flex-row justify-around'>
                <InProgressIcon selected={index === 0 ? true : false} />
                <NewIcon selected={index === 1 ? true : false} />
                <ArchiveIcon selected={index === 2 ? true : false} />
            </div>
        </div>
    )
}
