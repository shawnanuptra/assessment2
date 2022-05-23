import React from 'react'
import { Link } from 'react-router-dom'
import BackArrowButton from '../components/BackArrowButton'
import MainButton from '../components/MainButton'
import NextArrowButton from '../components/NextArrowButton'
import QuestionsBar from '../components/QuestionsBar'
import SecondaryButton from '../components/SecondaryButton'
import Hero from '../vectors/error.svg'
export default function ErrorScreen() {
    return (

        <div className='w-screen h-screen p-12 flex flex-col z-10'>
            <QuestionsBar question={3} />
            <div className='flex rounded-2xl flex-grow p-4 shadow-lg  bg-white border-[3px] border-accentOrange justify-center items-center flex-col '>
                <img src={Hero} className='w-11/12' />
                <div className='text-center my-10'>
                    <h1 className='font-bold text-3xl'>Oh, no! <br />An error has occured</h1>
                    <p className='text-base '>Please try again</p>
                </div>

                <div className='w-max'>

                    <div className='mb-5'>

                        {/* TODO: change LINK to ErrorHandling */}
                        <Link to='/q2'>
                            <MainButton text='RETRY' />
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
