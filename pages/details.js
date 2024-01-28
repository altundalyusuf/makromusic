import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeNavbar } from '@/redux/slices/createCampaignSlice';
import RegionAndGenreSelection from '@/components/RegionAndGenreSelection';
import axios from 'axios';

const details = ({ genres }) => {
    const dispatch = useDispatch();
    // For navigation bar status
    useEffect(() => {
        dispatch(changeNavbar('form2'));
    }, [])
    return (
        <>
            <RegionAndGenreSelection genres={genres} />
        </>
    )
}

export default details

export const getServerSideProps = async () => {
    try {
        const response = await axios.get("https://makromusic-web-task-api.onrender.com/track-genres");

        return {
            props: {
                genres: response.data,
            },
        };
    } catch (error) {
        console.error(error)
        return {
            props: {
                genres: [],
            }
        }
    }
};
