import jwtDecode from 'jwt-decode';

import { USERS_LOADING, USER_ERROR, GET_USERS, ADD_USER, CLEAR_USERS_ERROR,
        CLEAR_AUTH_ERROR, AUTH_LOADING, AUTH_ERROR, SET_CURRENT_USER
} from './actionTypes';
import { request, makeUrl } from '../../utilities';

const token = localStorage.getItem('jwtToken');

//User actions

export const setLoading = () => ({ type: USERS_LOADING });

export const userError = ( errors ) => {
    return {
        type: USER_ERROR,
        errors: errors
    };
};

export const userFetchSucess = (user) => {
    return {
        type: GET_USERS,
        users: user
    };
};

export const postUser = (user) => {
    return {
        type: ADD_USER,
        users: user
    };
};

export const getUsers = () => async (dispatch) => {
	dispatch(setLoading());
	const url = makeUrl('/auth/users');
	const res = await request(url, 'GET', null, token);
	if (res.statusCode !== 200) {
		return dispatch( userError(res) );
	}
	const { data } = res;
	return dispatch( userFetchSucess(data) );
};

export const addUser = (userData) => async (dispatch) => {
	const url = makeUrl('/auth/create-user');
	dispatch(setLoading());
	const res = await request(url, 'POST', userData, token);
	if (res.statusCode === 422) {
		const error = Object.values(res.errors).join(',').toString();
		return dispatch( userError(error) );
	}
	if (res.statusCode !== 201) {
		return dispatch( userError(res.error) );
	}
	const { data } = res;
	return dispatch( postUser(data) );
};

export const clearError = () => (dispatch) => {
	dispatch({ type: CLEAR_USERS_ERROR });
};

//Auth actions

export const authLoading = () => ({ type: AUTH_LOADING });

export const authError = ( error ) => {
    return {
        type: AUTH_ERROR,
        error: error
    };
};

export const loginUser = (userData) => async (dispatch) => {
	const uri = makeUrl('/auth/signin');
	dispatch( authLoading() );
	const data = await request(uri, 'POST', userData);
	if (data.statusCode !== 200) {
		return dispatch( authError(data) );
	}
	const { data: resPayload } = data;
	const { token } = resPayload;
	localStorage.setItem('jwtToken', token);
	const user = jwtDecode(token);
	return dispatch({ type: SET_CURRENT_USER, payload: { user, token } });
};

export const clearAuthError = () => (dispatch) => {
	dispatch({ type: CLEAR_AUTH_ERROR });
};