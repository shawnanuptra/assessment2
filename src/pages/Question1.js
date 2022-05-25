import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DamageType from '../components/DamageType'
import NextArrowButton from '../components/NextArrowButton'
import QuestionsBar from '../components/QuestionsBar'
import { FormContext, useFormContext } from '../FormContext'
import BackArrowButton from '../components/BackArrowButton'
import MainButton from '../components/MainButton'
export default function Question1() {

    const formContext = useFormContext();
    const nav = useNavigate();

    //state for overlay
    const [overlay, setOverlay] = useState(false);

    function toggleOverlay() {
        setOverlay(!overlay)
    }

    function handleNextPage() {
        //check if radio buttons is not ticked
        if (formContext.formState.type === '') {
            // show overlay
            toggleOverlay();
        } else {
            //go to next page if yes
            nav('/q2')
        }

    }


    function Overlay({ toggleOverlay }) {
        return (
            <div className='absolute w-screen h-[100%] top-0 left-0 flex flex-col justify-center items-center center bg-white backdrop-blur-3xl bg-opacity-60' onClick={toggleOverlay}>

                <div className='rounded-2xl border-2 border-accentOrange bg-white z-30 w-4/5 flex flex-col items-center justify-center p-6'>
                    <h2 className='text-xl mb-6'>Please select a damage type</h2>
                    <MainButton text='OK' />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='absolute z-0 w-screen h-screen bg-bubbles bg-cover'>
            </div>
            <div className='w-screen h-screen p-12 flex flex-col z-10'>
                <QuestionsBar question={1} />
                <div className='flex rounded-2xl flex-grow relative p-4 shadow-lg  bg-white bg-opacity-60 backdrop-blur-3xl'>
                    <form className='w-full flex flex-col' onSubmit={console.log('test')}>
                        <div>
                            <h2 className='text-2xl font-bold mb-6'>What type of damage was it?</h2>
                            <div className='grid grid-cols-2 gap-2.5 place-items-center mb-8'>

                                <DamageType type='graffitti' />
                                <DamageType type='potholes' />
                                <DamageType type='fly-tipping' />
                                <DamageType type='obstruction' />
                                <DamageType type='others' />

                            </div>
                        </div>

                        <h2 className='text-xl font-bold mb-6'>Please describe</h2>
                        <textarea className='w-full bg flex flex-grow resize-none border-[1px] border-accentOrange rounded-2xl p-3  focus:outline-accentOrange' placeholder='Type here...'
                            value={formContext.formState.type_desc}
                            onChange={(e) => {
                                formContext.updateForm({ "type_desc": e.target.value })
                            }}>

                        </textarea>
                        <div className='flex justify-between'>
                            <Link to='/'>
                                <BackArrowButton />
                            </Link>

                            <div onClick={handleNextPage}>

                                <NextArrowButton />

                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Overlay */}
            {overlay === true ? <Overlay toggleOverlay={toggleOverlay} /> : null}
        </>
    )
}
