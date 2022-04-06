import { useEffect } from "react";

export function NG({ someProp }) {
  function doSomething() {
    console.log(someProp);
  }

  useEffect(() => {
    doSomething();
  },[doSomething]); // 🔴 This is not safe (it calls `doSomething` which uses `someProp`)

  return <div>NG</div>
}

export function OK({ someProp }) {
    useEffect(() => {
      function doSomething() {
        console.log(someProp);
      }
  
      doSomething();
    }, []); // ✅ OK (our effect only uses `someProp`)
    return <div>OK</div>
  } 

