import React from 'react'
import search from '../../img/intelSearch.png'
import code from '../../img/coding.png'
import share from '../../img/share.png'


const Features = () => {
    return (
        <section className="bg-color-white
         py-20  
         
         mt-20 
         
         w-12/12 
        
         
         ">
            <div className="lg:items-center lg:w-full  lg:mb-32">
                <h1 className="text-6xl text-center text-color-blue items-center "><b>Features</b></h1>
                <p className="text-color-grey my-4 text-center items-center lg:w-full m-4">
                    Our aim is to connect to developers around the world to share code and grow as a developer
                </p>
            </div>
            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">

                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full lg:ml-96 "
                            src={code}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-1 flex-col items-center lg:items-start lg:ml-72">
                        <h1 className="text-3xl text-color-blue"><b>Codes in one click</b></h1>
                        <p className="text-color-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full w-80">
                            With one click you can access code and learn.
                        </p>
                        <button type="button" className="btn bg-color-blue text-color-white hover:bg-color-white hover:text-black">More Info</button>
                    </div>
                </div>

                <div
                    className="
            hidden
            lg:block
            overflow-hidden
            bg-color-blue
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "
                ></div>
            </div>
            <div className="relative mt-20 lg:mt-52">
                <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24 ">

                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0  ">
                        <img
                            className="w-5/6 h-5/6  sm:h-3/4 md:w-full md:h-full  "
                            src={search}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-1 flex-col items-center lg:items-start lg:ml-60">
                        <h1 className="text-3xl text-color-blue"><b>Intelligent search</b></h1>
                        <p className="text-color-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full w-80">
                            Our powerful search feature will help you find repos in no time at all.
                        </p>
                        <button type="button" className="btn  bg-color-blue text-color-white hover:bg-color-white hover:text-black">More Info</button>
                    </div>
                </div>

                <div
                    className="
            hidden
            lg:block
            overflow-hidden
            bg-color-blue
            rounded-l-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -right-36
          "
                ></div>
            </div>

            <div className="relative mt-20 lg:mt-52">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">

                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full lg:ml-96 "
                            src={share}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-1 flex-col items-center lg:items-start lg:ml-72">
                        <h1 className="text-3xl text-color-blue"><b>Share your Repos</b></h1>
                        <p className="text-color-grey my-4 text-center w-80 lg:text-left sm:w-3/4 lg:w-full">
                            Easily share your projects and collections with all your friends and connections. Create a shareable link that you can send at the
                            click of a button.
                        </p>
                        <button type="button" className="btn bg-color-blue text-color-white hover:bg-color-white hover:text-black">More Info</button>
                    </div>
                </div>

                <div
                    className="
            hidden
            lg:block
            overflow-hidden
            bg-color-blue
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "
                >
                </div>
            </div>
            <div className="bg-color-white mb-44"></div>
        </section>
    )
}

export default Features
