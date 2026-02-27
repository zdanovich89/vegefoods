import React from "react";

class FooterContacts extends React.Component {
  state = {
    contacts: [
      {
        information:
          "203 Fake St. Mountain View, San Francisco, California, USA",
        icon: "icon icon-map-marker"
      },
      { information: "+2 392 3929 210", icon: "icon icon-phone" },
      { information: "info@yourdomain.com", icon: "icon icon-envelope" }
    ]
  };

  render() {
    return (
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Have a Questions?</h2>
          <div className="block-23 mb-3">
            <ul>
              {this.state.contacts.map((item, index) => {
                return (
                  <li key={index}>
                    <span className={item.icon}></span>
                    <span className="text">{item.information}</span>
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
export { FooterContacts };
