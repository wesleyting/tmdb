import React from 'react';
import SearchBar from './SearchBar';
import {  motion } from 'framer-motion';

const SearchPage = () => (
	<motion.main
	exit={{ opacity: 0 }} 
	animate={{ opacity:1 }} 
	initial={{ opacity:0 }}>
		<section className = "search-wrapper">
			<h1>Search Page</h1>
			<p>Looking for a particular movie?</p>
			<p>Refine your results by typing in a movie name.</p>
			<SearchBar/>
		</section>
	</motion.main>
);

export default SearchPage;