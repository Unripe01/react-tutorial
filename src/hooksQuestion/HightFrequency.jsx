import { useState, useEffect } from "react";

export function NgHightFrequency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1); // This effect depends on the `count` state
    }, 1000);
    return () => clearInterval(id);
  }, []); // π΄ Bug: `count` is not specified as a dependency

  return <h1>{count}</h1>;
}

//setState ι’ζ°ε½’εΌγ«γγζ΄ζ°γε©η¨γγγγ¨γγ§γγΎγγ
// see also:https://ja.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often

export function OkHightFrequency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1); // β This doesn't depend on `count` variable outside
    }, 1000);
    return () => clearInterval(id);
  }, []); // β Our effect doesn't use any variables in the component scope

  return <h1>{count}</h1>;
}
