import * as actionType from './../actions/actionsType';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
	switch (action.type) {
		case actionType.CREATE_COURSE_SUCCESS:
			return [...state, { ...action.course }];
		case actionType.UPDATE_COURSE_SUCCESS:
			return state.map((course) => {
				return course.id === action.course.id ? action.course : course;
			});
		case actionType.LOAD_COURSES_SUCCESS:
			return action.courses;
		case actionType.DELETE_COURSE:
			return state.filter((course) => course.id !== action.course.id);
		default:
			return state;
	}
}
