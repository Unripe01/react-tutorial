
let result: {} | null | undefined = null;
const timeout = (msec: number | undefined) => new Promise(resolve => {
  setTimeout(resolve, msec)
});

const CodeSplitOtherComponent = () => {
  if (result !== null) {
    return (
      <div>{result}</div>
    )
  }
  throw new Promise<void>(async(resolve) => {
    await timeout(2000);
    result = 'Done'
    resolve();
  })
};

export default CodeSplitOtherComponent;
