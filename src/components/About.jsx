import React from 'react'
import mainImage3 from '../img/pixel3.jpg'
import mainImage1 from '../img/pixel1.jpg'
const About = () => {
    return (
        <>
            <div id="section2" className="bg-black text-white p-4 text-2xl">
                <p className="text-5xl text-center p-5 font-semibold">About Us</p>
                <div className="flex justify-between p-5 bg-yellow-900">
                    <p>
                        <p className='font-semibold'> Welcome to CUT & EDGE GYM, where fitness meets community.</p>
                        <br />
                        <br />
                        We are passionate about helping you achieve your fitness goals and create a healthier lifestyle. With our
                        top-notch facilities, experienced trainers, and supportive environment,
                        we're here to make your fitness journey a success.
                        <br />
                        <br />
                        <p className='font-bold text-orange-400'>  We believe that fitness is a journey that goes beyond physical appearance.</p>
                        <br />
                        <br />
                        Our team of knowledgeable trainers is dedicated to helping you reach your goals.
                        <br />
                        <br />
                        We pride ourselves on our inclusive and supportive community.
                    </p>

                    <div className="flex items-center">
                        <div className="  border-8 border-white mr-6 p-8 ml-14">
                            <img
                                className="w-65 h-65"
                                src={mainImage3}
                                alt="Woman Avatar"
                            />
                        </div>
                        <div className="bg-gradient-to-br from-orange-400 to-orange-900 relative
                         transform rotate-6 border-8 border-white p-8">
                            <img
                                className="w-66 h-66"
                                src={mainImage1}

                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About