import React from "react";

class ProductCategory extends React.Component {
  state = {
    categoryName: [
      { name: "All" },
      { name: "Vegetables" },
      { name: "Fruits" },
      { name: "Juice" },
      { name: "Dried" }
    ]
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-10 mb-5 text-center">
          <ul className="product-category">
            {this.state.categoryName.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#">{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export { ProductCategory };
