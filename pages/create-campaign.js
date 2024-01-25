import ChoosePiece from '@/components/ChoosePiece'
import Navbar from '@/components/Navbar'
import React from 'react'

const loadingBarWidth = {
    start: 40,
    center: 0,
    end: 0
}

const createCampaign = () => {
    return (
        <>
            <Navbar width={loadingBarWidth} />
            <ChoosePiece />
        </>
    )
}

export default createCampaign
