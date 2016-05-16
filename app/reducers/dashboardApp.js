import { FLAG_ERROR, REMOVE_ERROR, ADD_LOG_ENTRY } from '../actions/actions';
const NUMBER_OF_LOG_ENTRIES = 10;

const initialState = {
    hasError: false,
    logs: []
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
        case ADD_LOG_ENTRY:
            if (state.logs.length < NUMBER_OF_LOG_ENTRIES) {
                return Object.assign({}, state, {
                    logs: state.logs.concat([action.data])
                });
            } else {
                return Object.assign({}, state, {
                    logs: state.logs.slice(1, NUMBER_OF_LOG_ENTRIES).concat([data])
                });
            }
        default:
            return state;
    }
}

export default dashboardApp;