var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Home = require('Home');
var Blog = require('Blog');
var BlogList = require('BlogList');
var SideProjects = require('SideProjects');
var About = require('About');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles'); //applicationStyles module loaded using necessary loaders

ReactDOM.render(
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={Main}>
      <Route path="home" component={Home}/>
      <Route path="articles" component={BlogList}/>
      <Route path="side-projects" component={SideProjects}/>
      <Route path="about" component={About}/>
      <Route path="blog" component={Blog}/>
      <IndexRoute component={Home}/> {/* this renders if none of the above routes are matched */}
    </Route>
  </Router>,
  document.getElementById('app')
);
