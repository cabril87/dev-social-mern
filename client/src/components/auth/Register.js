import React, { useState } from 'react'
import fire from '../../img/fire.png'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'

// import axios from 'axios'

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData;

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {

            setAlert("Password do not match!", 'red')
        } else {
            register({ name, email, password })
        }
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
    
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className='relative flex bg-gray-bg1 lg:my-12  mx-6 -z-10 lg:my-2 my-24'>
            <img src={fire} alt="" className="hidden lg:block
        overflow-hidden absolute h-5/12 w-7/12 ml-44  top-0 " />
            <div className='lg:w-5/12 m-auto  shadow-default  px-16 z-10 rounded-md shadow-lg pb-6' >
                <h1 className='lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r from-color-white via-color-red to-color-blue text-5xl lg:text-8xl mt-4 mb-16 text-center text-color-blue'>
                    <b>Sign Up </b>
                </h1>
                {/* <p className='  text-xl lg:text-3xl  uppercase mb-12 text-center lg:text-color-white'>
                    Create your account
                </p> */}
                {/* <img className="object-contain h-56 w-full" src={signin} alt="chat" /> */}

                <form onSubmit={handleFormSubmit}>
                    <div>

                        <input
                            type='text'
                            className={`w-full p-2 bg-color-white  text-color-blue  rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}

                            placeholder='Name'
                            onChange={e => handleChange(e)}
                            value={name}
                            name='name'

                        />
                    </div>
                    <div>

                        <input
                            type='email'
                            className={`w-full p-2 bg-color-white  text-color-blue rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}

                            placeholder='Email'
                            onChange={e => handleChange(e)}
                            value={email}
                            name='email'

                        />
                    </div>

                    <div>

                        <input
                            type='password'
                            className={`w-full p-2 bg-color-white  text-color-blue  rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}

                            placeholder='Password'
                            onChange={e => handleChange(e)}
                            value={password}
                            name='password'

                        />
                    </div>
                    <div>

                        <input
                            type='password'
                            className={`w-full p-2 bg-color-white  text-color-blue  rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}

                            placeholder='Comfirm Password'
                            onChange={e => handleChange(e)}
                            value={password2}
                            name="password2"

                        />
                    </div>
                    <div className="text-color-blue">
                        This site uses Gravatar so if you want a profile image, use a
                        Gravatar email.
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button type="submit" value='Register' className="btn  flex-1 bg-color-red text-color-white hover:bg-color-white hover:text-black"><b>Sign Up</b></button>
                    </div>
                    <p className="flex-1  lg:text-color-grey text-color-blue mt-4 text-center">
                        Already have an account? <Link className="flex-1  lg:text-color-hot-blue  text-color-red " to="/login"><b>Login</b></Link>
                    </p>
                </form>

            </div>

            {/* <img src={bgSat} alt="" className="hidden lg:block
        overflow-hidden absolute h-2/12 w-7/12 ml-24 right-32 bottom-12 filter blur-sm" /> */}
        </div>

    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register)
