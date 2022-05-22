import React, { useState } from 'react'

export default function DamageType(props) {
    const [checked, setChecked] = useState(false);



    return (
        <div className='w-full'>
            <input className='opacity-0 fixed w-0 peer' type={'radio'} id={props.type} name={'damageGroup'} value={props.type} defaultChecked={checked} onChange={() => console.log('changed to' + checked)} />
            <label
                className='bg-white border-accentOrange border-[1px] rounded-xl w-full h-16 flex justify-center items-center
                hover:bg-primaryGradient hover:text-white peer-checked:bg-primaryGradient peer-checked:text-white cursor-pointer transition-[background-image]
                '
                htmlFor={props.type}
                onClick={() => { setChecked(checked ? false : true); console.log('test') }}
            >

                {props.type.charAt(0).toUpperCase() + props.type.slice(1)}

            </label>
        </div>
    )
}
