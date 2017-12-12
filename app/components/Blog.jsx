var React = require('react');


// I have the content of the blog object already pulled in and known in the BlogList component
// * Can I use this and pass it to the Blog component so it renders the specific blog that is linked from?
// * Blog will always render first time with blog at [0] in Home page
// * Prev and Next arrows will scroll through array
// * Can I make the blog attributes (in BlogList) the props to pass into the Blog component somehow?


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
