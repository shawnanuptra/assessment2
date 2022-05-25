import React, { useState } from 'react'
import PendingIcon from '../vectors/pending.svg'
import ApprovedIcon from '../vectors/approved.svg'
import MantainingIcon from '../vectors/mantaining.svg'
import FixedIcon from '../vectors/fixed.svg'
import DetailsModal from './DetailsModal'
import { Timestamp } from 'firebase/firestore'

export default function ReportCard({ data, reload }) {

    const { status, type, type_desc, location, date_updated, date_submitted, date_approved } = data;

    let appliedStyle = {};

    const pendingStyle = {
        cardStyle: 'border-primaryRed bg-red-100',
        img: PendingIcon,
        textStyle: 'text-primaryRed',
        text: 'pending'
    };
    const approvedStyle = {
        cardStyle: 'border-accentOrange bg-orange-100',
        img: ApprovedIcon,
        textStyle: 'text-accentOrange',
        text: 'approved'
    };
    const mantainingStyle = {
        cardStyle: 'border-yellowBorder bg-yellow-100',
        img: MantainingIcon,
        textStyle: 'text-yellowText',
        text: 'mantaining'
    };
    const fixedStyle = {
        cardStyle: 'border-greenBorder bg-green-100',
        img: FixedIcon,
        textStyle: 'text-greenBorder',
        text: 'fixed'
    };

    switch (status) {
        case 'pending':
            appliedStyle = { ...pendingStyle };
            break;
        case 'approved':
            appliedStyle = { ...approvedStyle };
            break;
        case 'mantaining':
            appliedStyle = { ...mantainingStyle };
            break;

        // default is 'fixed' status
        default:
            appliedStyle = { ...fixedStyle };
            break;
    }


    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    console.log(data.date_submitted)

    return (
        <>
            <div onClick={openModal} className={'cursor-pointer h-max w-11/12 border-[1px] rounded-xl p-4 flex flx-col justify-between shadow-black drop-shadow-lg mb-4 ' + appliedStyle.cardStyle}>
                <div className='w-3/4 mr-2'>
                    <h1 className='font-bold text-lg mb-1'>{type}</h1>
                    <div>
                        <span className='text-base font-semibold'>Last update: </span>
                        <span>{date_updated.toDate().toDateString()}</span>
                    </div>
                    <div className='truncate'>
                        <span className='text-base font-semibold'>Location: </span>
                        <span className='truncate'>{`${location.postcode},  ${location.postcode}, ${location.postcode}`}</span>
                    </div>
                </div>
                <div className='flex flex-col justify-center flex-grow items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={appliedStyle.img} />
                        <span className={'text-xs ' + appliedStyle.textStyle}>{appliedStyle.text}</span>
                    </div>
                </div>
            </div>
            {showModal ? <DetailsModal setShowModal={setShowModal} data={data} reload={reload} /> : null}
        </>
    )
}
