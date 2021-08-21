import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BounceLoader } from "react-spinners";
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop'

const Profile = ({
    match,
    getProfileById,
    profile: { profile, loading },
    auth : { isAuthenticated, user}
}) => {

    useEffect(() => {
        getProfileById(match.params.id)
    }, [getProfileById, match.params.id])

    return (
        <>
            {profile === null || loading ?
                <BounceLoader />
                :
                <section className=" h-screen">
                      <div class="grid grid-cols-1 md:grid-cols-1 w-full h-2/4">
                          <ProfileTop profile={profile} />
                      </div>
                    <Link to='/profiles' className='m-4 bg-color-grey'> Back to profiles</Link>
                    {
                        isAuthenticated &&
                        loading === false &&
                        user._id === profile.user._id &&
                        (<Link to='/edit-profile' className='m-4 bg-color-grey'>Edit profile</Link>)
                      }
                </section>}
        </>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile)
