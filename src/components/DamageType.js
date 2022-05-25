import React, { useState, useEffect } from 'react'
import { useFormContext } from '../FormContext';

export default function DamageType(props) {


    const formContext = useFormContext();
    const [selected, setSelected] = useState(formContext.formState.type);
    // console.log(formContext.formData)
    function handleChange(e) {
        //togglestate
        console.log('changed Check State to ', e.target.value)
        setSelected(e.target.value)
        formContext.updateForm({ "type": e.target.value })
    }

    return (
        <div className='w-full'>
            <input className='opacity-0 fixed w-0 peer' type={'radio'} id={props.type} name={'damageGroup'} value={props.type} defaultChecked={selected === props.type}
                onChange={handleChange} required />
            <label
                className='bg-white border-accentOrange border-[1px] rounded-xl w-full h-16 flex justify-center items-center
                hover:bg-primaryGradient hover:text-white peer-checked:bg-primaryGradient peer-checked:text-white cursor-pointer transition-[background-image]
                '
                htmlFor={props.type}
            >

                {props.type.charAt(0).toUpperCase() + props.type.slice(1)}

            </label>
        </div>
    )
}
