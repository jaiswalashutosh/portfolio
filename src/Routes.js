import React from 'react';
import { HashRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import About from './components/About';
// import Articles from './components/Articles';
// import OpenSource from './components/OpenSource';
// import Projects from './components/Projects';
import Header from './Header';
import Footer from './Footer';

const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" element={<About />} />
                {/* <Route path="/articles" element={<Articles />} /> */}
                {/* <Route path="/open-source" element={<OpenSource />} /> */}
                {/* <Route path="/projects" element={<Projects />} /> */}
            </Switch>
            <Footer />
        </Router>
    );
};

export default Routes;