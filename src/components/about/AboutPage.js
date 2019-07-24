import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
	<div>
		<h2>About</h2>
		<p>React, Redux and React router and other helpful library.</p>
		<Link to='/' className='btn btn-primary btn-lg'>
			Home
		</Link>
	</div>
);

export default AboutPage;
