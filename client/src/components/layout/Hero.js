import React from 'react'
import dev from '../../img/dev2.png'

const Hero = () => {
    return (
        <section className="relative">
            <div
                className="container 
            flex  
            flex-col-reverse 
            lg:flex-row 
            items-center 
            lg:gap-12 
            xlg:mr-8
            lg:h-screen
            lg:w-screen
            ">
                <div className="flex flex-1 mr-8 flex-col items-center lg:items-start  lg:ml-44 lg:mr-12 lg:ml-96">
                    <h2 className="text-color-blue text-6xl md:text-6xl lg:text-6xl text-center lg:text-left mb-6">
                        <b>DevSocial</b>
                    </h2>
                    <p className="text-color-grey text-lg text-center lg:text-left mb-6 w-80">A place for developers to connect, learn, and share knowledge.</p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <button type="button" className="btn bg-color-blue text-white w-36 hover:bg-color-grey">Sign Up</button>
                        <button type="button" className="btn bg-color-red text-white w-36 hover:bg-color-grey">Login</button>
                    </div>
                </div>
                <div className="flex justify-center lg:mb-0 z-10 mr-8  lg:w-full">
                    <img src={dev} alt="dev" />
                </div>
            </div>
            <div
                className="
                hidden
                md:block
                overflow-hidden
                bg-color-purple
                rounded-l-full
                absolute
                h-80
                w-2/4
                top-32
                right-0
                lg:-bottom-28
                lg:-right-36
        "
            ></div>
        </section>
    )
}

export default Hero
