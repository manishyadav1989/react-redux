import * as actionType from './actionsType';

export function beginApiCall() {
	return { type: actionType.BEGING_API_CALL };
}

export function apiCallError() {
	return { type: actionType.API_CALL_ERROR };
}
