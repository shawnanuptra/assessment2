import React, { useContext, useEffect, useState } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from './Firebase'

const formData = {
    'type': '',
    'type_desc': '',
    'location': {
        'postcode': '',
        'street': '',
        'additional_info': ''
    },
    'status': '',
    'date_approved': '',
    'date_submitted': '',
    'date_updated': '',
}

export const FormContext = React.createContext();

export function useFormContext() {
    return useContext(FormContext)
}

export function FormContextProvider({ children }) {

    const [formState, setFormState] = useState(formData);

    //for logging purposes only
    useEffect(() => { console.log(formState, 'changed') }, [formState])


    function updateForm(obj) {
        setFormState(prevFormState => ({ ...prevFormState, ...obj }));
    }

    function clearForm() {
        setFormState(formData);
    }

    return (
        <FormContext.Provider value={{ formState, updateForm, clearForm }}>
            {children}
        </FormContext.Provider>
    )
}