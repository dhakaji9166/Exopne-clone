import React from 'react'

function Work() {
    return (
        <>
            <div className=" w-full relative">
                <div className="max-w-screen mx-auto py-30 px-5 sm:px-10">
                    <div className="featured flex gap-3">
                        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path>
                        </svg>
                        <h3 className='capitalize'>Featured projects</h3>
                    </div>

                    <h2 className='text-6xl my-5'>Work</h2>
                    <p className='leading-2 text-md'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>

                    <div className="elems mt-10">
                        <div className="elem w-full ">
                            <div className="video w-full h-[104vw] bg-red-500">

                            </div>
                            <div className="mt-4">
                                <h3 className='font-semibold'>Pixelflakes</h3>
                                <p className='capitalize opacity-40'>Architectural Marketing Agency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work