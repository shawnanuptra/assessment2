import React from 'react'
import PendingIcon from '../vectors/pending.svg'
import ApprovedIcon from '../vectors/approved.svg'
import MantainingIcon from '../vectors/mantaining.svg'
import FixedIcon from '../vectors/fixed.svg'
export default function ReportCard(props) {

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

    switch (props.status) {
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

    return (
        <div className={'h-max w-full border-[1px] rounded-xl p-4 flex flx-col justify-between shadow-black drop-shadow-lg mb-4 ' + appliedStyle.cardStyle}>
            <div className='w-3/4 mr-2'>
                <h1 className='font-bold text-lg mb-1'>Graffitti</h1>
                <div>
                    <span className='text-base font-semibold'>Last update: </span>
                    <span>09 Sept '22</span>
                </div>
                <div className='truncate'>
                    <span className='text-base font-semibold'>Location: </span>
                    <span className='truncate'>SR6 78D, 24 Brandling..</span>
                </div>
            </div>
            <div className='flex flex-col justify-center flex-grow items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={appliedStyle.img} />
                    <span className={'text-xs ' + appliedStyle.textStyle}>{appliedStyle.text}</span>
                </div>
            </div>
        </div>
    )
}
