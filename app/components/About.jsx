var React = require('react'); //try import React from 'react'


var About = () => {

  //change all css tags wih correct jsx versions (i.e. className instead of class). Also, style?
  return (
    <div id="author" class="container" style="max-width: 600px">
      <h2 style="text-align: center">mattTea</h2>
      <img id="authorImg" src="mattTea.PNG" alt="matt Tea: Author"/>
      <div id="author-blurb">
        <p><br/>Long time BA with a newfound love of all things dev.<br/>
        I lead the business analysis for ecommerce at an awesome UK retailer and try my best to disrupt our traditional tech roles.<br/>
        And I race bicycles.
        </p>
        <p>I'm sharing my cross-role experiences, particularly around learning to code, in the hope that others will do the same, and we can share the ups and downs of pushing the traditional boundaries of our roles in whatever ways interest us.</p>
      </div>
      <div style="text-align:center;line-height:40px">
        <a href="https://github.com/mattTea" target="_blank">
          <img src="GitHub-Mark-64px.png" style="width:26px;height:26px;border:0;vertical-align:top"/>
        </a>
        <a href="http://twitter.com/share" class="twitter-share-button" data-count="vertical">Tweet</a>
        <g:plusone></g:plusone>
      </div>
    </div>
  );
}

module.exports = About;
