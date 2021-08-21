import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({ profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
}
}) => {
    return (
        <div>

        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileTop
