import React from 'react'
import chat from '../../img/chat.png'
import res from '../../img/res.png'
import connect from '../../img/connect.png'

const MoreFeatures = () => {
    return (
        <section className="py-20 mt-20 items-center">
            <div className="lg:items-center  lg:mb-32 ">
                <h1 className="text-6xl text-center text-color-blue items-center "><b>More Features? <span className="text-color-hot-blue">YES!</span></b></h1>
                <p className="text-color-grey my-4 text-center items-center  m-4 ">
                    We got more features and more ways to connect. Please let us know if got a favorite you like prioritized.
                </p>
            </div>
            <div className="grid grid-col-1 md:grid-cols-3 lg:grid-col-3 gap-16  mt-16 mb-16 justify-center mx-6 lg:mx-24">
                <div className="flex flex-col rounded-md shadow-md  ">
                    <div className="p-6 flex flex-col items-center ">
                        <img src={connect} alt="chat" />
                        <h3 className="mt-5 mb-2 text-color-blue text-lg"><b>Messaging</b></h3>
                        <p className="mb-2 text-color-grey font-light ">Chat with friends, mentors, and other developers instantly</p>
                    </div>
                    <hr className="border-b border-color-white" />
                    <div className="flex p-6">
                        <button type="button" className="btn  flex-1 bg-color-blue text-color-white hover:bg-color-white hover:text-black">More Info</button>
                    </div>
                </div>
                <div className="flex flex-col rounded-md shadow-md  ">
                    <div className="p-6 flex flex-col items-center ">
                        <img src={res} alt="chat" />
                        <h3 className="mt-5 mb-2 text-color-blue text-lg "><b>Versatility & Responsiveness</b></h3>
                        <p className="mb-2 text-color-grey font-light ">Things look excellent whether on your phone or on your computer</p>
                    </div>
                    <hr className="border-b border-color-white" />
                    <div className="flex p-6">
                        <button type="button" className="btn  flex-1 bg-color-blue text-color-white hover:bg-color-white hover:text-black">More Info</button>
                    </div>
                </div>
                <div className="flex flex-col rounded-md shadow-md  ">
                    <div className="p-6 flex flex-col items-center ">
                        <img className=" mt-12" src={chat} alt="chat" />
                        <h3 className="mt-5 mb-2 text-color-blue text-lg mt-12"><b>Content Sharing</b></h3>
                        <p className="mb-2 text-color-grey font-light ">Feel more connected, post and share even when your friends are far away.</p>
                    </div>
                    <hr className="border-b border-color-white" />
                    <div className="flex p-6">
                        <button type="button" className="btn  flex-1 bg-color-blue text-color-white hover:bg-color-white hover:text-black">More Info</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreFeatures
