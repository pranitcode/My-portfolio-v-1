import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ProjectPage from './components/pages/ProjectPage';
import BlogPage from './components/pages/BlogPage';

const routing = (

  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/project" component={ProjectPage} />
      <Route exact path="/blog" component={BlogPage} />
    </Switch>
  </Router>
);




ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
