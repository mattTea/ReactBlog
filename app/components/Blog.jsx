var React = require('react');

var Comments = require('Comments');

import ReactHtmlParser from 'react-html-parser';

var cosmic = require('cosmic');

var Home = React.createClass({ //try not to use .createClass (deprecated)
  getInitialState: function () {
    return {
      isLoading: true,
      blogs: undefined,
      // blogIndex pulled from route in BlogList, requiring the following syntax, but don't know why!
      blogIndex: this.props.location.state.blogIndex
    }
  },

  componentDidMount: function (blogs) {
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

  renderBlog: function () {
    var {isLoading, blogs, blogIndex, blogSlug} = this.state;
    // var that = this;

    if (isLoading) {
      return <h5 className="text-center page-loading">Getting blog...</h5>;
    } else if (blogs) {
      var {title, created, content} = blogs.objects[blogIndex];
      var image = blogs.objects[blogIndex].metadata.hero.url;
      var author = blogs.objects[blogIndex].metadata.author.title;
      var displayDate = created.charAt(8) + created.charAt(9) + '/' + created.charAt(5) + created.charAt(6) + '/' + created.charAt(0) + created.charAt(1) + created.charAt(2) + created.charAt(3);
      var blogSlug = blogs.objects[blogIndex].slug;

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
          <Comments blogIndex={blogIndex} blogSlug={blogSlug}/>
        </div>
      )
    }
  },

  render: function () {
    return (
      <div className="container">
        {this.renderBlog()}
      </div>
    );
  }
});

module.exports = Home;
