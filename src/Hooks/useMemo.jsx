import { useMemo } from "react";

export default function UseMemo({ number }) {
  const expensiveCalculation = (number) => {
    console.log('Calculating...');
    for (let i = 0; i < 100000; i++) {} // Simulate heavy computation
    return number * 2;
  };

  const result = useMemo(() => expensiveCalculation(number), [number]);
  //comment the above line and un comment below line to see the difference what happens if we don't use useMemo
  //  const result = expensiveCalculation(number)

  return (
  <>
  <h4>Without useMemo</h4>
  <p>Remove useMemo from the component and every time you type in the text input, the entire component re-renders.
    expensiveCalculation function runs every time, even though number hasn't changed.</p>
  <h4>With useMemo</h4>
  <p>expensiveCalculation function only runs when number changes.
    Typing in the text input does not trigger recalculation, improving performance.</p>
  <p>Result: {result}</p>
  </>);
}
