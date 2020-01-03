import React from "react";

class HomeSlider extends React.Component {
  state = {
    style: [
      {
        background: "url(./images/bg_1.jpg)",
        h1: "We serve Fresh Vegestables &amp; Fruits"
      },
      {
        background: "url(./images/bg_2.jpg)",
        h1: "100% Fresh &amp; Organic Foods"
      }
    ]
  };

  render() {
    return (
      <>
        {this.state.style.map((item, index) => (
          <section key={index} id="home-section" className="hero">
            <div className="home-slider owl-carousel">
              <div
                className="slider-item"
                style={{ background: `${item.background}` }}
              >
                <div className="overlay"></div>
                <div className="container">
                  <div
                    className="row slider-text justify-content-center align-items-center"
                    data-scrollax-parent="true"
                  >
                    <div className="col-md-12 ftco-animate text-center">
                      <h1 className="mb-2">{item.h1}</h1>
                      <h2 className="subheading mb-4">
                        We deliver organic vegetables &amp; fruits
                      </h2>
                      <p>
                        <a href="#" className="btn btn-primary">
                          View Details
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </>
    );
  }
}

export default HomeSlider;
