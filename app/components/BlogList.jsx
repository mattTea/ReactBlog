var React = require('react');
import ReactHtmlParser from 'react-html-parser';
var {Link, IndexLink} = require('react-router');

var cosmic = require('cosmic');

var BlogList = React.createClass({ //try not to use .createClass (deprecated)
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

    function renderBlogList () {
      if (isLoading) {
        return <h5 className="text-center page-loading">Getting blogs...</h5>;
      } else if (blogs) {

        var noOfBlogs = blogs.objects.length;

        var blogItemsArray = [];

        for (var i = 0; i < noOfBlogs; i++) {
          var {title, created, content} = blogs.objects[i];

          var blogItem = {
            id: i,
            title: title,
            author: that.state.blogs.objects[i].metadata.author.title,
            displayDate: created.charAt(8) + created.charAt(9) + '/' + created.charAt(5) + created.charAt(6) + '/' + created.charAt(0) + created.charAt(1) + created.charAt(2) + created.charAt(3),
            preview: content.substring(0, 150) + '... >>'
          }
          blogItemsArray.push(blogItem);
        }

        const blogListItems = blogItemsArray.map((blogItemsArray, index) =>
          <li key={index}>
            {/* try to make an array of href links so we can link to the blogs using below <a> tags */}
            <Link to="/articles">
              <div className="title">{blogItemsArray.title}</div>
              <div className="preview">{ReactHtmlParser(blogItemsArray.preview)}</div>
              <div className="author">{blogItemsArray.author}</div>
              <div className="created">{blogItemsArray.displayDate}</div>
              <div className="clear"></div>
            </Link>
          </li>
        );

        return (
          <div id="blogPreviewList">
            <ul>{blogListItems}</ul>
          </div>
        )
      }
    }

    return (
      <div className="container">
        <h2>the blogs...</h2>
        {renderBlogList()}
      </div>
    );
  }
});

module.exports = BlogList;
