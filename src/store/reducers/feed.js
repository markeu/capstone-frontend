import { updateObject } from '../../utilities';
import * as actionTypes from '../actions/actionTypes';

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
        case actionTypes.FETCH_FEED_START: return fetchOrderStart(state, action);
        case actionTypes.FETCH_FEED_SUCCESS: return fetchOrderSuccess(state, action);
        case actionTypes.FETCH_FEED_FAIL: return fetchOrderFail(state, action);
        default:return state
    }
};

export default reducer;