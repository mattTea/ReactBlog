var React = require('react');


// pull in data{}
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

    // neither of my WHILE loops seem to be working
    // think it should be of the form... while (this thing is true) {then do this}. when it isn't true, stop.

    cosmic.getBlogs().then(function (blogs) {

      while (that.state.blogs != undefined) {
        that.setState({ // calling 'that' to use the 'this' keyword
          blogs: blogs,
          isLoading: false
        });
        console.log('ComponentWillMount: blogs should exist: ' + that.state.blogs)
      }
    }, function (errorMessage) {
      that.setState({isLoading: false}),
      alert(errorMessage);
    });
  },

  render: function () {
    var that = this;
    var {isLoading, blogs} = this.state;

    function renderBlogList () {
      console.log('render: blogs should be undefined: ' + that.state.blogs);
      while (blogs != undefined) {
        console.log('render: blogs should now exist: ' + that.state.blogs);
        return (
          <div>
            <p>Blogs?</p>
          </div>
        )
      }
    }


    // var {isLoading, blogs} = this.state;
    //
    // var {title, created, content} = blogs.objects[0]; // might not need the 'objects' bit, just blogs[0]
    // // var title = this.state.blogs.objects[0].title;
    // // var author = this.state.blogs.objects[0].metadata.author.title;
    // var author = 'mattTea';
    // // var created = this.state.blogs.objects[0].created;
    // // var displayDate = created.charAt(8) + created.charAt(9) + '/' + created.charAt(5) + created.charAt(6) + '/' + created.charAt(0) + created.charAt(1) + created.charAt(2) + created.charAt(3);
    // var displayDate = 'today';
    // // var content = this.state.blogs.objects[0].content;
    // var preview = content.substring(0, 150) + '... >>';
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
    //
    // function renderBlogList () {
    //   if (isLoading) {
    //     return <h5 className="text-center page-loading">Getting blogs...</h5>;
    //   } else if (blogs) {
    //     return (
    //       <div>
    //         {blog9}
    //       </div>
    //     )
    //   }
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
