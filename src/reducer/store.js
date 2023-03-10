import {applyMiddleware, createStore} from 'redux';
import rootReducer from '.';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
