import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Squash as Hamburger } from 'hamburger-react';
import { logout } from '../../actions/auth';


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const [isOpen, setOpen] = useState(false)

    const authLinks = (
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-5 uppercase text-xs lg:mr-32">
            <Link to="/">
                <button
                    type="button"
                    className="bg-color-red text-white rounded-md px-7 py-3 uppercase"
                    onClick={logout}
                >
                    Logout
                </button>
            </Link>
        </ul>
    )

    const guestLinks = (
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-5 uppercase text-xs lg:mr-32">

            <li className="cursor-pointer">
                <Link to="/developers">Developers</Link>
            </li>
            <Link to="/register">
                <button type="button" className="bg-color-blue text-white rounded-md px-7 py-3 uppercase">
                    Register
                </button>
            </Link>
            <Link to="/login">
                <button type="button" className="bg-color-red text-white rounded-md px-7 py-3 uppercase">
                    Login
                </button>
            </Link>
        </ul>
    )

    return (
        <>
            <nav className="flex items-center mx-7 my-3 min-w-screen ">
                <Link to="/" className="flex flex-1 items-center ">
                    <div className=" flex text-center items-center">

                        <h2 className="text-color-blue py-3 text-4xl lg:text-left mb-6">
                            <b><span className="text-color-red ">Dev</span>Social</b>
                        </h2>
                    </div>
                    {/* <h1 className="p-3 text-4xl font-amatic-sc text-secondary ">DevSocial</h1> */}
                </Link>
                 {!loading && (<> {isAuthenticated ? authLinks : guestLinks} </> )}   

                <div className="flex sm:hidden flex-1 justify-end  ">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </nav>

        </>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
