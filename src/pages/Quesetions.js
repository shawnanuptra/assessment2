import React, { useState } from 'react'

export default function Quesetions() {

    //formData empty template
    const initFormData = {
        'type': '',
        'type_desc': '',
        'status': '',
        'location': {
            'postcode': '',
            'street': '',
            'additional_info': ''
        },
        'date_approved': '',
        'date_submitted': '',
        'date_updated': '',
    }

    //for 'pages' -- there's 3 pages, so index 0, 1, 2
    const [page, setPages] = useState(0);
    //formData - all form updates are reflected here
    const [formData, setFormData] = useState(initFormData);


    const Output = () => {

    }

    return (
        <Output />
    )
}
