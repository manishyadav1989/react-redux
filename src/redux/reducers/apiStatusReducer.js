import * as actionType from './../actions/actionsType';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
	return type.substring(type.length - 8) === '_SUCCESS';
}
export default function apiCallStatusReducer(state = initialState.apiCallsInProgres, action) {
	if (action.type == actionType.BEGING_API_CALL) {
		return state + 1;
	} else if (actionType.API_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
		return state > 0 ? state - 1 : state;
	}

	return state;
}
