var React = require('react'); //try import React from 'react'

var About = () => {

  return (
    <div className="container">
      <h2>mattTea</h2>
      <img className="authorImg" alt="Author: matt Tea" src={require('../../public/images/mattTea.PNG')}></img>
      <div className="author-blurb">
        <p><br/>Long time BA with a newfound love of all things dev.<br/>
        I lead the business analysis for ecommerce at an awesome UK retailer and try my best to disrupt our traditional tech roles.<br/>
        And I race bicycles.
        </p>
        <p>I'm sharing my cross-role experiences, particularly around learning to code, in the hope that others will do the same, and we can share the ups and downs of pushing the traditional boundaries of our roles in whatever ways interest us.</p>
      </div>
    </div>
  );
}

module.exports = About;
