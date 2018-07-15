import React, { Component } from "react";

import { buildDisplayString } from "./HelperFunctions";

class Formula extends Component {
  render() {
    return <div>{buildDisplayString({currentVal: this.props.formula})}</div>;
  }
}

export default Formula;
