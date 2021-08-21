import { ADD_IMAGE, GET_IMAGES } from '../actions/types';

const initialState = {
    images: []
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_IMAGE:
            return {
                ...state,
                images: [
                    payload,
                    ...state.images
                ]
            };
        case GET_IMAGES:
            return {
                ...state,
                images: payload
            };
        default:
            return state;
    }
}