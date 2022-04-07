import { useMemo } from "react";

// 便利なことに、useMemo は子コンポーネントの計算量の高い再レンダーをスキップするのにも使えます：

function Child1({a}) {
    return <>Child1 のコンポーネントの何かめっちゃ重い処理</>
}
function Child2({b}) {
    return <>Child2 のコンポーネントの何かめっちゃ重い処理</>
}

export function UseMemoSample({ a, b }) {
    // Only re-rendered if `a` changes:
    const child1 = useMemo(() => <Child1 a={a} />, [a]);
    // Only re-rendered if `b` changes:
    const child2 = useMemo(() => <Child2 b={b} />, [b]);
    return (
      <>
        {child1}<br/>
        {child2}<br/>
        フック呼び出しはループ内に配置できないため、このアプローチはループ内では動作しないことに注意してください。ただしリストのアイテムの部分を別のコンポーネントに抽出してその中で useMemo を呼び出すことは可能です。
      </>
    )
  }