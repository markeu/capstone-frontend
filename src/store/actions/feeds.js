import { FETCH_FEED_FAIL, FETCH_FEED_SUCCESS, FETCH_FEED_START   } from './actionTypes';
import { request, makeUrl } from '../../utilities';

const token = localStorage.getItem('jwtToken');

export const fetchFeedSuccess = (feed) => {
    return {
        type: FETCH_FEED_SUCCESS,
        feeds: feed
    }
}

export const fetchFeedFail = ( error ) => {
    return {
        type: FETCH_FEED_FAIL,
        error: error
    }
}

export const fetchFeedStart = () => {
    return {
        type: FETCH_FEED_START
    }
}

export const fetchFeeds = () => async (dispatch) => {
	dispatch(fetchFeedStart());
	const url = makeUrl('/feeds');
	const res = await request(url, 'GET', null, token);
	if (res.statusCode !== 200) {
		return dispatch(fetchFeedFail(res));
	}
	const { data } = res;
	return dispatch(fetchFeedSuccess(data));
};