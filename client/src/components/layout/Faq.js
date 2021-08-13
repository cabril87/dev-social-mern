import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'


const Faq = () => {
    return (
        <section className="bg-color-white p-20 mt-20  ">
            <div className="lg:items-center lg:w-full">
                <div className="lg:items-center lg:w-full  lg:mb-32 ">
                    <h1 className="text-6xl text-center text-color-blue items-center uppercase"><b>Faqs</b></h1>
                    <p className="text-color-grey my-4 text-center items-center lg:w-full lg:m-4 ">
                        We got more features and more ways to connect. Please let us know if got a favorite you like prioritized.
                    </p>
                </div>
                <div className="flex flex-col w-4/4 lg:w-5/12 mt-12 mx-auto">
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1 text-color-blue"><b>What is DevSocial?</b></span>
                        <FontAwesomeIcon icon={faArrowAltCircleDown} className="text-color-blue"/>
                    </div>
                </div>
                <div className="flex flex-col w-4/4 lg:w-5/12 mt-12 mx-auto">
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1 text-color-blue"><b>How do i sign Up?</b></span>
                        <FontAwesomeIcon icon={faArrowAltCircleDown} className="text-color-blue"/>
                    </div>
                </div>
                <div className="flex flex-col w-4/4 lg:w-5/12 mt-12 mx-auto">
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1 text-color-blue"><b>How do i request a feature?</b></span>
                        <FontAwesomeIcon icon={faArrowAltCircleDown} className="text-color-blue"/>
                    </div>
                </div>
                <div className="flex flex-col w-4/4 lg:w-5/12 mt-12 mx-auto">
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1 text-color-blue"><b>Can I share pictures?</b></span>
                        <FontAwesomeIcon icon={faArrowAltCircleDown} className="text-color-blue"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
