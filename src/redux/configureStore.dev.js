import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

export default function configureStore(initialState) {
	const compseEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(rootReducer, initialState, composeWithDevTools(compseEnhancers(applyMiddleware(thunk))));
}
