var React = require('react');

var {Link, IndexLink} = require('react-router');

var NavHeader = (props) => {

  return (
    <div>
      <div className="top-bar-center show-for-small-only">
        <ul className="menu">
        {/* <ul class="w3-navbar w3-black" id="navbar"> */}
          <li>
            <IndexLink to="/">Home
              {/* <img src={require('../../public/images/CaravanGig2.png')} style={{maxWidth: "3.5em", maxHeight: "3.5em"}}></img> */}
            </IndexLink>
          </li>
          <li>
            <Link to="/articles">Articles
              {/* <img src={require('../../public/images/CaravanGig2.png')} style={{maxWidth: "3.5em", maxHeight: "3.5em"}}></img> */}
            </Link>
          </li>
          <li>
            <Link to="/side-projects">SPs
              {/* <img src={require('../../public/images/CaravanGig2.png')} style={{maxWidth: "3.5em", maxHeight: "3.5em"}}></img> */}
            </Link>
          </li>
          <li>
            <Link to="/about">About
              {/* <img src={require('../../public/images/CaravanGig2.png')} style={{maxWidth: "3.5em", maxHeight: "3.5em"}}></img> */}
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-left show-for-medium">
        <ul className="menu">
        {/* <ul class="w3-navbar w3-black" id="navbar"> */}
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
