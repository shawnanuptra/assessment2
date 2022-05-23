import React from 'react'
import { Link } from 'react-router-dom'
import BackArrowButton from '../components/BackArrowButton'
import MainButton from '../components/MainButton'
import NextArrowButton from '../components/NextArrowButton'
import QuestionsBar from '../components/QuestionsBar'
import SecondaryButton from '../components/SecondaryButton'
import Hero from '../vectors/report-submitted.svg'
export default function Question3() {
    return (

        <div className='w-screen h-screen p-12 flex flex-col z-10'>
            <QuestionsBar question={3} />
            <div className='flex rounded-2xl flex-grow p-4 shadow-lg  bg-white border-[3px] border-accentOrange justify-center items-center flex-col '>
                <img src={Hero} className='w-11/12' />
                <div className='text-center my-10'>
                    <h1 className='font-bold text-3xl'>Report submitted!</h1>
                    <p className='text-base '>Thank you for your contribution.</p>
                </div>

                <div className='w-max'>

                    <div className='mb-5'>

                        <Link to='/'>
                            <MainButton text='HOME' />
                        </Link>
                    </div>

                    {/* If possible, EXIT button to exit application */}
                    {/* <div onClick={() => {
                        //exit if possible
                    }}>
                        <SecondaryButton text='EXIT' />
                    </div> */}
                </div>
            </div>
        </div>

    )
}
