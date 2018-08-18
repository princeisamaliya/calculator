import React, { Component } from "react";
import Buttons from "./Buttons";
import Formula from "./Formula";
import Output from "./Output";

import { checkIfPreviousValueIsOperator, findButton } from "./HelperFunctions";

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
  }

  handleNumbers(e) {
    this.appendToCurrentVal({
      currentVal: this.state.currentVal,
      newVal: findButton({ id: e.target.value })
    });
  }

  handleOperators(e) {
    // if previous value is operator, remove it so that we can replace it with new operator
    if (checkIfPreviousValueIsOperator({ currentVal: this.state.currentVal })) {
      this.setState({ currentVal: [...this.state.currentVal.pop()] });
    }

    // if it is first value, then only allow minus
    if (!this.state.currentVal.length && e.target.value !== "subtract") return;

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
    this.setState({ currentVal: [] });
  }

  handleCalculation(e) {
    // first, save currentVal to memory
    this.setState({ formula: [...this.state.currentVal] });

    // second, merge all number values
    const combinedNumbers = this.state.currentVal.reduce((result, val) => {
      // if first number or previous value is not number or if current value is operator then push to array
      const [lastValue] = result.slice(-1);
      if (
        !result.length ||
        lastValue.type !== "number" ||
        val.type === "operator"
      ) {
        result.push(val);
      } else {
        // otherwise, combine current value with previous value
        lastValue.value += val.value;
      }

      return result;
    }, []);

    let isOperator = combinedNumbers.find(
      operatorType => operatorType.type === "operator"
    );

    // third, do all * and / operators
    let result;
    // last, do all + and - operators
    if (isOperator.value === "+") {
      let arrySum = [];
      for (var i = 0; i < combinedNumbers.length; i++) {
        arrySum.push(combinedNumbers[i].value);
        const index = arrySum.indexOf("+");
        if (index !== -1) {
          arrySum.splice(index, 1);
        }
      }
      var total = [arrySum.join()].reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      console.log(total);
    }

    // once calculation is done, set currentVal to the result
    // this.setState({ currentVal: [...result] });
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
        />
      </div>
    );
  }
}

export default Calculator;
