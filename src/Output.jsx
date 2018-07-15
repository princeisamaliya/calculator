import React, { Component } from "react";

import { buildDisplayString } from "./HelperFunctions";

class Output extends Component {
  render() {
    return (
      <div id="display">
        <h2 style={{ margin: 0 }}>
          {buildDisplayString({currentVal: this.props.currentValue})}
        </h2>
      </div>
    );
  }
}

export default Output;
