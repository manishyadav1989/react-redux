const courses = [
	{
		id: 1,
		title: 'Securing React Apps with Auth0',
		slug: 'react-auth0-authentication-security',
		authorId: 1,
		category: 'Javascript'
	},
	{
		id: 2,
		title: 'React Big Picture',
		slug: 'react-big-picture',
		authorId: 1,
		category: 'Javascript'
	},
	{
		id: 3,
		title: 'Creating Reusable React Components',
		slug: 'creating-reusable-react-components',
		authorId: 1,
		category: 'Javascript'
	},
	{
		id: 4,
		title: 'Building a JavaScript Development Environment',
		slug: 'building-javaScript-development-environment',
		authorId: 1,
		category: 'Javascript'
	},
	{
		id: 5,
		title: 'Building Application React with Redux',
		slug: 'building-application-react-with-redux',
		authorId: 1,
		category: 'Javascript'
	},
	{
		id: 6,
		title: 'Building Application React with Flux',
		slug: 'building-application-react-with-flux',
		authorId: 1,
		category: 'Javascript'
	},
	{
		id: 7,
		title: 'Clean Code Writing For Human',
		slug: 'clean-code-for-human',
		authorId: 2,
		category: 'Software Practices'
	},
	{
		id: 8,
		title: 'Authentication Application for the Real World',
		slug: 'architecting-applications-javascript',
		authorId: 3,
		category: 'Software Architecture'
	}
];

const authors = [{ id: 1, name: 'Cory House' }, { id: 2, name: 'Scott Allen' }, { id: 3, name: 'Dan Wahlin' }];

const newCourse = {
	id: null,
	title: '',
	authorId: null,
	category: ''
};

module.exports = {
	newCourse,
	courses,
	authors
};
