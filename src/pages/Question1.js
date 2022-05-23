import React from 'react'
import { Link } from 'react-router-dom'
import DamageType from '../components/DamageType'
import NextArrowButton from '../components/NextArrowButton'
import QuestionsBar from '../components/QuestionsBar'
import Bubbles from '../vectors/bubbles.svg'
export default function Question1() {
    return (
        <>
            <div className='absolute z-0 w-screen h-screen bg-bubbles bg-cover'>
            </div>
            <div className='w-screen h-screen p-12 flex flex-col z-10'>
                <QuestionsBar question={1} />
                <div className='flex rounded-2xl flex-grow relative p-4 shadow-lg  bg-white bg-opacity-60 backdrop-blur-3xl'>
                    <form className='w-full flex flex-col'>
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

                        <h2 className='text-2xl font-bold mb-6'>Please describe</h2>
                        <textarea className='w-full bg flex flex-grow resize-none border-[1px] border-accentOrange rounded-2xl p-3  focus:outline-accentOrange' placeholder='Type here...'>

                        </textarea>
                        <Link to='/q2'>
                            <NextArrowButton />
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}
