import { createStore, applyMiddleware, combineReducers } from 'redux';
// import * as reducers from './TodoReducer';
import TodoReducer from './TodoReducer';

export default (data) => {
	// const reducer = combineReducers(reducers)
	const store = createStore(TodoReducer);
	
	console.log('store',store.getState())
	return store
}