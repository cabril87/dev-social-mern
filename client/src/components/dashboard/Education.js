import React from 'react';
import PropTypes from 'prop-types';
import { deleteEducation } from '../../actions/profile';
import { connect } from 'react-redux';
import Moment from 'react-moment'

const Education = ({ education, deleteEducation }) => {
    const educations = education.map((edu, i) => (
        <tr key={i}>
            <td className=' p-2 text-xs'>{edu.school}</td>
            <td className=' p-2 text-xs'>{edu.degree}</td>
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
                    onClick={() => deleteEducation(edu._id)}
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
                <tbody className='m-2'>{educations}</tbody>
            </table>
        </section>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
