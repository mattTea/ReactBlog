var React = require('react');

import ReactHtmlParser from 'react-html-parser';

var cosmicComments = require('cosmicComments');
var PostComment = require('PostComment')

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
          <PostComment blogSlug={blogSlug}/>
        </div>
      )
    }
  },

  render: function () {
    var {blogSlug, blogIndex} = this.props;
    return (
      <div className="containerComments">
        <div>{this.searchComments()}</div>
      </div>
    );
  }
});

module.exports = Comments;
