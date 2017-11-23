var React = require('react');

var Blog = React.createClass({ //try not to use .createClass (deprecated)
  getInitialState: function () {
    return {
      title: 'blogHoldingPage'
    }
  },

  render: function () {
    var {title} = this.state;

    function renderBlog () {
      return (
        <div>
          <h5>{title}</h5>;
        </div>
      )
    }

    return (
      <div>
        {renderBlog}
        <p>Blog component rendered</p>
      </div>
    );
  }
});

module.exports = Blog;
