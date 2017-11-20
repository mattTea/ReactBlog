var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Blog = require('Blog'); //build component
var BlogList = require('BlogList'); //build component
var SideProjects = require('SideProjects'); //build component
var About = require('About'); //build component

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles'); //applicationStyles module loaded using necessary loaders

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      {/* <Route path="blog" component={Blog}/> */}
      {/* <Route path="articles" component={BlogList}/> */}
      {/* <Route path="side-projects" component={SideProjects}/> */}
      {/* <Route path="about" component={About}/> */}
      {/* <IndexRoute component={About}/> */}
      {/* <IndexRoute component={Blog}/> {/* this renders if none of the above routes are matched */}
    </Route>
  </Router>,
  document.getElementById('app')
);
