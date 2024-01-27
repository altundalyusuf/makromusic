import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { useRouter } from 'next/router';
import ButtonGroup from './ButtonGroup';

const RegionAndGenreSelection = () => {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const router = useRouter();

    const handleBack = () => {
        router.back()
    }
    const handleContinue = () => {
        router.push('packages')
    }
    return (
        <div className='container max-w-5xl'>
            {/* Region */}
            <div className='border rounded-xl py-5 px-4 mb-14'>
                {/* Header */}
                <div className='mb-3'>
                    <div>Bölgeni Seç</div>
                    <div className='text-gray-500 text-sm leading-8'>Kampanyayı yayınlamak istediğin bölgeyi seç.</div>

                </div>
                {/* Choosing Region */}
                <div>
                    <div className='flex'>
                        <input
                            type="text"
                            value="Türkiye"
                            className={`border-2 grow me-4 hover:cursor-pointer ${selectedRegion === 'Türkiye' ? 'border-primary' : 'border-gray-300'} rounded-md px-3 py-2 focus:outline-none`}
                            readOnly
                            onClick={() => setSelectedRegion('Türkiye')}
                        />
                        <input
                            type="text"
                            value="Global"
                            className={`border-2 grow hover:cursor-pointer ${selectedRegion === 'Global' ? 'border-primary' : 'border-gray-300'} rounded-md px-3 py-2 focus:outline-none`}
                            readOnly
                            onClick={() => setSelectedRegion('Global')}
                        />
                    </div>
                </div>
            </div>
            {/* Genre */}
            <div className='border rounded-xl py-5 px-4'>
                {/* Header */}
                <div className='mb-3'>
                    <div>Parçanın Türünü Seç</div>
                    <div className='text-gray-500 text-sm leading-8'>Seçtiğin parçanın türlerini belirle.</div>

                </div>
                {/* Choosing Region */}
                <div>
                    <div className='flex'>
                        <input
                            type="text"
                            value="Türkiye"
                            className={`border-2 grow me-4 hover:cursor-pointer ${selectedRegion === 'Türkiye' ? 'border-primary' : 'border-gray-300'} rounded-md px-3 py-2 focus:outline-none`}
                            readOnly
                            onClick={() => setSelectedRegion('Türkiye')}
                        />
                        <input
                            type="text"
                            value="Global"
                            className={`border-2 grow hover:cursor-pointer ${selectedRegion === 'Global' ? 'border-primary' : 'border-gray-300'} rounded-md px-3 py-2 focus:outline-none`}
                            readOnly
                            onClick={() => setSelectedRegion('Global')}
                        />
                    </div>
                </div>
            </div>
            {/* Buttons */}
            <ButtonGroup handleClick={{ handleBack, handleContinue }} isButtonDisabled={isButtonDisabled} />
        </div>
    )
}

export default RegionAndGenreSelection
