import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeNavbar } from '@/redux/slices/createCampaignSlice';

const details = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeNavbar('form2'));
    }, [])
    return (
        <>
            Details Page
        </>
    )
}

export default details
