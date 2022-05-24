import React from 'react'
import { Link } from 'react-router-dom'
import BackArrowButton from '../components/BackArrowButton'
import DamageType from '../components/DamageType'
import NextArrowButton from '../components/NextArrowButton'
import QuestionsBar from '../components/QuestionsBar'
import { useFormContext } from '../FormContext'
import Bubbles from '../vectors/bubbles.svg'
export default function Question2() {

    const formContext = useFormContext();
    const locationObj = formContext.formState.location;

    return (
        <>
            <div className='absolute z-0 w-screen h-screen bg-bubbles bg-cover'>
            </div>
            <div className='w-screen h-screen p-12 flex flex-col z-10'>
                <QuestionsBar question={2} />
                <div className='flex rounded-2xl flex-grow relative p-4 shadow-lg  bg-white bg-opacity-60 backdrop-blur-3xl'>
                    <form className='flex flex-col justify-between'>
                        <div className='mb-9'>
                            <h2 className='text-2xl font-bold'>Where has the damage occured?</h2>
                        </div>

                        <div className='mb-6'>
                            <h3 className='text-xl font-bold mb-3'>Post code</h3>
                            <input type={'text'} placeholder='e.g. XX1 1XX' className='w-full text-sm p-2.5 rounded-lg border-accentOrange border-[1px] focus:outline-accentOrange'
                                defaultValue={locationObj.postcode}
                                onChange={(e) => {
                                    formContext.updateForm({ "location": { ...locationObj, "postcode": e.target.value } })
                                }}
                            />
                        </div>

                        <div className='mb-6'>
                            <h3 className='text-xl font-bold mb-3'>Street address</h3>
                            <input type={'text'} placeholder='e.g. 1 Jamesville Street' className='w-full text-sm p-2.5 rounded-lg border-accentOrange border-[1px] focus:outline-accentOrange'
                                defaultValue={locationObj.street}
                                onChange={(e) => {
                                    formContext.updateForm({ "location": { ...locationObj, "street": e.target.value } })
                                }}
                            />
                        </div>

                        <h2 className='text-xl font-bold mb-6'>Additional information</h2>
                        <textarea className='w-full bg flex flex-grow resize-none border-[1px] border-accentOrange rounded-2xl p-3  focus:outline-accentOrange' placeholder='e.g. behind the red telephone box'
                            defaultValue={locationObj.additional_information}
                            onChange={(e) => {
                                formContext.updateForm({ "location": { ...locationObj, "additional_information": e.target.value } })
                            }}
                        >

                        </textarea>
                        <div className='flex justify-between'>
                            <Link to='/q1'>
                                <BackArrowButton />
                            </Link>
                            {/* //TODO: change LINK to upload to Firebase & Link to ErrorScreen.js if error occured */}
                            <Link to='/q3'>

                                <NextArrowButton />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
