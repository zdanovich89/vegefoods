import React from "react";

class InputPhone extends React.Component {
  state = {
    numbers: ""
  };

  render() {
    return (
      <>
        <input
          maxLength="13"
          type="text"
          value={this.state.text}
          onChange={evt => {
            this.setState({
              numbers: evt.target.value
            });
          }}
        />
      </>
    );
  }
}

export default InputPhone;
