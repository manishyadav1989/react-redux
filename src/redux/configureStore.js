if (process.env.APP_NODE_ENV === 'production') {
	module.exports = require('./configureStore.prod');
} else {
	module.exports = require('./configureStore.dev');
}
