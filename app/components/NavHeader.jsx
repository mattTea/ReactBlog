var React = require('react');

var {Link, IndexLink} = require('react-router');

var NavHeader = (props) => {

  return (
    <div>
      <div className="top-bar-center show-for-small-only">
        <ul className="menu" id="navbar-small">
          <li>
            <IndexLink to="/">
              <img src={require('../../public/images/home.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
            </IndexLink>
          </li>
          <li>
            <Link to="/articles">
              <img src={require('../../public/images/blogs.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
            </Link>
          </li>
          <li>
            <Link to="/side-projects">
              <img src={require('../../public/images/side-projects.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img src={require('../../public/images/about.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-left show-for-medium">
        <ul className="menu" id="navbar-medium">
          <li>
            <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
          </li>
          <li>
            <Link to="/articles" activeClassName="active-link">Blogs</Link>
          </li>
          <li>
            <Link to="/side-projects" activeClassName="active-link">Side Projects</Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active-link">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = NavHeader;
