import React, { Component } from "react";
import Buttons from "./Buttons";
import Formula from "./Formula";
import Output from "./Output";

import {
  checkIfPreviousValueIsOperator,
  findButton,
  doMath
} from "./HelperFunctions";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: [],
      formula: [],
      prevVal: []
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }
  handleDecimal(e) {
    // let testdecimal = this.state.currentVal.slice("-1");
    // console.log(testdecimal);
    this.appendToCurrentVal({
      currentVal: this.state.currentVal,
      newVal: findButton({ id: e.target.value })
    });
  }
  handleNumbers(e) {
    if (e.target.value === "zero" && this.state.currentVal.length === 0) {
      this.setState({ currentVal: [] });
    } else {
      this.appendToCurrentVal({
        currentVal: this.state.currentVal,
        newVal: findButton({ id: e.target.value })
      });
    }
  }

  handleOperators(e) {
    // if previous value is operator, remove it so that we can replace it with new operator
    if (checkIfPreviousValueIsOperator({ currentVal: this.state.currentVal })) {
      this.setState({ currentVal: [...this.state.currentVal.pop()] });
    }

    this.appendToCurrentVal({
      currentVal: this.state.currentVal,
      newVal: findButton({ id: e.target.value })
    });
  }

  appendToCurrentVal({ currentVal, newVal }) {
    this.setState({
      currentVal: [...currentVal, { ...newVal }]
    });
  }

  handleClear() {
    this.setState({ currentVal: [], formula: [] });
  }

  handleCalculation(e) {
    // first, save currentVal to memory
    this.setState({ formula: [...this.state.currentVal] });

    // then handle math
    const result = this.state.currentVal.reduce(
      (result, val) => {
        //  put logic here using doMath from HelperFunctions.js to handle calculation
        let expression = this.state.formula;
        let answer =
          Math.round(1000000000000 * eval(expression)) / 1000000000000;
        console.log(val.value);
        return result;
      },
      { value: "0", type: "number" }
    );

    // once calculation is done, set currentVal to the result
    this.setState({ currentVal: [...result] });
  }

  render() {
    return (
      <div className="calculator">
        <Formula formula={this.state.formula} />
        <Output currentValue={this.state.currentVal} />
        <Buttons
          number={this.handleNumbers}
          operator={this.handleOperators}
          clear={this.handleClear}
          calculate={this.handleCalculation}
          decimal={this.handleDecimal}
        />
      </div>
    );
  }
}

export default Calculator;
