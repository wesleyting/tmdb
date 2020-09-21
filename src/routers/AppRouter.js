import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import { APP_FOLDER_NAME } from '../globals/variables';


const AppRouter = () => (
	<Router basename={APP_FOLDER_NAME}>
		<div className="wrapper">
            <Header />
            <Nav />
            <Switch>
                <Route path={'/'} exact><Home /></Route>
				<Route path={'/about'}><About /></Route>
				<Route path={'/favorites'} exact><Favorites /></Route>
                <Route path={'/search/'} exact><SearchPage /></Route>
                <Route path={'/search/:query'} exact><SearchResults /></Route>
                <Route path={'/movie/:id'} exact><SingleMovie /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;