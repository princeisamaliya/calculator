import React, { Component } from "react";
import * as CalculatorButtons from "./CalculatorButtons";

class Buttons extends Component {
  render() {
    return (
      <div>
        {CalculatorButtons.sort((a, b) => a.order - b.order).map(
          (button, index) => (
            <button
              key={button.id}
              onClick={this.props[button.type]}
              id={button.id}
              className={button.css.join(" ")}
              value={button.id}
            >
              {button.value.toUpperCase()}
            </button>
          )
        )}
      </div>
    );
  }
}

export default Buttons;
