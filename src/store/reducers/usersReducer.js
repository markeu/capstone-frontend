import { USERS_LOADING, USER_ERROR, GET_USERS, ADD_USER,
        CLEAR_USERS_ERROR} from '../actions/actionTypes';
import { updateObject } from '../../utilities';

const initialState = {
    users: [],
    error: null,
    loading: false,
};

const userLoading = (state, action) => {
    return updateObject(state, {loading: true})
}; 

const getUser = (state, action) => {
    return updateObject(state, {loading: false,
                                users: action.users.reverse(),
                                error: null,})
};

const addUser = (state, action) => {
    return updateObject(state, {loading: false,
                                users: [ action.users, ...state.users ],
                                error: null,})
};

const userError = (state, action) => {
    return updateObject(state, {error: action.users, loading: false,})
};

const clearUserError = (state, action) => {
    return updateObject(state, {error: null})
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USERS_LOADING: return userLoading(state, action);
        case GET_USERS: return getUser(state, action);
        case USER_ERROR: return userError(state, action);
        case ADD_USER: return addUser(state, action);
        case CLEAR_USERS_ERROR: return clearUserError(state, action);
        default:return state
    }
};

export default reducer;