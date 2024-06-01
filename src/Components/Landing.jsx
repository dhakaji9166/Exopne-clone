import React from 'react'

function Landing() {
    return (
        <div className='relative w-full h-[150vh] sm:h-[250vh]'>
            <div className="picture w-full h-full">
                <img className='w-full h-full object-cover ' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
            </div>
            <div className="w-full absolute top-0 mt-10">
                <div className="text text-white  max-w-screen-2xl h-full mx-auto px-5 sm:px-10 sm:ml-10">
                    <div className="para mt-72">
                        <p className='text-md sm:text-2xl '> Global digital design studio partnering with </p>
                        <p className='text-md sm:text-2xl '>brands and businesses that create exceptional </p>
                        <p className='text-md sm:text-2xl '>experiences where people live, work, and unwind. </p>
                    </div>
                    <div className="heading mt-5 sm:mt-10">
                        <h1 className='text-6xl sm:text-[15rem] tracking-tighter leading-none'>Digital <br />Design <br /> Experience</h1>
                    
                    </div>
                    <div className="para2 mt-10 sm:w-1/3">
                        <p className='sm:text-xl'>We help experience-driven companies thrive  by making their audience feel the refined  intricacies of their brand and product in the  digital space. Unforgettable journeys start with a click.</p>
                        <a className='border-b-[0.3px] sm:border-b-[1px] border-zinc-100/ pb-1 mt-8 inline-block sm:text-xl' href="#">The Studio</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing