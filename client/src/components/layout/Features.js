import React from 'react'


const Features = () => {
    return (
        <section className="bg-color-white py-20  mt-20 lg:mt-60">
            <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 class="text-5xl text-center text-color-blue"><b>Features</b></h1>
                <p class="text-center text-color-grey mt-4">
                    Our aim is to connect to developers around the world to share code and grow as a developer
                </p>
            </div>
            <div class="relative mt-20 lg:mt-24">
                <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">

                    <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                            src=""
                            alt=""
                        />
                    </div>

                    <div class="flex flex-1 flex-col items-center lg:items-start">
                        <h1 class="text-3xl text-color-blue"><b>Codes in one click</b></h1>
                        <p class="text-color-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            With one click you can access code and learn.
                        </p>
                        <button type="button" class="btn bg-color-blue text-color-white hover:bg-color-white hover:text-black">More Info</button>
                    </div>
                </div>

                <div
                    class="
            hidden
            lg:block
            overflow-hidden
            bg-color-purple
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "
                ></div>
            </div>
            <div class="relative mt-20 lg:mt-52">
                <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">

                    <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                            src=""
                            alt=""
                        />
                    </div>

                    <div class="flex flex-1 flex-col items-center lg:items-start">
                        <h1 class="text-3xl text-color-blue"><b>Intelligent search</b></h1>
                        <p class="text-color-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            Our powerful search feature will help you find repos in no time at all.
                        </p>
                        <button type="button" class="btn  bg-color-blue text-color-white hover:bg-color-white hover:text-black">More Info</button>
                    </div>
                </div>

                <div
                    class="
            hidden
            lg:block
            overflow-hidden
            bg-color-purple
            rounded-l-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -right-36
          "
                ></div>
            </div>

            <div class="relative mt-20 lg:mt-52">
                <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">

                    <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                            src=""
                            alt=""
                        />
                    </div>

                    <div class="flex flex-1 flex-col items-center lg:items-start">
                        <h1 class="text-3xl text-color-blue"><b>Share your Repos</b></h1>
                        <p class="text-color-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            Easily share your projects and collections with all your friends and connections. Create a shareable link that you can send at the
                            click of a button.
                        </p>
                        <button type="button" class="btn bg-color-blue hover:bg-bookmark-white hover:text-black">More Info</button>
                    </div>
                </div>

                <div
                    class="
            hidden
            lg:block
            overflow-hidden
            bg-color-purple
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "
                ></div>
            </div>
        </section>
    )
}

export default Features
