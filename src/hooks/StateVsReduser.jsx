import { useState, useReducer } from "react";

// 新しい state が前の state に基づいて計算される場合は、setState に関数を渡すことができます。
export function State({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count} <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return { count: 0 };
    case "reset2":
      return init(action.payload);
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
export function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
// 初期 state の作成を遅延させることもできます。
// そのためには init 関数を第 3 引数として渡してください。初期 state が init(initialArg) に設定されます。
function init(initialCount) {
  return {count: initialCount};
}
export function Reducer2({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
