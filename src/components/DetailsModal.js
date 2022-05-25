import React, { useRef, useState } from 'react'
import CouncilTitle from './CouncilTitle'
import DetailsSubtitleInfo from './DetailsSubtitleInfo'
import MainButton from './MainButton'
import CloseButton from '../vectors/close.svg'
import DetailsTitle from './DetailsTitle'
import { doc, Timestamp, updateDoc } from 'firebase/firestore'
import DetailsSubtitleDropdown from './DetailsSubtitleDropdown'
import { db } from '../Firebase'

export default function DetailsModal({ setShowModal, data, reload }) {

    const modalRef = useRef(null);

    function handleClick() {
        // modalRef.current.classList.remove('animate-popping-up');
        // modalRef.current.classList.add('animate-popping-down');
        setShowModal(false);
    }

    const { status, type, type_desc, location, date_updated, date_submitted, date_approved } = data;


    const [dropdownValue, setDropdownValue] = useState(status);


    function updateFormStatus(value) {
        let updatedObject = {};
        const curDate = new Date();

        if (value === 'approved') {
            updatedObject = {
                'status': 'approved',
                'date_approved': Timestamp.fromDate(curDate),
                'date_updated': Timestamp.fromDate(curDate),
            }
        } else if (value === 'mantaining') {
            //todo: if it's not approved, don't allow
            updatedObject = {
                'status': 'mantaining',
                'date_updated': Timestamp.fromDate(curDate),
            }
        } else if (value === 'fixed') {
            updatedObject = {
                'status': 'fixed',
                'date_updated': Timestamp.fromDate(curDate),
                'date_fixed': Timestamp.fromDate(curDate),
            }
        }
        return updatedObject;
    }

    async function updateData() {
        try {
            const docRef = doc(db, 'records', data.id);
            await updateDoc(docRef, updateFormStatus(dropdownValue))
            setShowModal(false)
            reload()
        } catch (e) {
            console.error(e)
        }

    }

    return (
        <div className="no-scrollbar overflow-scroll absolute top-0 left-0 w-screen h-screen z-30 bg-white bg-opacity-60 backdrop-blur-md px-12 flex flex-col py-4" ref={modalRef}>
            <div className='no-scrollbar flex flex-row justify-between mb-6'>
                <DetailsTitle />
                <img className='h-[30px] cursor-pointer hover:scale-110 transition-transform' src={CloseButton} onClick={handleClick} />
            </div>
            <DetailsSubtitleInfo text='Type' info={type[0].toUpperCase() + type.substring(1)} addInfo={type_desc} />
            <DetailsSubtitleInfo text='Location' info={location.postcode} addInfo={`${location.street}` + `${location.additional_info}`} />
            <DetailsSubtitleDropdown text='Status' info={status} func={setDropdownValue} />
            <DetailsSubtitleInfo text='Last Updated' info={date_updated.toDate().toDateString()} />
            <DetailsSubtitleInfo text='Date Submitted' info={date_submitted.toDate().toDateString()} />
            <DetailsSubtitleInfo text='Date Approved' info={date_approved != '' ? date_approved.toDate().toDateString() : 'N/A'} />
            <DetailsSubtitleInfo text='Date Fixed' info={status === 'fixed' ? `${date_updated.toDate().toDateString()}` : 'N/A'} />

            <div className='my-16 flex justify-center items-center' >
                <MainButton onClick={updateData} text='UPDATE' />
            </div>
        </div>
    )
}
