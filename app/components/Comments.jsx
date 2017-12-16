// Add the blog array index[i] as a prop so that can be referenced to manage prev/next and comments?
// Like Gigs component using GigSearch component and passing the prop of gigType

// TODO add comments form

var React = require('react');

import ReactHtmlParser from 'react-html-parser';

var cosmicComments = require('cosmicComments');

var Comments = React.createClass({
  propTypes: {
    blogIndex: React.PropTypes.number.isRequired,
    blogSlug: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {
      comments: undefined,
      isLoading: true
    };
  },

  // onFormSubmit: function (e) {
  //   e.preventDefault();

    // var gigs = this.refs.gigs; // there are no refs highlighted in the form below?

    // this.props.onSearch(gigs); // if valid, call the parent 'onSearch' function
  // },

  componentDidMount: function (comments) {
    var that = this;

    cosmicComments.getComments().then(function (comments) {
      that.setState({
        comments: comments,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false}),
      alert(errorMessage);
    });
  },

  //search for comments
  searchComments: function () {
    var {blogSlug, blogIndex} = this.props;
    var {isLoading, comments} = this.state;

    if (isLoading) {
      return <h5 className="text-center page-loading">Getting comments...</h5>;
    } else if (comments) {
      var blogComments =[];
      if (comments.objects.length > 0) {
        for (var i = 0; i < comments.objects.length; i++) {
          if (comments.objects[i].metadata !== null && comments.objects[i].metadata.blogslugname === blogSlug) {
            blogComments.push(comments.objects[i].content);
          }
        }
        console.log('blogComments.length: ' + blogComments.length);
      }

      const commentsList = blogComments.map((blogComments, index) =>
        <li key={index}>
          <div className="comments">{ReactHtmlParser(blogComments)}</div>
        </li>
      );

      return (
        <div>
          <h4>comments...</h4>
          <ul>{commentsList}</ul>
        </div>
      )
    }
  },

  render: function () {
    var {blogSlug, blogIndex} = this.props;
    return (
      <div className="container">
        {/* <form onSubmit={this.onFormSubmit}>
          {renderFindGigsButton()}
        </form> */}
        <div>{this.searchComments()}</div>
      </div>
    );
  }
});

module.exports = Comments;
