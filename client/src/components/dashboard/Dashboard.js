import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile';
import { BounceLoader } from "react-spinners";
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';


const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])

    return (

        loading && profile === null ?
            <BounceLoader /> :
            <>
                <div>
                    <h1 className="text-color-blue text-6xl text-center  mb-36"><b>Dashboard</b></h1>
                    <p className="text-color-grey text-lg text-center  m-10 ">
                        <b className="text-2xl text-color-blue">Hi</b>, <span className="text-2xl text-color-red">{user && user.name.toUpperCase()}</span>
                    </p>
                    {profile !== null ?
                        <>
                            <DashboardActions />
                            <Experience experience={profile.experience} />
                            <Education education={profile.education} />
                        </>
                        :
                        <>
                            <div className="flex flex-col gap-6 items-center">
                                <p className="flex-1 flex-wrap text-color-grey text-lg text-center   ">You have not setup a profile, please add some info</p>
                                <Link to='/create-profile' >
                                    <button type="button" className="flex-1 btn bg-color-red text-white text-center ">
                                        Create Profile
                                    </button>
                                </Link>

                            </div>
                        </>
                    }
                </div>

            </>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
