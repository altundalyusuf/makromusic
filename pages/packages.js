import { changeNavbar } from '@/redux/slices/createCampaignSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const packages = () => {
    const genres = useSelector(state => state.createCampaign.genres);
    const region = useSelector(state => state.createCampaign.region);
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
