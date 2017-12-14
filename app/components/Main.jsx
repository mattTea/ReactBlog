var React = require('react');

var NavHeader = require('NavHeader');
var Header = require('Header');
var Home = require('Home');
var Blog = require('Blog');
var BlogList = require('BlogList');
var SideProjects = require('SideProjects');
var Footer = require('Footer');

var Main = (props) => {

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <NavHeader/>
      <Header/>
      <div className="row">
        <div className="columns small-12 medium-10 large-8 small-centered">
          {props.children}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

module.exports = Main;
