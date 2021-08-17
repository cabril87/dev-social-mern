import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ProfileItem from './ProfileItem';
import { connect } from 'react-redux'
import { BounceLoader } from "react-spinners";
import { getProfiles, getCurrentProfile } from '../../actions/profile';
import SearchBar from '../search/SearchBar';


const Profiles = ({ getProfiles, getCurrentProfile, auth: { user }, profile: { profiles, loading } }) => {

    useEffect(() => {
        getProfiles()
        getCurrentProfile()
    }, [])

    return (
        <>

            {loading ? <BounceLoader /> :
                (<section className='my-10 '>

                    <p className="text-color-grey text-lg text-center  mx-10 my-2">
                        <b className="text-2xl text-color-blue">
                            {!user ? 'Devanators' : 'Hi, '}
                        </b>
                        <span className="text-2xl text-color-red">
                            {user ? user && user.name.toUpperCase() : ''}
                        </span>
                    </p>
                    <p className="flex-1 flex-wrap text-color-grey text-lg text-center   ">
                        Browse and connect with Devanators
                    </p>
                    <SearchBar />
                    <div className=' container  mx-auto px-4 flex flex-wrap justify-center md:justify-center'>
                        <div className="flex flex-wrap text-center m-4">

                        {profiles.length > 0 ? (profiles.map(profile => (
                            <ProfileItem key={profile._id} profile={profile} />
                        ))) : <h4>No profiles found.... </h4>}
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
