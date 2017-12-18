var React = require('react');

var Comments = require('Comments');
var cosmic = require('cosmic');
import ReactHtmlParser from 'react-html-parser';
var {Link, IndexLink} = require('react-router');

var Home = React.createClass({ //try not to use .createClass (deprecated)
  getInitialState: function () {
    return {
      isLoading: true,
      blogs: undefined,
      blogIndex: 0,
      blogSlug: undefined
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

  renderBlog: function () {
    var {isLoading, blogs, blogIndex, blogSlug} = this.state;

    if (isLoading) {
      return <h5 className="text-center page-loading">Getting latest blog...</h5>;
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
          <div className="prev-next">
            <div className="prev">
              <Link to={{
                pathname: "/blog",
                state: { blogIndex: blogIndex+1 }
              }}>
                <button>{'<'} Previous</button>
              </Link>
            </div>
          </div>
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
