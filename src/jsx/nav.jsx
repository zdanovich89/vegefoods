import React from "react";

class Nav extends React.Component {
  state = {
    navItems: ["Home", "Shop", "About", "Blog", "Contact", "[]"]
  };

  render() {
    return (
      <ul className="navbar-nav ml-auto">
        {this.state.navItems.map((navItem, index) => (
          <li key={index} className="nav-item">
            <a className="nav-link">{navItem}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Nav;
