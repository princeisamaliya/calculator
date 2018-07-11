import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: "0"
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.initialize = this.initialize.bind(this);
  }
  handleNumbers(e) {
    this.setState({
      currentVal:
        this.state.currentVal == "0"
          ? e.target.value
          : this.state.currentVal + e.target.value
    });
    console.log(this.state.currentVal);
  }
  initialize() {
    this.setState({ currentVal: 0 });
  }
  render() {
    return (
      <div className="calculator">
        <Output currentValue={this.state.currentVal} />
        <Buttons numbers={this.handleNumbers} initialize={this.initialize} />
      </div>
    );
  }
}
class Output extends Component {
  render() {
    return <div id="display">{this.props.currentValue}</div>;
  }
}
class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.initialize} id="clear" value="ac">
          AC
        </button>
        <button id="divide" value="/">
          /
        </button>
        <button id="multiply" value="*">
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
        <button id="subtract" value="-">
          -
        </button>
        <button id="four" value="4">
          4
        </button>
        <button id="five" value="5">
          5
        </button>
        <button id="six" value="6">
          6
        </button>

        <button id="add" value="+">
          +
        </button>

        <button id="one" value="1">
          1
        </button>
        <button id="two" value="2">
          2
        </button>
        <button id="three" value="3">
          3
        </button>
        <button id="equals" value="=">
          =
        </button>
        <button id="zero" value="0">
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
