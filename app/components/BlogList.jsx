var React = require('react');

// describe the javascript to slice part of the content
// in render() list the blogs to be displayed in order [0], [1], [n]

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
        console.log('Blog object [0]: ' + blogs.objects[0].title);

        var i = 0;
        var highArrPosition = blogs.objects.length - 1;
        console.log(highArrPosition);
        //if (i=0, i<highArrPosition, i++) {
          // do stuff to render each preview up to position highArrPosition
        // }
        var {title, created, content} = blogs.objects[i];
        var author = that.state.blogs.objects[i].metadata.author.title;
        var displayDate = created.charAt(8) + created.charAt(9) + '/' + created.charAt(5) + created.charAt(6) + '/' + created.charAt(0) + created.charAt(1) + created.charAt(2) + created.charAt(3);
        var preview = content.substring(0, 150) + '... >>';

        return (
          <div>
            <p>Blogs!</p>
            <div>{preview}</div>
          </div>
        )
      }
    }

    //
    // var blog9 = () => {
    //   return (
    //     <div>
    //       <a href="#"><div>
    //         <div className="title">{title}</div>
    //         <div className="preview">{preview}</div>
    //         <div className="author">{author}</div>
    //         <div className="created">{displayDate}</div>
    //         <div className="clear"></div>
    //       </div></a>
    //     </div>
    //   )
    // }

    return (
      <div>
        <h2 className="">the blogs</h2>
        {renderBlogList()}
      </div>
    );
  }
});

module.exports = BlogList;
