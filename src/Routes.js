// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Events from 'pages/Events';
import Notices from 'pages/Notices';
import Join from 'pages/Join';
import WelcomeJoin from 'pages/WelcomeJoin';
import EventPage from 'pages/EventPage';
import Gallery from 'pages/Gallery';
import Contact from 'pages/Contact';
import Holidays from 'pages/Holidays';

const Routes = () => {
  return (
    <Switch>
      <Route path="/welcome">
        <WelcomeJoin />
      </Route>
      <Route path="/join">
        <Join />
      </Route>
      <Route path="/notices">
        <Notices />
      </Route>
      <Route path="/events/:id">
        <EventPage />
      </Route>
      <Route path="/events">
        <Events />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/holidays">
        <Holidays />
      </Route>
    </Switch>
  );
};

export default Routes;
