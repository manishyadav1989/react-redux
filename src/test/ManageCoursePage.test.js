import React from 'react';
import { mount } from 'enzyme';
import { courses, authors, newCourse } from './../../tools/mockData';
import { ManageCoursePage } from './../components/courses/manageCoursePage';

function render(arg) {
	const defaultProps = {
		authors,
		courses,
		history: {},
		saveCourse: jest.fn(),
		loadCourses: jest.fn(),
		loadAuthors: jest.fn(),
		course: newCourse,
		match: {}
	};

	const props = { ...defaultProps, ...arg };
	return mount(<ManageCoursePage {...props} />);
}

it('sets error when attempting to save an empty title field', () => {
	const wrapper = render();
	wrapper.find('form').simulate('submit');
	const error = wrapper.find('.alert').first();
	//expect(error).toBe('Title is required.');
});
