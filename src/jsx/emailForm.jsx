import React from "react";

class EmailForm extends React.Component {
  state = {
    attributes: [
      {
        type: "text",
        class: "form-control",
        placeholder: "Enter email address"
      },
      { type: "submit", class: "submit px-3", value: "Subscribe" }
    ]
  };

  render() {
    return (
      <div className="col-md-6 d-flex align-items-center">
        <form action="#" className="subscribe-form">
          <div className="form-group d-flex">
            {this.state.attributes.map((item, index) => {
              return (
                <input
                  key={index}
                  type={item.type}
                  className={item.class}
                  value={item.value}
                  placeholder={item.placeholder}
                ></input>
              );
            })}
          </div>
        </form>
      </div>
    );
  }
}
export { EmailForm };
