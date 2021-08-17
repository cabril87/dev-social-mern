import React from 'react';
import PropTypes from 'prop-types';
import { deleteExperience } from '../../actions/profile';
import { connect } from 'react-redux';
import Moment from 'react-moment'

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map(edu => (
        <tr key={edu._id}>
            <td className=' p-2 text-xs'>{edu.title}</td>
            <td className=' p-2 text-xs'>{edu.company}</td>
            <td className=' p-2 text-xs'>
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {' '}
                {edu.to  ? (

                    <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
                ) : (
                    ' Now '
                )}

            </td>
            <td>
                <button
                    className=" btn bg-color-red text-white text-center m-2 text-xs transform scale-50"
                    onClick={() => deleteExperience(edu._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    ))
    return (
        <section>
            <h2 className='text-color-blue text-2xl   my-8 mx-2'> <b>Education Credentials</b></h2>
            <table className="table-auto  text-left mx-2 p-2 leading-5 border-separate w-7/12">
                <thead >
                    <tr >
                        <th className=' shadow  p-2 bg-color-grey text-color-blue text-sm'>School</th>
                        <th className=' shadow  p-2 bg-color-grey text-color-blue text-sm'>Degree</th>
                        <th className=' shadow  p-2 bg-color-grey text-color-blue text-sm'>Years</th>
                        <th className=' shadow  p-2 bg-color-grey text-color-blue text-sm' />
                    </tr>
                </thead>
                <tbody className='m-2'>{experiences}</tbody>
            </table>
        </section>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
