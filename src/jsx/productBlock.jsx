import React from "react";
import { IconArea } from "./iconArea";

class ProductBlock extends React.Component {
  state = {
    products: [
      {
        name: "Bell Pepper",
        image: "./images/product-1.jpg",
        price: "$120.00",
        priceSale: "$80.00"
      },
      { name: "Strawberry", image: "./images/product-2.jpg", price: "$120.00" },
      {
        name: "Green Beans",
        image: "./images/product-3.jpg",
        price: "$120.00"
      },
      {
        name: "Purple Cabbage",
        image: "./images/product-4.jpg",
        price: "$120.00"
      },
      {
        name: "Tomatoe",
        image: "./images/product-5.jpg",
        price: "$120.00",
        priceSale: "$80.00"
      },
      { name: "Brocolli", image: "./images/product-6.jpg", price: "$120.00" },
      { name: "Carrots", image: "./images/product-7.jpg", price: "$120.00" },
      {
        name: "Fruit juice",
        image: "./images/product-8.jpg",
        price: "$120.00"
      },
      {
        name: "Onion",
        image: "./images/product-9.jpg",
        price: "$120.00",
        priceSale: "$80.00"
      },
      { name: "Apple", image: "./images/product-10.jpg", price: "$120.00" },
      { name: "Garlic", image: "./images/product-11.jpg", price: "$120.00" },
      { name: "Chilli", image: "./images/product-12.jpg", price: "$120.00" }
    ]
  };

  render() {
    return (
      <div className="row">
        {this.state.products.map((item, index) => {
          let newSale;
          let discount;
          if (item.priceSale) {
            newSale = <span className="price-sale">{item.priceSale}</span>;
            discount = <span className="status">30%</span>;
          }
          return (
            <div key={index}  className="col-md-6 col-lg-3 ">
              <div  className="product">
                <a href="#" className="img-prod">
                  <img
                    className="img-fluid"
                    src={item.image}
                    alt="Colorlib Template"
                  />
                  {discount}
                  <div className="overlay"></div>
                </a>
                <div className="text py-3 pb-4 px-3 text-center">
                  <h3>
                    <a href="#">{item.name}</a>
                  </h3>
                  <div className="d-flex">
                    <div className="pricing">
                      <p className="price">
                        <span className={item.priceSale ? "mr-2 price-dc" : ""}>
                          {item.price}
                        </span>
                        {newSale}
                      </p>
                    </div>
                  </div>
                  <IconArea />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export { ProductBlock };
