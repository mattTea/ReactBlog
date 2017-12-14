var React = require('react');

var Comments = require('Comments');

import ReactHtmlParser from 'react-html-parser';

var cosmic = require('cosmic');

var Home = React.createClass({ //try not to use .createClass (deprecated)
  getInitialState: function () {
    return {
      isLoading: true,
      blogs: undefined,
      blogIndex: 0
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

// TODO add next / prev buttons

  render: function () {
    var that = this;
    var {isLoading, blogs, blogIndex} = this.state;

    function renderBlog () {
      if (isLoading) {
        return <h5 className="text-center page-loading">Getting latest blog...</h5>;
      } else if (blogs) {
        var {title, created, content} = blogs.objects[0];
        var image = blogs.objects[0].metadata.hero.url;
        var author = that.state.blogs.objects[0].metadata.author.title;
        var displayDate = created.charAt(8) + created.charAt(9) + '/' + created.charAt(5) + created.charAt(6) + '/' + created.charAt(0) + created.charAt(1) + created.charAt(2) + created.charAt(3);

        return (
          <div>
            <div className="titleHome">{title}</div>
            <div className="authorHome">{author}</div>
            <div className="createdHome">{displayDate}</div>
            <div className="imageHome">
              <img src={image} alt={"blog image"}></img>
            </div>
            <div className="contentHome">{ReactHtmlParser(content)}</div>
            <div className="clear"></div>
            <Comments blogIndex={blogIndex}/>
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

module.exports = Home;
