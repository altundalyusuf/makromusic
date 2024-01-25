import filterOptions from '@/helpers/filterOptions';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const ChoosePiece = ({ pieces }) => {
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (pieces.tracks && pieces.tracks.items) {
            const newOptions = pieces.tracks.items.map(item => ({
                value: item.name,
                label: item.name,
            }));
            setOptions(newOptions);
        }
    }, [pieces])

    const handleChange = (selectedOption) => {
        setValue(selectedOption);
    }

    return (
        <>
            <div className='container max-w-5xl border rounded-xl py-5 px-4'>
                <div>
                    <div>Parçanı Seç</div>
                    <div className='text-gray-500 text-sm leading-8'>Kampanyayı oluşturmak istediğin parçayı seç.</div>

                </div>
                <div className='mt-5'>
                    <Select
                        placeholder="Spotify'da ara"
                        id='pieceSearch'
                        name={'pieceSearch'}
                        value={value}
                        onChange={(selectedOption) => handleChange(selectedOption)}
                        options={options}
                        className='text-gray-400'
                        filterOption={filterOptions}
                    />
                </div>
            </div>
        </>
    )
}

export default ChoosePiece
