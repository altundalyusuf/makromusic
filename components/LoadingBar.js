import React from 'react'

const LoadingBar = ({ width }) => {
    return (
        <>
            <div className='mx-5'>
                <div className="w-8 h-1 bg-line18 rounded-full">
                    <div className="h-1 bg-primary rounded-full" style={{ width: `${width}%` }}></div>
                </div>
            </div>
        </>
    )
}

export default LoadingBar
