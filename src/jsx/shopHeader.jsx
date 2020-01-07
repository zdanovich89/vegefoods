import React from "react";

class ShopHeader extends React.Component {
  state = {
    style: [
      {
        background: "url(./images/bg_1.jpg)",
        h1: "Products"
      }
    ]
  };

  render() {
    return (
      <>
        {this.state.style.map((item, index) => (
          <div
            key={index}
            className="hero-wrap hero-bread"
            style={{ backgroundImage: `${item.background}` }}
          >
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9 text-center">
                  <p className="breadcrumbs">
                    <span className="mr-2">
                      <a href="index.html">Home</a>
                    </span>{" "}
                    <span>Products</span>
                  </p>
                  <h1 className="mb-0 bread">Products</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export { ShopHeader };
