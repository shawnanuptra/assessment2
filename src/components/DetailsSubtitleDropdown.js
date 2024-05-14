import React from 'react'
import DetailsSubtitle from './DetailsSubtitle'

export default function DetailsSubtitleDropdown(props) {

    function handleOnChange(e) {
        props.func(e.target.value);
        console.log(props.info)
    }



    let pendDisable = false, apprDisable = false, manDisable = false, disableAll = false;

    switch (props.info) {
        case 'approved':
            pendDisable = true;
            break;

        case 'mantaining':
            pendDisable = true;
            apprDisable = true;
            break;

        case 'fixed':
            disableAll = true;
            break;

        //if 'pending',
        default:
            break;
    }

    return (
        <div className='mb-6'>
            <DetailsSubtitle text={props.text} />

            <select
                className='bg-transparent text-xl focus:outline-accentOrange cursor-pointer'
                defaultValue={props.info}
                disabled={disableAll}
                onChange={handleOnChange}
            >
                <option value={'pending'} disabled={pendDisable}>Pending</option>
                <option value={'approved'} disabled={apprDisable}>Approved</option>
                <option value={'mantaining'} disabled={manDisable}>Mantaining</option>
                <option value={'fixed'}>Fixed</option>
            </select>
        </div>
    )
}
