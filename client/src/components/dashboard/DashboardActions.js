import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div className='text-center'>
        <Link to='/edit-profile' className='btn bg-color-blue text-white text-center'>
           Edit Profile
        </Link>
        <Link to='/add-experience' className='btn bg-color-blue text-white text-center'>
           Add Experience
        </Link>
        <Link to='/add-education' className='btn bg-color-blue text-white text-center'>
          Add Education
        </Link>
      </div>
    )
}

export default DashboardActions
