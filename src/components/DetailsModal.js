import React, { useRef } from 'react'
import CouncilTitle from './CouncilTitle'
import DetailsSubtitleInfo from './DetailsSubtitleInfo'
import MainButton from './MainButton'
import CloseButton from '../vectors/close.svg'
import DetailsTitle from './DetailsTitle'

export default function DetailsModal(props) {
    // close the modal when clicking outside the modal.
    // const modalRef = useRef();
    // const closeModal = (e) => {
    //     if (e.target === modalRef.current) {
    //         setShowModal(false);
    //     }
    // };

    const modalRef = useRef(null);

    function handleClick() {
        // modalRef.current.classList.remove('animate-popping-up');
        // modalRef.current.classList.add('animate-popping-down');
        props.setShowModal(false);
    }

    return (
        <div className="no-scrollbar overflow-scroll absolute top-0 left-0 w-screen h-screen z-30 bg-white bg-opacity-60 backdrop-blur-md px-12 flex flex-col py-4" ref={modalRef}>
            <div className='no-scrollbar flex flex-row justify-between mb-6'>
                <DetailsTitle />
                <img className='h-[30px] cursor-pointer hover:scale-110 transition-transform' src={CloseButton} onClick={handleClick} />
            </div>
            <DetailsSubtitleInfo text='Type' info='Others' addInfo='testing ;sajkdnfgliuaerg asfdgijbasdfligb' />
            <DetailsSubtitleInfo text='Location' info='Others' addInfo='testing ;sajkdnfgliuaerg asfdgijbasdfligb' />
            <DetailsSubtitleInfo text='Status' info='Others' addInfo='testing ;sajkdnfgliuaerg asfdgijbasdfligb' />
            <DetailsSubtitleInfo text='Last Updated' info='Others' />
            <DetailsSubtitleInfo text='Date Submitted' info='Others' />
            <DetailsSubtitleInfo text='Date Approved' info='Others' />
            <DetailsSubtitleInfo text='Date Fixed' info='Others' />

            <div className='my-16 flex justify-center items-center' >
                {/* //todo: do backend stuff before closing modal */}
                <MainButton onClick={() => props.setShowModal(false)} text='UPDATE' />
            </div>
        </div>
    )
}
