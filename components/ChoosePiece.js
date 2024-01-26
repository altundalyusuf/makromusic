import filterOptions from '@/helpers/filterOptions';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import CustomButton from './CustomButton';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { savePieceInfo } from '@/redux/slices/createCampaignSlice';

const ChoosePiece = ({ pieces }) => {
    // Global states
    const pieceName = useSelector(state => state.createCampaign.pieceName);
    const noPieceChecked = useSelector(state => state.createCampaign.noPieceChecked);

    // Local states
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(pieceName || null);
    const [isChecked, setIsChecked] = useState(noPieceChecked || false);
    const [isMounted, setIsMounted] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const dispatch = useDispatch();
    const router = useRouter();

    // format piece data for select input
    useEffect(() => {
        if (pieces.tracks && pieces.tracks.items) {
            const newOptions = pieces.tracks.items.map(item => ({
                value: item.name,
                label: item.name,
            }));
            setOptions(newOptions);
        }
    }, [pieces])

    // wait for select input data to mount
    useEffect(() => {
        setIsMounted(true);
    }, [])

    // update isButtonDisabled whenever value or isChecked changes
    useEffect(() => {
        setIsButtonDisabled(!value && !isChecked);
    }, [value, isChecked])

    const handleChange = (selectedOption) => {
        setValue(selectedOption);
    }

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        event.target.checked && setValue(null);
    }

    const handleBack = () => {
        router.push('/')
    }
    const handleContinue = () => {
        if (isChecked) {
            dispatch(savePieceInfo({ pieceName: null, noPieceChecked: true }));
            router.push('/details')
        } else {
            dispatch(savePieceInfo({ pieceName: value, noPieceChecked: false }));
            router.push('/details')
        }
    }

    return (
        <>
            <div className='container max-w-5xl'>
                <div className='border rounded-xl py-5 px-4 mb-4'>
                    {/* Header */}
                    <div>
                        <div>Parçanı Seç</div>
                        <div className='text-gray-500 text-sm leading-8'>Kampanyayı oluşturmak istediğin parçayı seç.</div>

                    </div>
                    {/* Select Input */}
                    <div className='mt-5 mb-1'>
                        {isMounted ?
                            <Select
                                placeholder="Spotify'da ara"
                                id='pieceSearch'
                                name={'pieceSearch'}
                                value={value}
                                onChange={(selectedOption) => handleChange(selectedOption)}
                                options={options}
                                className='text-gray-400'
                                filterOption={filterOptions}
                                isDisabled={isChecked}
                            />
                            :
                            'Yükleniyor...'
                        }
                    </div>
                    {/* Checkbox */}
                    <div>
                        <div className='flex items-center'>
                            <input type="checkbox" id='noPiece' name='pieceSearch' checked={isChecked} onChange={handleCheckboxChange} />
                            <label htmlFor="noPiece" className='ml-2 text-gray-700 text-sm leading-8'>Parçam yayında değil</label>
                        </div>
                    </div>
                </div>
                {/* Buttons */}
                <div className='flex justify-end'>
                    <div className='me-3'>
                        <CustomButton customProps={{ name: 'Geri Dön', bgColor: 'bg-surfaceSecondary', textColor: 'text-black' }} onClick={handleBack} />
                    </div>
                    <CustomButton customProps={{ name: 'Devam Et', textColor: 'text-white', disabled: isButtonDisabled }} onClick={handleContinue} />
                </div>
            </div>
        </>
    )
}

export default ChoosePiece
