var React = require('react');

var BlogList = React.createClass({ //try not to use .createClass (deprecated)
  getInitialState: function () {
    return {
      title: 'blogListHoldingPage'
    }
  },

  render: function () {
    var {title} = this.state;

    function renderBlogList () {
      return (
        <div>
          <h5>{title}</h5>;
        </div>
      )
    }

    return (
      <div>
        {renderBlogList}
        <p>BlogList component rendered</p>
      </div>
    );
  }
});

module.exports = BlogList;
