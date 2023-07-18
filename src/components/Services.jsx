import React from 'react'

import mainImage4 from '../img/pixel4.jpg'
const Services = () => {
    return (
        <>
            {/* <div className='border-8 border-black '> */}
            <div id="section3" className="text-2xl text-white p-6" style={{
                backgroundImage: `url(${mainImage4})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center-top',
                backgroundRepeat: 'repeat-x',
                opacity: "0.9",
                padding: "2rem",
                height: "calc(100% - 4rem)"
            }}>
                <p className="text-5xl text-white text-center p-5 font-bold">SERVICES</p>
                <h1 style={{ fontfamily: 'Ultra' }} className="text-4xl text-orange-500 font-semibold">Personal Training</h1>
                <br />
                <h1 className="text-3xl text-orange-500 font-semibold">Group Fitness Classes</h1> <br />
                <h1 className="text-3xl text-orange-500 font-semibold">Cardiovascular Equipment</h1> <br />
                <h1 className="text-3xl text-orange-500 font-semibold">Strength Training Equipment</h1> <br />
                <h1 className="text-3xl text-orange-500 font-semibold">Fitness Assessments</h1> <br />
                <h1 className="text-3xl text-orange-500 font-semibold">Sauna and Steam Rooms</h1> <br />
                <h1 className="text-3xl text-orange-500 font-semibold">Swimming Pool</h1> <br />
                <h1 className="text-3xl text-orange-500 font-semibold">Sports Facilities</h1> <br />
                <h1 className="text-3xl text-orange-500 font-semibold">Nutrition Guidance</h1> <br />
                <h1 className="text-3xl text-orange-500 font-semibold">Relaxation and Recovery Services</h1>
            </div>
            {/* </div> */}

        </>
    )
}

export default Services