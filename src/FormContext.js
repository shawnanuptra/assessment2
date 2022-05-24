import React, { useContext, useEffect, useState } from 'react'

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

    return (
        <FormContext.Provider value={{ formState, updateForm }}>
            {children}
        </FormContext.Provider>
    )
}