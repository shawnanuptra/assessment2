import React from 'react'
import DetailsSubtitle from './DetailsSubtitle'

export default function DetailsSubtitleInfo(props) {
    return (
        <div className='mb-6'>
            <DetailsSubtitle text={props.text} />
            <div className='text-xl'>{props.info}</div>
            <div>{props.addInfo}</div>
        </div>
    )
}
