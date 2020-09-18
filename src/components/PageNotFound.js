import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const PageNotFound = () => (
	<main>
		<motion.section className = "page-not-found"
		            exit={{ opacity: 0 }} 
					animate={{ opacity:1 }} 
					initial={{ opacity:0 }}>
			<div className="not-found-info">
				<h1>404 <br></br>Page Not Found</h1>
				<p>Oops! The page you are trying to view does not exist or an error occurred.</p>
			</div>
			<div className="not-found-text">
				<p>Click <Link to={'/'}>here</Link> to go back to the home page.</p>
			</div>
		</motion.section>
	</main>
);


export default PageNotFound;