import React, { Component } from "react";
import * as CalculatorButtons from "./CalculatorButtons";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: "0",
      formula: "",
      prevVal: ""
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.initialize = this.initialize.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
  }
  handleNumbers(e) {
    this.setState({
      currentVal:
        this.state.currentVal === "0"
          ? e.target.value
          : this.state.currentVal + e.target.value
    });
  }
  handleOperators(e) {
    this.setState({
      currentVal: this.state.currentVal + e.target.value
    });
  }
  initialize() {
    this.setState({ currentVal: "0" });
  }
  render() {
    return (
      <div className="calculator">
        <Formula formula={this.state.currentVal} />
        <Output currentValue={this.state.currentVal} />
        <Buttons
          number={this.handleNumbers}
          initialize={this.initialize}
          operator={this.handleOperators}
        />
      </div>
    );
  }
}
class Formula extends Component {
  render() {
    return <div>{this.props.formula}</div>;
  }
}
class Output extends Component {
  render() {
    return (
      <div id="display">
        <h2 style={{ margin: 0 }}>{this.props.currentValue}</h2>
      </div>
    );
  }
}
class Buttons extends Component {
  render() {
    return (
      <div>
        {CalculatorButtons.sort((a, b) => a.order - b.order).map(button => (
          <button
            key={button.id}
            onClick={this.props[button.type]}
            id={button.id}
            className={button.css.join(" ")}
            value={button.value}
          >
            {button.value.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }
}
export default Calculator;
