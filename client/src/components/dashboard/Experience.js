import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment'

const Experience = ({ experience }) => {
    const experiences = experience.map((exp) => (
        <tr key={exp._id}>
            <td className=' p-2 text-xs'>{exp.company}</td>
            <td className=' p-2 text-xs'>{exp.title}</td>
            <td className=' p-2 text-xs'>
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - 
                {exp.to === null ? (
                    <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
                    
                ) : (
                    ' Now '
                )}

            </td>
            <td>
                <button className=" btn bg-color-red text-white text-center m-2 text-xs transform scale-50">Delete</button>
            </td>
        </tr>
    ))
    return (
        <section>
            <h2 className='text-color-blue text-2xl   my-8 mx-2'> <b>Experience Credentials</b></h2>
            <table className="table-auto  text-left mx-2 p-2 leading-5 border-separate w-7/12">
                <thead >
                    <tr >
                        <th className=' shadow  p-2 bg-color-grey text-color-blue text-sm'>Company</th>
                        <th className=' shadow  p-2 bg-color-grey text-color-blue text-sm'>Title</th>
                        <th className=' shadow  p-2 bg-color-grey text-color-blue text-sm'>Years</th>
                        <th className=' shadow  p-2 bg-color-grey text-color-blue text-sm'/>
                    </tr>
                </thead>
                <tbody className='m-2 flex-1'>{experiences}</tbody>
            </table>
        </section>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
}

export default Experience
