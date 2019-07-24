import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import todoApp from './reducers';
const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
};
const compseEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoApp, initialState, composeWithDevTools(compseEnhancers()));

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let counter = 0;
const unsubscribe = store.subscribe(() => {
	counter++;
	console.log(counter + ' :: ' + JSON.stringify(store.getState()));
});

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();
