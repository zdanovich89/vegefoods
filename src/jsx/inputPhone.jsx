import React from "react";
import { isValidNumber } from "./validation";

const getStyle = (isTouched, isValid) => {
  if (isTouched && !isValid) {
    return { border: "solid 1px red" };
  }

  return null;
};

class InputPhone extends React.Component {
  state = {
    number: "",
    isTouched: false
  };

  onChange = evt => {
    this.setState({
      number: evt.target.value
    });
  };

  onBlur = evt => {
    this.setState({
      isTouched: true
    });
  };

  render() {
    return (
      <form
        onSubmit={evt => {
          evt.preventDefault();
        }}
      >
        <input
          style={getStyle(
            this.state.isTouched,
            isValidNumber(this.state.number)
          )}
          onBlur={this.onBlur}
          maxLength="13"
          type="text"
          value={this.state.number}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export { InputPhone };
