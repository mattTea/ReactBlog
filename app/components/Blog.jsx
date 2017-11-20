var React = require('react');


var Blog = React.createClass({ //try not to use .createClass (deprecated)
  getInitialState: function () {
    return {
      xxx: false,
      yyy: 'music'
    }
  },

  //copied from TinyGigs as example!
  render: function () {
    var {isLoading, gigType, gigs} = this.state;

    function renderGigList () {
      if (isLoading) {
        return <h5 className="text-center page-loading">Getting gigs...</h5>;
      } else if (gigs) {
        return (
          <div>
            <GigList gigs={gigs} gigType={gigType}/>
          </div>
        )
      }
    }



    return (
      <div>

      </div>
    );
  }
});

module.exports = Blog;
