import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'
import { Link, withRouter } from 'react-router-dom'

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });



    const { school, degree, fieldofstudy, from, to, current, description } = formData;



    const handleSubmit = e => {
        e.preventDefault();
        addEducation(formData, history)
    }
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <section className="lg:items-center lg:w-full bg-white p-20 mt-20">
            <div className="flex flex-col items-center ">

                <h1 className="text-color-blue text-5xl text-center  mb-2">
                    <b>Add Your </b><b className="text-color-red text-6xl">Education</b>
                </h1>
                <div className="text-left">

                </div>
                <p className="text-color-grey text-lg text-center  mt-10 ">
                    Add any
                    education that you have had in the past
                </p>
                <small className="text-color-red mb-10 text-left">
                    <span className="text-black">
                        *
                    </span>
                    = required field
                </small>
            </div>
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <div className="form-group mb-4">
                    <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="* School"
                        name="school"
                        value={school}
                        onChange={onChange}

                        
                    />
                </div>
                <div className="form-group mb-4">
                    <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="* Degree or Certificate"
                        name="degree"
                        value={degree}
                        onChange={onChange}
                       
                    />
                </div>
                <div className="form-group mb-4">
                    <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="Field of Study"
                        name="fieldofstudy"
                        value={fieldofstudy}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group mb-4">
                    <h4>From Date</h4>
                    <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="date"
                        name="from"
                        value={from}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group mb-4">
                    <p>
                        <input
                            type="checkbox"
                            name="current"
                            checked={current}
                            value={current}
                            onChange={() => {
                                setFormData({ ...formData, current: !current });
                            }}
                        />{' '}
                        Still Attending
                    </p>
                </div>
                {!current ?
                    <div className="form-group mb-4">
                        <h4>To Date</h4>
                        <input
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="date"
                            name="to"
                            value={to}
                            onChange={onChange}
                            disabled={current}
                        />
                    </div>
                    :
                    ''
                }
                <div className="form-group mb-4">
                    <textarea
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Program Description"
                        value={description}
                        onChange={onChange}
                    />
                </div>
                <input type="submit" className="btn flex-1 btn bg-color-blue text-white text-center mr-3 w-32 h-12 mt-4" />
                <Link className=" flex-1 text m-3 w-32 h-16 text-xs text-color-red" to="/dashboard">
                    <b>Go Back</b>
                </Link>
            </form>
        </section>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(AddEducation)

