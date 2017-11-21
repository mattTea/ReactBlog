var React = require('react');

var NavHeader = require('NavHeader');

// this component to contain static Header & Footer

var Main = (props) => {
  return (
    // <div style={styles}>
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <NavHeader/>
      <div className="row">
        <div className="columns small-10 medium-6 large-6 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
