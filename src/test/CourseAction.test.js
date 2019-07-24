import * as courseAction from './../redux/actions/courseAction';
import * as types from './../redux/actions/actionsType';
import {courses} from './../../tools/mockData';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Action', ()=>{
    afterEach(()=>{
        fetchMock.restore();
    });

    describe('Load Course Thunk', ()=>{
        it('Should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses', ()=>{
            fetchMock.mock('*', {
                body:courses,
                headers: {contentType:'application/json'}
            });

            const expectedActions = [
                {type: types.BEGING_API_CALL},
                {type: types.LOAD_COURSES_SUCCESS, courses}
            ];

            const store = mockStore({courses:[]});
            return store.dispatch(courseAction.loadCourses()).then(()=>{
                expect(store.getActions()).toEqual(expectedActions);
            })
        });
    })
});

describe('create course success', ()=>{
    it('should create a CREATE_COURSE_SUCCESS', ()=>{
        const course = courses[0];
        const expectedAction = {
            type: types.CREATE_COURSE_SUCCESS,
            course
        }

        const action = courseAction.createCourseSuccess(course);
        expect(action).toEqual(expectedAction);
    });
});