import React, { useState } from 'react'
import { Link, Navigator, useNavigate } from 'react-router-dom'
import BackArrowButton from '../components/BackArrowButton'
import NextArrowButton from '../components/NextArrowButton'
import QuestionsBar from '../components/QuestionsBar'
import { uploadFormData, useFormContext } from '../FormContext'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../Firebase'
import MainButton from '../components/MainButton'

export default function Question2() {

    const formContext = useFormContext();
    const locationObj = formContext.formState.location;
    const nav = useNavigate()//for redirecting after uploading to Firestore

    //state for overlay
    const [overlay, setOverlay] = useState(false);
    const [postcodeOverlay, setPostcodeOverlay] = useState(false);
    function togglePostcodeOverlay() {
        setPostcodeOverlay(!postcodeOverlay);
    }

    function toggleOverlay() {
        setOverlay(!overlay)
    }

    async function uploadFormData() {
        //complete all the fields of the formState
        //add default values of date_submitted, date_updated, and status
        const currentTimeStamp = Timestamp.fromDate(new Date())
        const defaultFields = {
            'status': 'pending',
            'date_submitted': currentTimeStamp,
            'date_updated': currentTimeStamp
        }

        const completeForm = {
            ...formContext.formState,
            ...defaultFields
        }

        console.log(formContext.formState)
        console.log(completeForm)

        //update data into firebase
        try {
            const docRef = await addDoc(collection(db, 'records'), completeForm);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e)
        }


    }
    async function handleSubmit() {

        //check if you are online or not
        if (navigator.onLine) {
            //update data into firebase
            try {
                await uploadFormData();
                formContext.clearForm();
                nav('/q3')

            } catch (e) {
                //go to error screen if there are any errors
                console.error(e);
                nav('/error')
            }
        } else {
            //go to error screen if offline
            nav('/error')
        }
    }
    function validateForm() {

        const postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
        const postcodeValue = formContext.formState.location.postcode;

        //check for postcode
        if (postcodeRegex.test(postcodeValue)) {
            //check if form has been filled
            if (formContext.formState.location.postcode === '' || formContext.formState.location.street === '') {
                // show overlay
                toggleOverlay();
            } else {
                //try to upload
                handleSubmit()
            }
        } else {
            togglePostcodeOverlay();
        }

    }

    function Overlay({ toggleOverlay }) {
        return (
            <div className='absolute w-screen h-[100%] top-0 left-0 flex flex-col justify-center items-center center bg-white backdrop-blur-3xl bg-opacity-60' onClick={toggleOverlay}>

                <div className='rounded-2xl border-2 border-accentOrange bg-white z-30 w-4/5 flex flex-col items-center justify-center p-6'>
                    <h2 className='text-xl mb-6'>Please enter Postcode and Street Address</h2>
                    <MainButton text='OK' />
                </div>
            </div>
        )
    }
    function PostcodeOverlay({ togglePostcodeOverlay }) {
        return (
            <div className='absolute w-screen h-[100%] top-0 left-0 flex flex-col justify-center items-center center bg-white backdrop-blur-3xl bg-opacity-60' onClick={togglePostcodeOverlay}>

                <div className='rounded-2xl border-2 border-accentOrange bg-white z-30 w-4/5 flex flex-col items-center justify-center p-6'>
                    <h2 className='text-xl mb-6'>Please enter your postcode in the correct format</h2>
                    <MainButton text='OK' />
                </div>
            </div>
        )
    }




    return (
        <>
            <div className='absolute z-0 w-screen h-screen bg-bubbles bg-cover'>
            </div>
            <div className='w-screen h-screen p-12 flex flex-col z-10 max-w-lg my-0 mx-auto'>
                <QuestionsBar question={2} />
                <div className='flex rounded-2xl flex-grow relative p-4 shadow-lg  bg-white bg-opacity-60 backdrop-blur-3xl justify-center'>
                    <form className='flex flex-col justify-between'>
                        <div className='mb-9'>
                            <h2 className='text-2xl font-bold'>Where has the damage occured?</h2>
                        </div>

                        <div className='mb-6'>
                            <h3 className='text-xl font-bold mb-3'>Post code</h3>
                            <input type={'text'} placeholder='e.g. XX1 1XX' className='w-full text-sm p-2.5 rounded-lg border-accentOrange border-[1px] focus:outline-accentOrange'
                                defaultValue={locationObj.postcode}
                                onChange={(e) => {
                                    formContext.updateForm({ "location": { ...locationObj, "postcode": e.target.value.toUpperCase() } })
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
                            defaultValue={locationObj.additional_info}
                            onChange={(e) => {
                                formContext.updateForm({ "location": { ...locationObj, "additional_info": e.target.value } })
                            }}
                        >

                        </textarea>
                        <div className='flex justify-between'>
                            <Link to='/q1'>
                                <BackArrowButton />
                            </Link>

                            <div onClick={validateForm}>
                                <NextArrowButton />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Overlay */}
            {overlay === true ? <Overlay toggleOverlay={toggleOverlay} /> : null}
            {/* Overlay */}
            {postcodeOverlay === true ? <PostcodeOverlay togglePostcodeOverlay={togglePostcodeOverlay} /> : null}
        </>
    )
}
