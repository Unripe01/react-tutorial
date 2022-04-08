// イベント
// DOM 要素に対して本物の DOM イベントをディスパッチし、その結果に対してアサーションを行うことをお勧めします。
// 以下の Toggle コンポーネントを考えてみましょう：

import React, { useState } from "react";

export default function Toggle(props) {
  const [state, setState] = useState(false);
  return (
    <button
      onClick={() => {
        setState((previousState) => !previousState);
        props.onChange(!state);
      }}
      data-testid="toggle"
    >
      {state === true ? "Turn off" : "Turn on"}
    </button>
  );
}
