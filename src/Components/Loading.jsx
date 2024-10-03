import React from 'react'

function Loading() {
    return (
        <div className='h-screen w-screen flex items-center justify-center z-50 absolute bg-white top-0 left-0'>
            <span className="loading loading-ring w-16 text-[#8dc63f]"></span>
        </div>
    )
}

export default Loading;