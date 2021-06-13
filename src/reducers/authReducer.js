import { FETCH_USER } from '../actions/types';
import { createStore } from 'redux';

const authReducer = (state = { auth: false }, action) => {
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
};

const store = createStore(authReducer);

export default store;