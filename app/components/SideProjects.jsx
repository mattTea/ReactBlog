var React = require('react');

var SideProjects = React.createClass({ //try not to use .createClass (deprecated)
  getInitialState: function () {
    return {
      title: 'SideProjectsHoldingPage'
    }
  },

  render: function () {
    var {title} = this.state;

    function renderSideProjects () {
      return (
        <div>
          <h5>{title}</h5>;
        </div>
      )
    }

    return (
      <div>
        {renderSideProjects}
        <p>SideProjects component rendered</p>
      </div>
    );
  }
});

module.exports = SideProjects;
