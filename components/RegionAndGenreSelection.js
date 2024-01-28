import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import ButtonGroup from './ButtonGroup';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { saveRegionAndGenres } from '@/redux/slices/createCampaignSlice';
import filterOptions from '@/helpers/filterOptions';

const RegionAndGenreSelection = ({ genres }) => {
    // Global state
    const savedGenres = useSelector(state => state.createCampaign.genres);
    const region = useSelector(state => state.createCampaign.region);

    // Local state
    const [options, setOptions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(region || null);
    const [selectedOptions, setSelectedOptions] = useState(savedGenres || []);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (genres) {
            const newOptions = genres.map(item => ({
                value: item,
                label: item,
            }));
            setOptions(newOptions);
        }
    }, [genres])

    useEffect(() => {
        setIsMounted(true);
    }, [])

    useEffect(() => {
        setIsButtonDisabled(!selectedRegion || selectedOptions.length === 0);
    }, [selectedRegion, selectedOptions])

    const handleBack = () => {
        router.back()
    }
    const handleContinue = () => {
        console.log('selectedRegion', selectedRegion)
        dispatch(saveRegionAndGenres({ region: selectedRegion, genres: selectedOptions }));
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
                {/* Choosing Genre */}
                <div>
                    {isMounted ?
                        <Select
                            key={isMounted ? 'mounted' : 'not-mounted'}
                            placeholder='Tür ara'
                            isMulti
                            name="genres"
                            value={selectedOptions || []}
                            options={options}
                            className="basic-multi-select grow"
                            filterOption={filterOptions}
                            onChange={setSelectedOptions}
                        />
                        : 'Yükleniyor...'}
                </div>
            </div>
            {/* Buttons */}
            <ButtonGroup handleClick={{ handleBack, handleContinue }} isButtonDisabled={isButtonDisabled} />
        </div>
    )
}

export default RegionAndGenreSelection
