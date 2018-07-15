import * as CalculatorButtons from "./CalculatorButtons";

export function checkIfPreviousValueIsOperator({ currentVal }) {
  let previousVal = { ...currentVal.slice(-1)[0] };
  return previousVal.type === "operator";
}

export function buildDisplayString({ currentVal }) {
  if (!currentVal.length) return "0";
  return currentVal.reduce(
    (string, pressedButton) => string + pressedButton.value,
    ""
  );
}

export function findButton({ id }) {
  return CalculatorButtons.find(button => button.id === id);
}

export const doMath = {
  "+"(x, y) {
    return x + y;
  }
};
