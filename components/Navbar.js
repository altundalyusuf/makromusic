import React from 'react'
import LoadingBar from './LoadingBar'
import { usePathname } from 'next/navigation';

const Navbar = ({ activeForm }) => {
    const pathname = usePathname()

    if (pathname === '/') return null;


    const getWidths = () => {
        switch (activeForm) {
            case 'form1':
                return { start: 40, center: 0, end: 0 };
            case 'form2':
                return { start: 100, center: 40, end: 0 };
            case 'form3':
                return { start: 100, center: 100, end: 40 };
            case 'form4':
                return { start: 100, center: 100, end: 100 };
            default:
                return { start: 0, center: 0, end: 0 };
        }
    };

    const widths = getWidths();

    return (
        <>
            <div className='border border-bottom p-8 mb-28 grid grid-cols-3'>
                <div className='text-center text-headerBlack text-xl leading-[normal]'>
                    Kampanya Oluştur
                </div>
                <div className='flex items-center'>
                    <div>Parçan</div>
                    <LoadingBar width={widths.start} />
                    <div>Detaylar</div>
                    <LoadingBar width={widths.center} />
                    <div>Kampanyan</div>
                    <LoadingBar width={widths.end} />
                    <div>Ödeme</div>
                </div>
            </div>
        </>
    )
}

export default Navbar
