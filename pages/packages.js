import { changeNavbar } from '@/redux/slices/createCampaignSlice';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const packages = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeNavbar('form3'));
    }, [])
    return (
        <>
            Select Package
        </>
    )
}

export default packages
