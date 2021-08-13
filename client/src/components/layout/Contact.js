import React from 'react'

const Contact = () => {
    return (
        <section className="bg-color-purple text-white py-20">
           
                <div className="w-3/4 lg:w-2/4 mx-auto">
                    <p className="font-light uppercase text-center mb-8 ">Join Us</p>
                    <h1 className="text-3xl text-center ">Stay up-to-date with what we're doing</h1>
                    <div className="flex flex-col sm:flex-row sm:justify-items-center gap-6 mt-8 items-center ">
                        <input type="text" placeholder="Enter your email address" className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black " />
                        <button type="button" className="btn bg-color-red text-white w-36 hover:bg-color-grey hover:text-black">Contact Us</button>
                    </div>
                </div>
            
        </section>
    )
}

export default Contact
