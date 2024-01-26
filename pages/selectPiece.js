import ChoosePiece from '@/components/ChoosePiece'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import React from 'react'

const loadingBarWidth = {
    start: 40,
    center: 0,
    end: 0
}

const selectPiece = ({ pieces }) => {
    return (
        <>
            <Navbar width={loadingBarWidth} />
            <ChoosePiece pieces={pieces} />
        </>
    )
}

export default selectPiece

export const getServerSideProps = async () => {
    try {
        const response = await axios.get("https://makromusic-web-task-api.onrender.com/search-on-spotify?q");

        return {
            props: {
                pieces: response.data,
            },
        };
    } catch (error) {
        console.error(error)
        return {
            props: {
                pieces: [],
            }
        }
    }
};
