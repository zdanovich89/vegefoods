import React from "react";

class FooterHelp extends React.Component {
  state = {
    help1: [
      { section1: "Shipping Information" },
      { section1: "Returns &amp; Exchange" },
      { section1: "Terms &amp; Conditions" },
      { section1: "Privacy Policy" }
    ],
    help2: [{ section2: "FAQs" }, { section2: "Contact" }]
  };

  render() {
    return (
      <div className="col-md-4">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Help</h2>
          <div className="d-flex">
            <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
              {this.state.help1.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="py-2 d-block">
                      {item.section1}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="list-unstyled">
              {this.state.help2.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="py-2 d-block">
                      {item.section2}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export { FooterHelp };
