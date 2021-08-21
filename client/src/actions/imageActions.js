import { ADD_IMAGE, GET_IMAGES, GET_ERRORS } from '../actions/types';
import axios from 'axios';
import history from '../history';


//ADD IMAGE
export const addImage = imageData => dispatch => {
    axios.post('/add', imageData).then(res => dispatch({
    type: ADD_IMAGE,
        payload: res.data
    })).catch (err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
history.push('/');
    };
//GET ALL IMAGES
export const getAllImages = () => dispatch => {
    axios.get('/').then(res => dispatch({
    type: GET_IMAGES,
        payload: res.data
    })).catch (err => dispatch({
            type: GET_IMAGES,
            payload: null
        }));
    };