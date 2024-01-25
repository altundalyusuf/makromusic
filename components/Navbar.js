import React from 'react'
import LoadingBar from './LoadingBar'

const Navbar = ({ width }) => {
    return (
        <>
            <div className='border border-bottom p-8 mb-28 grid grid-cols-3'>
                <div className='text-center text-headerBlack text-xl leading-[normal]'>
                    Kampanya Oluştur
                </div>
                <div className='flex items-center'>
                    <div>Parçan</div>
                    <LoadingBar width={width.start} />
                    <div>Detaylar</div>
                    <LoadingBar width={width.center} />
                    <div>Kampanyan</div>
                    <LoadingBar width={width.end} />
                    <div>Ödeme</div>
                </div>
            </div>
        </>
    )
}

export default Navbar
