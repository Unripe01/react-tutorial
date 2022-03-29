// numTimes の数だけ子要素のコールバックを呼び出し、コンポーネントを繰り返し作成する
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }
  
  export function ListOfTenThings() {
    return (
      <Repeat numTimes={3}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    );
  }