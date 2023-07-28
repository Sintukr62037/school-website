// @flow
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'Routes';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import NavbarHamburgerMenu from './components/Navbar/NavbarHamburgerMenu';
import { NavbarHamburgerMenuProvider } from './components/Navbar/NavbarHamburgerMenu/NavbarHamburgerMenuContext';
import { LoaderProvider, useLoading, BallTriangle } from '@agney/react-loading';
import { Lines,Planets } from 'react-preloaders';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-nunito';
import 'typeface-raleway';

const page = (
  <React.StrictMode>
    <Router>
      <ScrollToTop />

      <NavbarHamburgerMenuProvider>
        <NavbarHamburgerMenu />
        <header>
          <Navbar />
        </header>
      </NavbarHamburgerMenuProvider>

      <main>
        <Routes />
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
    <Planets color="#100E17" time="1000" background="linear-gradient(to right,#5579FB,#D2E7EE,#6DD5FA)"/>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(page, rootElement);
} else {
  ReactDOM.render(page, rootElement);
}
