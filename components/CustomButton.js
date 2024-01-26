import React from 'react'

const CustomButton = ({ customProps, onClick = () => { } }) => {
    return (
        <>
            <div className='flex justify-center'>
                <button
                    onClick={onClick}
                    className={`px-3 py-2 min-w-32 rounded ${customProps.disabled ? 'bg-surfaceSecondary text-black opacity-35' : customProps.bgColor ? '' : 'active:bg-primaryActive'} ${customProps.disabled ? '' : 'transform active:scale-90'} ${customProps.bgColor || 'bg-primary'} ${customProps.textColor || ''}`}
                    disabled={customProps.disabled}
                >
                    {customProps.name}
                </button>
            </div>
        </>
    )
}

export default CustomButton
