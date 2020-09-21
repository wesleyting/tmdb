import React from 'react';
import SearchBar from './SearchBar';
import {  motion } from 'framer-motion';

const SearchPage = () => (
	<motion.main
	exit={{ opacity: 0 }} 
	animate={{ opacity:1 }} 
	initial={{ opacity:0 }}>
		<section className = "search-wrapper">
			<h1 className="search-title">Search Page</h1>
			<div className="search-content">
				<p>Looking for a particular movie?</p>
				<p>Refine your results by typing in a movie name.</p>
			</div>
			<SearchBar/>
		</section>
	</motion.main>
);

export default SearchPage;