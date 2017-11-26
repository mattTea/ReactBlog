var React = require('react'); //try import React from 'react'

var Social = require('Social');

var Footer = (props) => {

  return (
    <div>
      <Social />
      <div id="footer">
        <div className="container">
          <p>mattTea | B.A(ng)</p>
        </div>
      </div>
    </div>
  )
}

module.exports = Footer;
