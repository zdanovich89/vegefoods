import React from "react";

class SocialNetworks extends React.Component {
  state = {
    icon: [
      { classIcon: "icon-twitter" },
      { classIcon: "icon-facebook" },
      { classIcon: "icon-instagram" }
    ]
  };

  render() {
    return (
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Vegefoods</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
            {this.state.icon.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#">
                    <span className={item.classIcon}></span>
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
export { SocialNetworks };
