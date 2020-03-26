import * as actionTypes from './actionTypes';
import { request, makeUrl } from '../../utilities';

export const fetchFeedSuccess = (order) => {
    return {
        type: actionTypes.FETCH_FEED_SUCCESS,
        order: order
    }
}

export const fetchFeedFail = ( error ) => {
    return {
        type: actionTypes.FETCH_FEED_FAIL,
        error: error
    }
}

export const fetchFeedStart = () => {
    return {
        type: actionTypes.FETCH_FEED_START
    }
}


export const fetchFeeds = () => async (dispatch) => {
	dispatch(fetchFeedStart());
	const url = makeUrl('/feeds');
	const res = await request(url, 'GET', null, token);
	if (res.statusCode !== 200) {
		return dispatch({ type: FETCH_FEED_FAIL, payload: res });
	}
	const { data } = res;
	return dispatch({ type: FETCH_FEED_SUCCESS, payload: data });
};