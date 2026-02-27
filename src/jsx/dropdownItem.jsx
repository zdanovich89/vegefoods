import React from "react";

class DropdownItem extends React.Component {
  state = {
    dropItems: [
      { name: "Shop", href: "shop.html" },
      { name: "Wishlist", href: "wishlist.html" },
      { name: "Single Product", href: "single-product.html" },
      { name: "Cart", href: "cart.html" },
      { name: "Checkout", href: "checkout.html" }
    ]
  };
  render() {
    return (
      <div className="dropdown-menu" aria-labelledby="dropdown04">
        {this.state.dropItems.map((item, index) => (
          <a key={index} className="dropdown-item" href={item.href}>
            {item.name}
          </a>
        ))}
      </div>
    );
  }
}

export { DropdownItem };
