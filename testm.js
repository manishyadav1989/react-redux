const displayMessage = (msg) => console.log(`displaying... >>${msg}`);
const failureCallback = () => console.log('handling failure');

const wait = (ms) =>
	new Promise((resolve) =>
		setTimeout(() => {
			console.log('invoke settimeout fun!');
			return resolve();
		}, ms)
	);
wait(5000).then(displayMessage('5 seconds')).catch(failureCallback);

// const displayMessage = (msg) => console.log(`displaying... >>${msg}`);
// const failureCallback = () => console.log('handling failure');

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// wait(5000).then(() => displayMessage('5 seconds')).catch(failureCallback);

class MyPromise {
	constructor(executor) {
		this.$state = 'PENDING';
		this.$chained = [];

		const resolve = (res) => {
			if (this.$state !== 'PENDING') {
				return;
			}
			this.$state = 'FULFILLED';
			this.$internalValue = res;
			for (const { onFulfilled } of this.$chained) {
				onFulfilled(res);
			}
		};

		const reject = (err) => {
			if (this.$state !== 'PENDING') {
				return;
			}
			this.$state = 'REJECTED';
			this.$internalValue = err;
			for (const { onRejected } of this.$chained) {
				onRejected(err);
			}
		};

		try {
			executor(resolve, reject);
		} catch (err) {
			reject(err);
		}
	}
	then(onFulfilled, onRejected) {
		if (this.$state === 'FULFILLED') {
			onFulfilled(this.$internalValue);
		} else if (this.$state === 'REJECTED') {
			onRejected(this.$internalValue);
		} else {
			this.$chained.push({ onFulfilled, onRejected });
		}
	}
}

var p = new MyPromise((resolve) => {
	setTimeout(() => resolve('Hello world!'), 10000); // 10 sec
});

p.then((res) => {
	console.log(res);
});
