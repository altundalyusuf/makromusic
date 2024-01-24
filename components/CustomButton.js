import React from 'react'

const CustomButton = ({ customProps }) => {
    return (
        <>
            <div className='flex justify-center'>
                <button className={`bg-primary p-3 rounded ${customProps.className}`}>
                    {customProps.name}

                </button>
            </div>
        </>
    )
}

export default CustomButton
