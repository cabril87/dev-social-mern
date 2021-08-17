import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment'

const Education = ({ education }) => {
    const educations = education.map(edu => (
        <tr key={edu.id}>
            <td className=' p-2 text-xs'>{edu.school}</td>
            <td className=' p-2 text-xs'>{edu.degree}</td>
            <td className=' p-2 text-xs'>
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {' '}
                {edu.to === null ? (
                    ' Now '
                ) : (
                    <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
                )}

            </td>
            <td>
                <button className=" btn bg-color-red text-white text-center m-2 text-xs transform scale-50">Delete</button>
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
                        <th className=' shadow  p-2 bg-color-grey text-color-blue text-sm'/>
                    </tr>
                </thead>
                <tbody className='m-2'>{educations}</tbody>
            </table>
        </section>
    )
}

Education.propTypes = {
    experience: PropTypes.array.isRequired,
}

export default Education
