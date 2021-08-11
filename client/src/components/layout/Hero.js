import React from 'react'
import dev from '../../img/dev.png'

const Hero = () => {
    return (
        <section className='relative...'>
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div className="flex flex-1 flex-col items-center lg:items-start lg:m-20 lg:ml-44 lg:mr-32">
                    <h2 className="text-color-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        <b>DevSocial</b>
                    </h2>
                    <p className="text-color-grey text-lg text-center lg:text-left mb-6">A place for developers to connect, learn, and share knowledge.</p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <button type="button" className="btn bg-color-blue text-white w-36 hover:bg-color-grey">Sign Up</button>
                        <button type="button" className="btn bg-color-red text-white w-36 hover:bg-color-grey">Login</button>
                    </div>
                </div>
                <div className="flex justify-center flex-1 mb-1 md:mb-16 lg:mb-0 z-10 ">
                    <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={dev} alt="dev" />
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
