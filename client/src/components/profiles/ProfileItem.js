import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ProfileItem = ({ profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
} }) => {
    return (
        <div className="bg-white shadow p-4 rounded w-full h-80  sm:w-56 md:w-60 lg:w-56 m-2 ">
            <div className="text-center mt-2">
                <h2 className="text-gray-600 font-bold w-full h-6">{name.toUpperCase()}</h2>
                <p className="text-sm font-hairline text-gray-600 mt-1 w-full h-12  items-center">{status} {company && <span> at {company}</span>}</p>

            </div>
            <div className="flex justify-center mt-4">
                <img src={avatar} alt="" className="shadow sm:w-12 sm:h-12 w-10 h-10 rounded-full" />
            </div>
            <div className="mt-6 flex justify-between text-center">
                <div>
                    <p className="text-gray-700 font-bold">20
                    </p>
                    <p className="text-xs mt-2 text-gray-600 font-hairline">Posts
                    </p>
                </div>
                <div>
                    <p className="text-gray-700 font-bold">99k
                    </p>
                    <p className="text-xs mt-2 text-gray-600 font-hairline">Likes
                    </p>
                </div>
                <div>
                    <p className="text-gray-700 font-bold">530
                    </p>
                    <p className="text-xs mt-2 text-gray-700 font-hairline">Shares
                    </p>
                </div>
            </div>
            <div className="mt-6">
                {/* <p className="my-1">{location && <span>{location}</span>}</p> */}
                <Link to={`/profile/${_id}`} >
                    <button className='rounded shadow-md w-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400'>
                        View My Profile
                    </button>
                </Link>

            </div>


            {/* <ul>
                {skills.slice(0, 4).map((skill, index) => (
                    <li key={index} >
                        {skill}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem
