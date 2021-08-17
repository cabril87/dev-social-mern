import axios from 'axios';
import { setAlert } from './alert';


import {
    GET_PROFILE,
    GET_PROFILES,
    UPDATE_PROFILE,
    PROFILE_ERROR,
    ACCOUNT_DELETED,
    CLEAR_PROFILE,
    GET_REPOS
} from './types';

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}
//get all profiles
export const getProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE });
    try {
        const res = await axios.get('/api/profile');

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}
//get all profile by ID
export const getProfileById = (userId) => async dispatch => {
    
    try {
        const res = await axios.get(`/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}
//create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'purple'));

        if (!edit) {
            history.push('/dashboard')
        }

    } catch (error) {
        const errors = error.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'red')))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}
//add experience
export const addExperience = (formData, history) => async dispatch => {
    try {
        const res = await axios.put('/api/profile/experience', formData);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Experience Added', 'purple'));

        history.push('/dashboard');
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'red')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add Education
export const addEducation = (formData, history) => async dispatch => {
    try {
        const res = await axios.put('/api/profile/education', formData);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Education Added', 'purple'));

        history.push('/dashboard');

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'red')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Delete experience
export const deleteExperience = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/experience/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Experience Removed', 'purple'));
    } catch (err) {

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}


//Delete education
export const deleteEducation = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/education/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Education Removed', 'purple'));
    } catch (err) {

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

//Delete account & profile
export const deleteAccount = () => async dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {

        try {
            await axios.delete(`/api/profile`)

            dispatch({type: CLEAR_PROFILE })
            dispatch({type: ACCOUNT_DELETED })

            dispatch(setAlert('Your account has been permanantly deleted', 'red'));
        } catch (err) {

            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }
}

//get github repos
export const getGithubRepos = username => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/github/${username}`);

        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}