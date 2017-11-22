var React = require('react'); //try import React from 'react'

var Header = (props) => {

  return (
    <div>
      <div className="headline">
          <div className="container">
              <div>
                  <h1><span>B.A(ng)</span></h1>
                  <h2>from business analyst to engineer</h2>
              </div>
              <div id="blurb">
                  <p>chatting about my experiences learning to code<br/>and still trying to be a business analyst</p>
              </div>
          </div>
      </div>
    </div>
  )
}

module.exports = Header;
