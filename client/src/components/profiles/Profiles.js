import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BounceLoader } from "react-spinners";
import { getProfiles, getCurrentProfile } from '../../actions/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';

const Profiles = ({ getProfiles, getCurrentProfile, auth: { user }, profile: { Profiles, loading } }) => {

    useEffect(() => {
        getProfiles()
    }, [])

    return (
        <>

            {loading ? <BounceLoader /> :
                (<section className='my-10'>

                    <p className="text-color-grey text-lg text-center  mx-10 my-2">
                        <b className="text-2xl text-color-blue">
                            {!user ? 'Devanators' : 'Hi, '}
                        </b>
                        <span className="text-2xl text-color-red">
                            {user ? user && user.name.toUpperCase() : ''}
                        </span>
                    </p>
                    <p className="flex-1 flex-wrap text-color-grey text-lg text-center   ">
                        Say hi to some fellow Devanators
                    </p>
                    <div class="p-12">
                        <div class="bg-white flex items-center rounded-full shadow-xl">
                            <input className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                            <div class="p-4">
                                <button class="bg-color-blue text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                                <FontAwesomeIcon icon={faSearch} className="text-3xl m-2 text-color-hot-blue" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                )}
        </>
    )
}

Profiles.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
})
export default connect(mapStateToProps, { getProfiles, getCurrentProfile })(Profiles)
