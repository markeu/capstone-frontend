import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import feedReducer from './store/reducers/feedReducer';
import authReducer from './store/reducers/authReducer';
import userReducer from './store/reducers/usersReducer';

const rootReducer = combineReducers({
    feeds: feedReducer,
    auth: authReducer,
    users: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
         </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

