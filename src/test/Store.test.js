import { createStore } from 'redux';
import rootReducer from './../redux/reducers';
import initialState from './../redux/reducers/initialState';
import * as actionCourse from './../redux/actions/courseAction';

it('Should handle creating courses', function(){
    const store = createStore(rootReducer, initialState);
    const course = {
        title: 'Clean Code'
    };

    const action = actionCourse.createCourseSuccess(course);
    store.dispatch(action);

    const createCourse = store.getState().courses[0];
    expect(createCourse).toEqual(course);
})