import React from 'react';
import SearchBar from './SearchBar';

const SearchPage = () => (
	<main>
		<section className = "content-wrapper">
			<h1>Search Page</h1>
			<p>Looking for a particular movie? Refine your results by typing in a movie name.</p>
			<SearchBar/>
		</section>
	</main>
);


export default SearchPage;