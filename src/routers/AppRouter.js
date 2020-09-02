import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Favorites from '../components/Favorites';
import WatchLater from '../components/WatchLater';
import PageNotFound from '../components/PageNotFound';


const AppRouter = () => (
	<Router>
		<div className="wrapper">
            <Header />
            <Nav />
            <Switch>
                <Route path={'/'} exact><Home /></Route>
				<Route path={'/about'}><About /></Route>
				<Route path={'/favorites'} exact><Favorites /></Route>
				<Route path={'/watch-later'} exact><WatchLater /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;