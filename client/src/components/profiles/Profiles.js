import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ProfileItem from './ProfileItem';
import { connect } from 'react-redux'
import { BounceLoader } from "react-spinners";
import { getProfiles, getCurrentProfile } from '../../actions/profile';
import SearchBar from '../search/SearchBar';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';



const Profiles = ({ getProfiles, getCurrentProfile, auth: { user }, profile: { profiles, loading } }) => {
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        getProfiles()
        
    }, [getProfiles])

    const handleFilter = (e) => {
        const searchProfile = e.target.value;
        const newFilter = profiles.filter((value) => {
            return value.user.name.toLowerCase().includes(searchProfile)
        });
        if (searchProfile === '') {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

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
                    <p className="flex-1 flex-wrap text-black text-lg text-center   ">
                        Browse and connect with Devanators
                    </p>
                    

                        {filteredData.length === 0 ?
                            <SearchBar onChange={handleFilter} placeholder='Search' icon={faSearch} />
                            :
                            <SearchBar onChange={handleFilter} placeholder='Search' icon={faTimes} />
                        }
                   


                    <div className=' container  mx-auto px-4 flex flex-wrap justify-center md:justify-center'>

                        {
                            <div className="flex flex-wrap text-center m-4">

                                {filteredData.length !== 0 && (filteredData.slice(0, 15).map((value, key) => {
                                    return <ProfileItem key={value._id} profile={value} />

                                }
                                ))}
                            </div>
                        }
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
