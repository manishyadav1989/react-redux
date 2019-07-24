const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);

// put delay on all requests
server.use((req, res, next) => {
	setTimeout(next, 2000);
});

server.use((req, res, next) => {
	if (req.method === 'POST') {
		req.body.createdAt = Date.now();
	}

	next();
});

server.post('/courses/*', (req, res, next) => {
	const error = validateCourses(req.body);
	if (error) {
		res.status(400).send(error);
	} else {
		req.body.slug = createSlug(req.body.title); // Generate a slug for new courses
		next();
	}
});

server.put('/courses/*', (req, res, next) => {
	const error = validateCourses(req.body);
	if (error) {
		res.status(400).send(error);
	} else {
		req.body.slug = createSlug(req.body.title); // Generate a slug for new courses
		next();
	}
});

server.patch('/courses/*', (req, res, next) => {
	const error = validateCourses(req.body);
	if (error) {
		res.status(400).send(error);
	} else {
		req.body.slug = createSlug(req.body.title); // Generate a slug for new courses
		next();
	}
});

server.use(router);

const port = 3001;
server.listen(port, () => {
	console.log(`JSON Server is running on port ${port}`);
});

function createSlug(value) {
	return value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
}

function validateCourses(course) {
	if (!course.title) return 'Title is required.';
	if (!course.authorId) return 'Author is required.';
	if (!course.category) return 'Category is required.';
	return '';
}
