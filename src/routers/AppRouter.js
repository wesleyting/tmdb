import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Favorites from '../components/Favorites';
import SearchResults from '../components/SearchResults';
import PageNotFound from '../components/PageNotFound';
import SingleMovie from '../components/SingleMovie';
import SearchPage from '../components/SearchPage';


const AppRouter = () => (
	<Router>
		<div className="wrapper">
            <Header />
            <Nav />
            <Switch>
                <Route path={'/'} exact><Home /></Route>
				<Route path={'/about'}><About /></Route>
				<Route path={'/favorites'} exact><Favorites /></Route>
                <Route path={'/search-page'}><SearchPage /></Route>
				<Route path={'/search/:query'} component={SearchResults} exact></Route>
                <Redirect from={'/search/movie/:id'} to={'/movie/:id'} />
                <Route path={'/movie/:id'} component={SingleMovie} exact></Route>
				<Route path={'/*'}><PageNotFound /></Route>
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;