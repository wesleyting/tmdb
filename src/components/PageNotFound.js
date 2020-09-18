import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../images/404.png';

const PageNotFound = () => (
	<main>
		<section className = "page-not-found">
			<div className="not-found-info">
				<img src={NotFoundImage}></img>
				<h1>Page Not Found</h1>
				<p>Oops! The page you are trying to view does not exist or an error occurred.</p>
			</div>
			<div className="not-found-text">
				<p>Click <Link to={'/'}>here</Link> to go back to the home page.</p>
			</div>
		</section>
	</main>
);


export default PageNotFound;