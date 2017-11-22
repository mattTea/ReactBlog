var React = require('react');

var NavHeader = require('NavHeader');
var Header = require('Header');
var Footer = require('Footer');

var Main = (props) => {

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <NavHeader/>
      <Header/>
      <div className="row">
        <div className="columns small-10 medium-8 large-8 small-centered">
          {props.children}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

module.exports = Main;
