import React, { Component } from "react";

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
    this.setState({ currentVal: 0 });
  }
  render() {
    return (
      <div className="calculator">
        <Formula formula={this.state.currentVal} />
        <Output currentValue={this.state.currentVal} />
        <Buttons
          numbers={this.handleNumbers}
          initialize={this.initialize}
          operators={this.handleOperators}
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
        <button onClick={this.props.initialize} id="clear" value="ac">
          AC
        </button>
        <button onClick={this.props.operators} id="divide" value="/">
          /
        </button>
        <button onClick={this.props.operators} id="multiply" value="*">
          *
        </button>
        <button onClick={this.props.numbers} id="seven" value="7">
          7
        </button>
        <button onClick={this.props.numbers} id="eight" value="8">
          8
        </button>
        <button onClick={this.props.numbers} id="nine" value="9">
          9
        </button>
        <button onClick={this.props.operators} id="subtract" value="-">
          -
        </button>
        <button onClick={this.props.numbers} id="four" value="4">
          4
        </button>
        <button onClick={this.props.numbers} id="five" value="5">
          5
        </button>
        <button onClick={this.props.numbers} id="six" value="6">
          6
        </button>

        <button onClick={this.props.operators} id="add" value="+">
          +
        </button>

        <button onClick={this.props.numbers} id="one" value="1">
          1
        </button>
        <button onClick={this.props.numbers} id="two" value="2">
          2
        </button>
        <button onClick={this.props.numbers} id="three" value="3">
          3
        </button>
        <button onClick={this.props.operators} id="equals" value="=">
          =
        </button>
        <button onClick={this.props.numbers} id="zero" value="0">
          0
        </button>
        <button id="decimal" value=".">
          .
        </button>
      </div>
    );
  }
}
export default Calculator;
