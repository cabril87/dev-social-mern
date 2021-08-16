import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faYoutubeSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });
    const [toggleSocial, setToggleSocial] = useState(false)

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        createProfile(formData, history)
    }

    return (
        <>
            <section className="lg:items-center lg:w-full bg-white p-20 mt-20">
                <div className="flex flex-col items-center ">

                    <h1 className="text-color-blue text-6xl text-center  mb-2">
                        <b>Create Your </b><b className="text-color-red text-8xl">Profile</b>
                    </h1>
                    <div className="text-left">

                    </div>
                    <p className="text-color-grey text-lg text-center  mt-10 ">
                        Let's get some information to make your
                        profile stand out
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
                    onSubmit={e => handleSubmit(e)}
                >
                    <div className="form-group mb-4">
                        <select
                            name="status"
                            className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={status}
                            onChange={e => handleChange(e)}
                        >
                            <option value="0">* Select Professional Status</option>
                            <option value="Developer">Developer</option>
                            <option value="Junior Developer">Junior Developer</option>
                            <option value="Senior Developer">Senior Developer</option>
                            <option value="Manager">Manager</option>
                            <option value="Student or Learning">Student or Learning</option>
                            <option value="Instructor">Instructor or Teacher</option>
                            <option value="Intern">Intern</option>
                            <option value="Other">Other</option>
                        </select>
                        <small className="text-color-blue text-xs italic">
                            Give us an idea of where you are at in your career
                        </small>
                    </div>
                    <div className="form-group mb-4">
                        <input
                            type="text"
                            placeholder="Company"
                            name="company"
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={company}
                            onChange={e => handleChange(e)}
                        />
                        <small className="text-color-blue text-xs italic">
                            Could be your own company or one you work for
                        </small>
                    </div>
                    <div className="form-group mb-4">
                        <input
                            type="text"
                            placeholder="Website"
                            name="website"
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={website}
                            onChange={e => handleChange(e)}
                        />
                        <small className="text-color-blue text-xs italic">
                            Could be your own or a company website
                        </small>
                    </div>
                    <div className="form-group mb-4">
                        <input
                            type="text"
                            placeholder="Location"
                            name="location"
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={location}
                            onChange={e => handleChange(e)}
                        />
                        <small className="text-color-blue text-xs italic">
                            City & state suggested (eg. Boston, MA)
                        </small>
                    </div>
                    <div className="form-group mb-4">
                        <input
                            type="text"
                            placeholder="* Skills"
                            name="skills"
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={skills}
                            onChange={e => handleChange(e)}
                        />
                        <small className="text-color-blue text-xs italic">
                            Please use comma separated values (eg.
                            HTML,CSS,JavaScript,PHP)
                        </small>
                    </div>
                    <div className="form-group mb-4">
                        <input
                            type="text"
                            placeholder="Github Username"
                            name="githubusername"
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={githubusername}
                            onChange={e => handleChange(e)}
                        />
                        <small className="text-color-blue text-xs italic">
                            If you want your latest repos and a Github link, include your
                            username
                        </small>
                    </div>
                    <div className="form-group mb-4">
                        <textarea
                            placeholder="A short bio of yourself"
                            name="bio"
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={bio}
                            onChange={e => handleChange(e)}
                        >

                        </textarea>
                        <small className="text-color-blue text-xs italic">Tell us a little about yourself</small>
                    </div>

                    <div className="my-2">
                        <button onClick={() => setToggleSocial(!toggleSocial)} type="button" className="btn flex-1 btn bg-color-red text-white text-center">
                            Add Social Network Links
                        </button>
                        <span className="text-color-grey text-xs"> Optional</span>
                    </div>
                    {toggleSocial &&
                        <>
                            <div className="form-group flex items-center md:ml-12 mt-4">
                                <FontAwesomeIcon icon={faTwitterSquare} className="text-3xl m-2 text-color-hot-blue" />
                                <input
                                    type="text"
                                    placeholder="Twitter URL"
                                    name="twitter"
                                    className="m-3 h-1 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={twitter}
                                    onChange={e => handleChange(e)}
                                />
                            </div>

                            <div className="form-group flex items-center md:ml-12">
                                <FontAwesomeIcon icon={faFacebookSquare} className="text-3xl m-2 text-color-hot-blue" />
                                <input
                                    type="text"
                                    placeholder="Facebook URL"
                                    name="facebook"
                                    className="m-3 h-1 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={facebook}
                                    onChange={e => handleChange(e)}
                                />
                            </div>

                            <div className="form-group flex items-center md:ml-12">
                                <FontAwesomeIcon icon={faYoutubeSquare} className="text-3xl m-2 text-color-hot-blue" />
                                <input
                                    type="text"
                                    placeholder="YouTube URL"
                                    name="youtube"
                                    className="m-3 h-1 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={youtube}
                                    onChange={e => handleChange(e)}
                                />
                            </div>

                            <div className="form-group flex items-center md:ml-12">
                                <FontAwesomeIcon icon={faLinkedin} className="text-3xl m-2 text-color-hot-blue" />
                                <input
                                    type="text"
                                    placeholder="Linkedin URL"
                                    name="linkedin"
                                    className="m-3 h-1 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={linkedin}
                                    onChange={e => handleChange(e)}
                                />
                            </div>

                            <div className="form-group flex items-center md:ml-12">
                                <FontAwesomeIcon icon={faInstagramSquare} className="text-3xl m-2 text-color-hot-blue" />
                                <input
                                    type="text"
                                    placeholder="Instagram URL"
                                    name="instagram"
                                    className="m-3 h-1 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={instagram}
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                        </>}

                    <input type="submit" className="btn flex-1 btn bg-color-blue text-white text-center mr-3 w-32 h-12 mt-4" />
                    <a className=" flex-1 text m-3 w-32 h-16 text-xs text-color-red" href="dashboard.html"><b>Go Back</b></a>
                </form>
            </section>

        </>
    )
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
}


export default connect(null, { createProfile })(withRouter(CreateProfile));
