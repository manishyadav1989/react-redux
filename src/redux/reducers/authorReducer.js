import * as actionType from './../actions/actionsType';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
	switch (action.type) {
		case actionType.LOAD_AUTHORS_SUCCESS:
			return action.authors;
		default:
			return state;
	}
}
