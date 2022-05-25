import React from 'react'
import DetailsSubtitle from './DetailsSubtitle'

export default function DetailsSubtitleDropdown(props) {

    function handleOnChange(e) {
        props.func(e.target.value);
    }

    console.log(props.info)
    return (
        <div className='mb-6'>
            <DetailsSubtitle text={props.text} />

            <select
                className='bg-transparent text-xl focus:outline-accentOrange cursor-pointer'
                defaultValue={props.info}
                onChange={handleOnChange}
            >
                <option value={'pending'}>Pending</option>
                <option value={'approved'}>Approved</option>
                <option value={'mantaining'}>Mantaining</option>
                <option value={'fixed'}>Fixed</option>
            </select>
        </div>
    )
}
