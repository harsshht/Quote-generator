import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/quoteReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
