var React = require('react');

var SideProjects = () => {

  return (
    // Side Project Details
    <div className="container">
      <h2>the side projects...</h2>
      <div className="author-blurb">
        <p><br/>There's mention of numerous side projects throughout this blog. Browse them all here.<br/></p>
      </div>

      <a href="https://tinygigs.matttea.com/" target="_blank"><div className="proj-container">
        <div className="proj-thumb"><img src={require('../../public/images/CaravanGig2.png')}></img></div>
        <div className="proj-content">
          <h4>Tiny Gigs</h4>
          <p>A simple React web app for live music in small London venues.</p>
        </div>
        <div className="clear"></div>
      </div></a>

      <a href="https://github.com/mattTea/RetroBoard" target="_blank"><div className="proj-container">
        <div className="proj-thumb"><img src={require('../../public/images/retro-board.png')}></img></div>
        <div className="proj-content">
          <h4>Retro Board</h4>
          <p>A React workflow board web app with Redux and HTML drag and drop.</p>
        </div>
        <div className="clear"></div>
      </div></a>

      <a href="https://blog.matttea.com" target="_blank"><div className="proj-container">
        <div className="proj-thumb"><img src={require('../../public/images/B.png')}></img></div>
        <div className="proj-content">
          <h4>My Blog</h4>
          <p>You're already here!<br/>The node.js web app described in the content of this blog.</p>
        </div>
        <div className="clear"></div>
      </div></a>

      {/* <a href="https://bleippsons.herokuapp.com/" target="_blank"><div class="proj-container"> */}
      <a href="#"><div className="proj-container">
        <div className="proj-thumb"><img src={require('../../public/images/boss.png')}></img></div>
        <div className="proj-content">
          <h4>The Plan</h4>
          <p>A node.js anniversary and memory web app for some friends. (Link disabled).</p>
        </div>
        <div className="clear"></div>
      </div></a>

      <a href="https://matttea-partner-api.herokuapp.com/" target="_blank"><div className="proj-container">
        <div className="proj-thumb"><img src={require('../../public/images/gmail-details.png')}></img></div>
        <div className="proj-content">
          <h4>Partner Details Gmail plug-in</h4>
          <p>A node.js app to return user details. Prototype api for Gmail plug-in. (Search 'matt@matt.com').</p>
        </div>
        <div className="clear"></div>
      </div></a>
    </div>
  );
}

module.exports = SideProjects;
