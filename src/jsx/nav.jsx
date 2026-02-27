import React from "react";
import { DropdownItem } from "./dropdownItem";

class Nav extends React.Component {
  state = {
    navItems: [
      { item: "Home" },
      { item: "Shop", isDropdown: true },
      { item: "About" },
      { item: "Blog" },
      { item: "Contact" },
      { item: "[0]", isCart: true }
    ]
  };

  render() {
    return (
      <ul className="navbar-nav ml-auto">
        {this.state.navItems.map((navItem, index) => {
          if (navItem.isDropdown) {
            return (
              <li key={index} className="nav-item active dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {navItem.item}
                </a>
                <DropdownItem />
              </li>
            );
          }

          if (navItem.isCart) {
            return (
              <li key={index} className="nav-item cta cta-colored">
                <a href="cart.html" className="nav-link">
                  <span className="icon-shopping_cart"></span>
                  {navItem.item}
                </a>
              </li>
            );
          } else
            return (
              <li key={index} className="nav-item">
                <a className="nav-link">{navItem.item}</a>
              </li>
            );
        })}
      </ul>
    );
  }
}

export { Nav };
