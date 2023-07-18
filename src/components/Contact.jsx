import React from 'react'
import fb from '../img/fb-Icon.png'
const Contact = () => {
    return (
        <>
            <div id="section4" className="bg-gradient-to-br from-orange-600 to-black via-yellow-800
             to-white text-2xl text-white p-6 flex flex-wrap">
                <div className="w-full text-center mb-6">
                    <h2 className="text-5xl text-white font-bold">Contact Us</h2>
                    <p className="text-3xl text-center font-semibold text-blue-950">We would love to hear from you!</p>
                </div>
                <div className="w-full md:w-1/2">

                    <p className="text-3xl">Contact Information:</p>
                    <br />
                    Phone: 098765432<br />
                    Email: xyz@gmail.com<br />
                    Visit Us:
                    CUT & EDGE GYM,
                    Nehru Nagar,
                    Madhya Pradesh
                    <br />
                    <br />
                    <p className="text-3xl">Operating Hours:</p>
                    <br />
                    Monday to Friday: 7:00am-8:00pm <br />
                    Saturday-Sunday 9:00am-5:00pm
                    <br />
                    <br />
                </div>
                <div className="w-full md:w-1/2 px-4">

                    <div className="border-red-800 border-4 rounded-lg p-6 max-w-md mx-auto">
                        <div className='font-thin' style={{ fontFamily: 'Acme' }}>
                            Connect with us on social media to stay updated with the latest news, events, and fitness tips:

                            We value your feedback and strive to provide the best possible experience for our members.

                            Don't hesitate to reach out to us with any inquiries or suggestions. We look forward to assisting you on your fitness journey!
                        </div>

                    </div>
                </div>

            </div>


            {/* Facebook: [Facebook Page URL]
                    Instagram: [Instagram Handle]
                    Twitter: [Twitter Handle] */}
            {/* <img
                        className="w-66 h-66"
                        src={fb}
                    /> */}
            {/* </p>
            </div > */}
        </>
    )
}

export default Contact