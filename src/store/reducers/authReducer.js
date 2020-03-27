import { updateObject } from '../../utilities';

import { CLEAR_AUTH_ERROR, AUTH_LOADING, AUTH_ERROR,
       SET_CURRENT_USER} from '../actions/actionTypes';

const initialState = {
	isAuthenticated: false,
	user: {},
	token: '',
	error: null,
	loading: false,
};

const setCurrentUser = (state, action) => {
    return updateObject(state, {isAuthenticated: !!action.payload,
                                user: action.payload.user,
                                token: action.payload.token,
                                loading: false,})
};

const authLoading = (state, action) => {
    return updateObject(state, {loading: true})
};

const authError = (state, action) => {
    return updateObject(state, {error: action.error, loading: false})
};

const clearAuthError = (state, action) => {
    return updateObject(state, {error: null})
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER: return setCurrentUser(state, action);
        case AUTH_LOADING: return authLoading(state, action);
        case AUTH_ERROR: return authError(state, action);
        case CLEAR_AUTH_ERROR: return clearAuthError(state, action);
        default:return state
    }
};

export default reducer;