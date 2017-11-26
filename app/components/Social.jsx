var React = require('react'); //try import React from 'react'

var Social = () => {

  return (
    <div className="social">
      <a href="https://github.com/mattTea" target="_blank">
        <img className="gitHubImg" src={require('../../public/images/GitHub-Mark-64px.png')}></img>
      </a>
      <a href="http://twitter.com/share" className="twitter-share-button" data-count="vertical">Tweet</a>
      <a><div className="g-plusone"></div></a>
    </div>
  );
}

module.exports = Social;
