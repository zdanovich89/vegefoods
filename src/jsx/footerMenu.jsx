import React from "react";

class FooterMenu extends React.Component {
  state = {
    menuInformation: [
      { section: "Shop" },
      { section: "About" },
      { section: "Journal" },
      { section: "Contact" }
    ]
  };

  render() {
    return (
      <div className="col-md">
        <div className="ftco-footer-widget mb-4 ml-md-5">
          <h2 className="ftco-heading-2">Menu</h2>
          <ul className="list-unstyled">
            {this.state.menuInformation.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#" className="py-2 d-block">
                    {item.section}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export { FooterMenu };
