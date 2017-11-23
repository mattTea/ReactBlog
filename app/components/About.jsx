var React = require('react'); //try import React from 'react'

// error when navigating to social section (need componentDidMount? as not rendering properly) 

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
      <div className="social">
        <a href="https://github.com/mattTea" target="_blank">
          <img className="gitHubImg" src={require('../../public/images/GitHub-Mark-64px.png')}></img>
        </a>
        <a href="http://twitter.com/share" className="twitter-share-button" data-count="vertical">Tweet</a>
        <a><div className="g-plusone"></div></a>
      </div>
    </div>
  );
}

module.exports = About;
