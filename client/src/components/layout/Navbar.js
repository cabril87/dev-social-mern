import React, { useState } from 'react'
import { QrcodeIcon } from '@heroicons/react/solid'
import { Squash as Hamburger } from 'hamburger-react'


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <nav className="container flex items-center mx-auto sm:mt-4">
                <div className="p-3 flex text-center ">
                <svg fill="#242A45" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="40px" height="50px"><path d="M 5 2 C 3.347656 2 2 3.347656 2 5 L 2 35 C 2 36.652344 3.347656 38 5 38 L 45 38 C 46.652344 38 48 36.652344 48 35 L 48 5 C 48 3.347656 46.652344 2 45 2 Z M 7 7 L 43 7 L 43 33 L 7 33 Z M 19.28125 11.28125 L 11.28125 19.28125 L 10.59375 20 L 11.28125 20.71875 L 19.28125 28.71875 L 20.71875 27.28125 L 13.4375 20 L 20.71875 12.71875 Z M 30.71875 11.28125 L 29.28125 12.71875 L 36.5625 20 L 29.28125 27.28125 L 30.71875 28.71875 L 38.71875 20.71875 L 39.40625 20 L 38.71875 19.28125 Z M 20 39 L 20 43 L 30 43 L 30 39 Z M 10 40 C 9.703125 40 9.410156 40.117188 9.21875 40.34375 L 4.21875 46.34375 C 3.96875 46.644531 3.929688 47.085938 4.09375 47.4375 C 4.257813 47.789063 4.613281 48 5 48 L 45 48 C 45.386719 48 45.742188 47.789063 45.90625 47.4375 C 46.070313 47.085938 46.027344 46.644531 45.78125 46.34375 L 40.78125 40.34375 C 40.589844 40.117188 40.296875 40 40 40 L 32 40 L 32 45 L 18 45 L 18 40 Z"/></svg>
                </div>
                    <h1 className="p-3 text-4xl font-amatic-sc text-secondary ">DevSocial</h1>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-5 uppercase text-xs">
                    <li class="cursor-pointer">Developers</li>
                    <button type="button" class="bg-color-blue text-white rounded-md px-7 py-3 uppercase">Register</button>
                    <button type="button" class="bg-color-red text-white rounded-md px-7 py-3 uppercase">Login</button>
                </ul>
                
                <div className="flex sm:hidden flex-1 justify-end m-6 ">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </nav>

        </>
    )
}

export default Navbar
