var React = require('react');

var PostComment = React.createClass({
  propTypes: {
    blogSlug: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {
      commentValue: '',
      nameValue: ''
    };
  },

  handleChangeComment(event) {
    this.setState({
      commentValue: event.target.value
    });
  },

  handleChangeName(event) {
    this.setState({
      nameValue: event.target.value
    });
  },

  commentPost: function (e) {
    var {blogSlug} = this.props;
    var {commentValue, nameValue} = this.state;
    var that = this;

    e.preventDefault();
    if (commentValue != undefined && commentValue.length > 0) {
      var newComment = commentValue;
      console.log('newComment: ' + newComment);
    } else {
      alert('Comments box is empty, please add a comment to submit.');
      return;
    }
    if (nameValue.length > 0) {
      var commentAuthor = 'posted by... ' + nameValue;
      console.log(commentAuthor);
    } else {
      var commentAuthor = 'posted by... ' + 'anon';
      console.log(commentAuthor);
    }

    var d = new Date();
    var date = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
    var commentValue = date + ' ' + d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes() + "<br>" + newComment + "<br>" + commentAuthor + "<br><br>";
    console.log(commentValue);

    var commentParams = {
      type_slug: 'comments',
      title: date + ' ' + d.getHours() + ':' + d.getMinutes() + ' comment',
      content: commentValue,
      metafields: [{
        key: 'blogslugname',
        type: 'text',
        value: blogSlug
      }]
    };
    var apiPost = "https://api.cosmicjs.com/v1/matttea-blog-app/add-object";

    var commentParamsJson = JSON.stringify(commentParams);
    console.log('commentParamsJson: ' + commentParamsJson);

    $.ajax({
      type: "POST",
      url: apiPost,
      data: JSON.stringify(commentParams),
      contentType: "application/json",
      success: function(data){
        that.setState({
          commentValue: '',
          nameValue: ''
        });
        alert('Thanks for your thoughts!');
      },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });
  },

// some form of onChange function for the comments list to dynamicaly refresh with new comments?

  render: function () {
    return (
      <div className="containerPostComments">
        <textarea className="thoughts" placeholder="your thoughts..." rows="4" cols="50" value={this.state.commentValue} onChange={this.handleChangeComment}></textarea>
        <textarea className="name" placeholder="your name..." rows="1" cols="50" value={this.state.nameValue} onChange={this.handleChangeName}></textarea>
        <button onClick={this.commentPost}>Submit</button>
      </div>
    );
  }
});

module.exports = PostComment;
