import React from 'react'
import CustomButton from './CustomButton';

const ButtonGroup = ({ handleClick, isButtonDisabled }) => {
    const { handleBack, handleContinue } = handleClick;
    return (
        <>
            <div className='flex justify-end'>
                <div className='me-3'>
                    <CustomButton customProps={{ name: 'Geri Dön', bgColor: 'bg-surfaceSecondary', textColor: 'text-black' }} onClick={handleBack} />
                </div>
                <CustomButton customProps={{ name: 'Devam Et', textColor: 'text-white', disabled: isButtonDisabled }} onClick={handleContinue} />
            </div>
        </>
    )
}

export default ButtonGroup
