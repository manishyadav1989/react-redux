import courseReducer from './../redux/reducers/courseReducer';
import * as actions from './../redux/actions/courseAction';

it('should add course when paased CREATE_COURSE_SUCCESS', ()=>{
    const initialState = [
        {title: 'A'},
        {title:'B'}
    ];

    const newCourse = {
        title:'C'
    }

    const action = actions.createCourseSuccess(newCourse);
    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
});

it('should update course when paased UPDATE_COURSE_SUCCESS  ', ()=>{
    const initialState = [
        {id:1, title: 'A'},
        {id:2, title: 'B'},
        {id:3, title: 'C'}
    ];

    const newCourse = {
        title:'C'
    }

    const course = {id:2, title: 'New title'};
    const action = actions.updateCourseSuccess(course);
    
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id === course.id);
    const untouchCourse = newState.find(a => a.id == 1);

    expect(newState.length).toEqual(3);
    expect(updatedCourse.title).toEqual('New title');
    expect(untouchCourse.title).toEqual('A');
})