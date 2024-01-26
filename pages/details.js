import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeNavbar } from '@/redux/slices/createCampaignSlice';
import RegionAndGenreSelection from '@/components/RegionAndGenreSelection';

const details = () => {
    const dispatch = useDispatch();
    // For navigation bar status
    useEffect(() => {
        dispatch(changeNavbar('form2'));
    }, [])
    return (
        <>
            <RegionAndGenreSelection />
        </>
    )
}

export default details
