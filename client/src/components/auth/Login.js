import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bgSpace from '../../img/bgspace.png'
import bgAstro from '../../img/bgastro.png'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        //without redux
        // if(password !== password2){

        //     console.log("Password do not match!") 
        // } else {

        //     const newUser = {
        //         name,
        //         email,
        //         password
        //     }
        //     try {
        //         const config = {
        //             headers: {
        //                 'Content-Type' : 'application/json'
        //             }
        //         }
        //         const body = JSON.stringify(newUser)
        //         const res = await axios.post('/api/users', body, config)
        //         console.log(res.data)
        //     } catch (error) {
        //         console.error(error.response.data)
        //     }
        // }
        //redux below

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        // bg-gradient-to-r from-color-blue via-color-purple to-color-red

        <div className='max-h-full flex bg-gray-bg1 my-24 mx-6 '>
            <div className='lg:w-5/12 m-auto  shadow-default py-10 px-16 z-10  rounded-md shadow-sm' >
                <h1 className='lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r from-color-white via-color-red to-color-blue text-4xl lg:text-5xl mt-4 mb-12 text-center text-color-blue'>
                    <b>Log in to your account </b>
                </h1>
                {/* <img className="object-contain h-56 w-full" src={signin} alt="chat" /> */}

                <form onSubmit={handleFormSubmit}>
                    <div>
                        
                        <input
                            type='email'
                            className={`w-full p-2 bg-color-white  text-color-blue lg:bg-color-blue lg:text-color-white rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            placeholder='Email'
                            onChange={e => handleChange(e)}
                            value={email}
                            name='email'
                        />
                    </div>
                    <div>
                        
                        <input
                            type='password'
                            className={`w-full p-2 bg-color-white  text-color-blue lg:bg-color-blue lg:text-color-white rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            placeholder='Password'
                            onChange={e => handleChange(e)}
                            value={password}
                            name='password'
                            minLength='6'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button type="submit" value='Login' className="btn  flex-1 bg-color-red text-color-white hover:bg-color-white hover:text-black"><b>Login</b></button>

                    </div>
                    <p className="flex-1 lg:text-color-grey text-color-blue mt-4 text-center">
                        Dont have an account? <Link className="flex-1 lg:text-color-hot-blue  text-color-red  " to="/register"><b>Sign Up</b></Link>
                    </p>
                </form>

            </div>
            <img src={bgSpace} alt="" className="hidden lg:block
            overflow-hidden absolute h-6/12 w-6/12 ml-24  top-44" />
            <img src={bgAstro} alt="" className="hidden lg:block
            overflow-hidden absolute h-2/12 w-2/12 ml-24 right-72 bottom-56 " />
        </div>


    )
}

export default Login
