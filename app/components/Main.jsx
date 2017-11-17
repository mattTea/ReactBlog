var React = require('react');

var NavHeader = require('NavHeader');

// this component to contain static Header & Footer

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
