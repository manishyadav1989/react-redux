import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
	<div className='jumbotron'>
		<h1>React-Redux App</h1>
		<p>React, Redux and React router for responsive web app.</p>
		<Link to='about' className='btn btn-primary btn-lg'>
			Learn More
		</Link>
	</div>
);

export default HomePage;
