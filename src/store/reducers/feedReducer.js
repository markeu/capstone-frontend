import { updateObject } from '../../utilities';
import { FETCH_FEED_FAIL, FETCH_FEED_SUCCESS, FETCH_FEED_START   } from '../actions/actionTypes';

const initialState = {
	feeds: [],
	error: null,
	loading: false,
};

const fetchOrderStart = (state, action) => {
    return updateObject(state, {loading: true})
};

const fetchOrderSuccess = (state, action) => {
    return updateObject(state, {loading: false, feeds: action.feeds })
};

const fetchOrderFail = (state, action) => {
    return updateObject(state, {loading: false})
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FEED_START: return fetchOrderStart(state, action);
        case FETCH_FEED_SUCCESS: return fetchOrderSuccess(state, action);
        case FETCH_FEED_FAIL: return fetchOrderFail(state, action);
        default:return state
    }
};

export default reducer;