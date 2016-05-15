import { FLAG_ERROR, REMOVE_ERROR } from '../actions/actions';

const initialState = {
  hasError: false  
};

function dashboardApp(state = initialState, action) {
    switch (action.type) {
        case FLAG_ERROR: 
            return Object.assign({}, state, {
                hasError: true
            });
        case REMOVE_ERROR: 
            return Object.assign({}, state, {
                hasError: false
            });
        default:
            return state;
    }
}

export default dashboardApp;