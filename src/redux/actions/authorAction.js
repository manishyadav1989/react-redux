import * as actionType from './actionsType';
import * as authorService from './../../services/authorService';
import { beginApiCall, apiCallError } from './apiStatusAction';

export function loadAuthorSuccess(authors) {
	return { type: actionType.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
	return function(dispatch) {
		dispatch(beginApiCall());

		return authorService
			.getAuthors()
			.then((authors) => {
				dispatch(loadAuthorSuccess(authors));
			})
			.catch((error) => {
				dispatch(apiCallError());
				throw error;
			});
	};
}
