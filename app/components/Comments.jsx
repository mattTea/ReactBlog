// Add the blog array index[i] as a prop so that can be referenced to manage prev/next and comments?
// Like Gigs component using GigSearch component and passing the prop of gigType
// TODO add comments form


var React = require('react');

var Comments = React.createClass({
  propTypes: {
    blogIndex: React.PropTypes.number.isRequired
  },
  // onFormSubmit: function (e) {
  //   e.preventDefault();

    // var gigs = this.refs.gigs; // there are no refs highlighted in the form below?

    // this.props.onSearch(gigs); // if valid, call the parent 'onSearch' function
  // },

  render: function () {
    var {blogIndex} = this.props;


    return (
      <div>
        {/* <form onSubmit={this.onFormSubmit}>
          {renderFindGigsButton()}
        </form> */}
        *Render Comments component*
      </div>
    );
  }
});

module.exports = Comments;
