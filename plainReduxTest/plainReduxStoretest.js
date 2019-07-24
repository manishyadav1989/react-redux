import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const compseEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
};

function addTodo(text) {
	return { type: ADD_TODO, text };
}

function toggleTodo(index) {
	return { type: TOGGLE_TODO, index };
}

function setVisibilityFilter(filter) {
	return { type: SET_VISIBILITY_FILTER, filter };
}

function todoApp(state = initialState, action) {
	console.log(action.type + ' :: action.type');
	// For now, don't handle any actions
	// and just return the state given to us.
	console.log(`actions :: ${JSON.stringify(action)}`);
	switch (action.type) {
		case ADD_TODO:
			return Object.assign({}, state, {
				todos: [
					...state.todos,
					{
						text: action.text,
						completed: false
					}
				]
			});
		case SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			});
		case TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: state.todos.map((todo, index) => {
					if (index === action.index) {
						return Object.assign({}, todo, {
							completed: !todo.completed
						});
					}
					return todo;
				})
			});
		default:
			return state;
	}
}

const store = createStore(todoApp, initialState, composeWithDevTools(compseEnhancers()));

// Log the initial state
console.log('initialse state::' + store.getState());
let counter = 0;
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
	counter++;
	console.log(counter + ' subscribe state ::' + JSON.stringify(store.getState()));
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
