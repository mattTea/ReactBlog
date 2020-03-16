var React = require('react'); //try import React from 'react'

var Social = require('Social');

var Footer = (props) => {

  return (
    <div>
      <Social />
      <div id="footer">
        <div className="container">
          <p>mattTea | B.A(ng)</p>
          <a href="https://app.cosmicjs.com/add-bucket?import_bucket=5884ea9522c70c1524000003"><img src="https://cdn.cosmicjs.com/51fe54d0-4f6e-11e9-9f32-8d001da69630-powered-by-cosmicjs.svg" /></a>
        </div>
      </div>
    </div>
  )
}

module.exports = Footer;
