var React = require('react');

var {Link, IndexLink} = require('react-router');

var activeLinkStyle = {
  fontWeight: "bold",
  color: "white"
}

var NavHeader = (props) => {

  return (
    <div>
      <div className="top-bar-center show-for-small-only">
        <ul className="menu" id="navbar-small">
          <li>
            <IndexLink to="/">
              <img src={require('../../public/images/home-white.png')}></img>
            </IndexLink>
          </li>
          <li>
            <Link to="/articles">
              <img src={require('../../public/images/pen-white.png')}></img>
            </Link>
          </li>
          <li>
            <Link to="/side-projects">
              <img src={require('../../public/images/projects-white.png')}></img>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img src={require('../../public/images/about-white.png')}></img>
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-left show-for-medium">
        <ul className="menu" id="navbar-medium">
          <li>
            <IndexLink to="/" activeStyle={activeLinkStyle}>Home</IndexLink>
          </li>
          <li>
            <Link to="/articles" activeStyle={activeLinkStyle}>Blogs</Link>
          </li>
          <li>
            <Link to="/side-projects" activeStyle={activeLinkStyle}>Side Projects</Link>
          </li>
          <li>
            <Link to="/about" activeStyle={activeLinkStyle}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = NavHeader;
