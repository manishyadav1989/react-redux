import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as courseActions from './../../redux/actions/courseAction';
import * as authorActions from './../../redux/actions/authorAction';
import CourseList from './CourseList';
import Spinner from './../common/Spinner';
import { toast } from 'react-toastify';

class CoursesPage extends Component {
	componentDidMount() {
		const { courses, authors, actions } = this.props;
		if (courses.length === 0) {
			actions.loadCourses().catch((error) => {
				alert(`Loading courses failed ${error}`);
			});
		}

		if (authors.length === 0) {
			actions.loadAuthors().catch((error) => {
				alert(`Loading authors failed ${error}`);
			});
		}
	}
	handleChange = (event) => {
		const course = { ...this.state.course, title: event.target.value };
		this.setState({ course });
	};

	//handleSubmit = (event) => {
	//event.preventDefault();
	//this.props.dispatch(createCourse(this.state.course)); // use without mapDispactToProps property
	//this.props.createCourse(this.state.course); // single mehtod use in mapDispactToProps
	//this.props.actions(this.state.course); // use with action creator
	//this.props.createCourse(this.state.course); // use with mapDispactToProps object
	//};

	onDeleteClick = async (course) => {
		toast.success('Course Deleted Success!');
		try {
			await this.props.actions.deleteCourse(course);
		} catch (e) {
			toast.error('Delete failed ' + e.message, { autoClose: false });
		}
	};

	render() {
		return (
			<div>
				{this.props.loading ? (
					<Spinner />
				) : (
					<div>
						<h2>Courses</h2>
						<button style={{ marginBottom: 20 }} className='btn btn-primary add-course'>
							<Link to='/course/'>Add Course</Link>
						</button>
						<CourseList onDeleteClick={this.onDeleteClick} courses={this.props.courses} />
					</div>
				)}
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.any,
	loading: PropTypes.bool
};

function mapStateToProps(state) {
	return {
		courses:
			state.authors.length === 0
				? []
				: state.courses.map((course) => {
						return {
							...course,
							authorName: state.authors.find((a) => a.id === course.authorId).name
						};
					}),
		authors: state.authors,
		loading: state.apiCallsInProgress > 0
	};
}

function mapDispatchToProps(dispatch) {
	return {
		//createCourse: (course) => dispatch(createCourse(course)) // single method bind for redux state update
		actions: {
			loadCourses: bindActionCreators(courseActions.loadCourses, dispatch), // bind all action in single object
			loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch), // bind all action in single object
			deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
		}
	};
}

// user mapDispatchToProps as object
// const mapDispatchToProps = {
// 	createCourse: createCourse
// };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
