import * as actionType from './actionsType';
import * as courseServices from './../../services/courseService';
import { beginApiCall, apiCallError } from './apiStatusAction';

export function loadCourseSuccess(courses) {
	return { type: actionType.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
	return { type: actionType.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
	return { type: actionType.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess(course) {
	return { type: actionType.DELETE_COURSE, course };
}

export function loadCourses() {
	return function(dispatch) {
		dispatch(beginApiCall());

		return courseServices
			.getCourses()
			.then((courses) => {
				dispatch(loadCourseSuccess(courses));
			})
			.catch((error) => {
				dispatch(apiCallError());
				throw error;
			});
	};
}

export function saveCourse(course) {
	return function(dispatch) {
		dispatch(beginApiCall());
		return courseServices
			.saveCourse(course)
			.then((savedCourse) => {
				course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
			})
			.catch((error) => {
				dispatch(apiCallError());
				throw error;
			});
	};
}

export function deleteCourse(course) {
	return function(dispatch) {
		dispatch(deleteCourseSuccess(course));
		return courseServices.deleteCourse(course.id);
	};
}
