var React = require('react');
import ReactHtmlParser from 'react-html-parser';

var cosmic = require('cosmic');

// I have the content of the blog object already pulled in and known in the BlogList component
// * Can I use this and pass it to the Blog component so it renders the specific blog that is linked from?
// * Blog will always render first time with blog at [0] in Home page
// * Prev and Next arrows will scroll through array
// * Can I make the blog attributes (in BlogList) the props to pass into the Blog component somehow?

//start with displaying blog at [0]

var Blog = React.createClass({ //try not to use .createClass (deprecated)
  getInitialState: function () {
    return {
      isLoading: true,
      blogs: undefined
    }
  },

  componentWillMount: function (blogs) {
    var that = this;

    cosmic.getBlogs().then(function (blogs) {
      that.setState({
        blogs: blogs,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false}),
      alert(errorMessage);
    });
  },

  render: function () {
    var that = this;
    var {isLoading, blogs} = this.state;

    function renderBlog () {
      if (isLoading) {
        return <h5 className="text-center page-loading">Getting latest blog...</h5>;
      } else if (blogs) {
        var {title, created, content} = blogs.objects[0];
        var author = that.state.blogs.objects[0].metadata.author.title;
        var displayDate = created.charAt(8) + created.charAt(9) + '/' + created.charAt(5) + created.charAt(6) + '/' + created.charAt(0) + created.charAt(1) + created.charAt(2) + created.charAt(3);
        // also need blog image above

        return (
          <div>
            <div className="title">{title}</div>
            <div className="content">{ReactHtmlParser(content)}</div>
            <div className="author">{author}</div>
            <div className="created">{displayDate}</div>
            <div className="clear"></div>
          </div>
        )
      }
    }

    return (
      <div className="container">
        {renderBlog()}
      </div>
    );
  }
});

module.exports = Blog;
