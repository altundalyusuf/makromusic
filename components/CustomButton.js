import React from 'react'

const CustomButton = ({ customProps, onClick = () => { } }) => {
    return (
        <>
            <div className='flex justify-center'>
                <button onClick={onClick} className={`bg-primary p-3 rounded active:bg-primaryActive transform active:scale-90 ${customProps.className}`}>
                    {customProps.name}

                </button>
            </div>
        </>
    )
}

export default CustomButton
