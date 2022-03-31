import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import CodeSplit from "./reactDoc/codeSplit/CodeSplit";
import { RefFancyButton } from "./reactDoc/ref/Ref";
import { Fragments } from "./reactDoc/fragments/fragments";
import { ExChusen } from "./reactDoc/otherLibrarties/chosen";
import { BlueDatePicker } from "./reactDoc/jsxDeepLeran/deepLeran";
import { ListOfTenThings } from "./reactDoc/jsxDeepLeran/functionChild";
import { WordAdder } from "./reactDoc/performance/bug";
import {
  RefAutoFocusTextInput,
  RefCustomTextInput,
  RefFCustomTextInput,
  RefParent,
} from "./reactDoc/ref/RefAdvanced";
import { MouseTracker4 } from "./reactDoc/renderProps/MouseTracker4";
import { EverntsExample } from "./reactDoc/events/EverntsExample";
import { UseEffectSample } from "./hooks/HooksOverview";
import { ClassUseEffect } from "./hooks/ClassUseEffect";
import { FriendStatus, FriendStatusHooks } from "./hooks/FriendStatus";
import { ChatRecipientPicker, FriendListItem, FriendStatusCustomHook } from "./hooks/useFriendStatus";

const ref = React.createRef<HTMLButtonElement>();

ReactDOM.render(
  <React.StrictMode>
    <details>
      <summary>Main Docs</summary>
      {/* <App></App> */}
      <h3>CodeSplit</h3>
      <CodeSplit />
      <hr />
      <h3>Ref</h3>
      <RefFancyButton ref={ref}>ゆんがおこりみ</RefFancyButton>
      <hr />
      <h3>Fragments</h3>
      <Fragments></Fragments>
      <hr />
      <h3>other libraries</h3>
      <ExChusen></ExChusen>
      <hr />
      <h3>deep leran</h3>
      <BlueDatePicker></BlueDatePicker>
      <br />
      <h3>List</h3>
      <ListOfTenThings></ListOfTenThings>
      <hr />
      <h3>performance</h3>
      <WordAdder></WordAdder>
      <hr />
      <h3>Ref Advanced</h3>
      <RefCustomTextInput />
      <RefAutoFocusTextInput />
      <p>うごかないよ</p>
      <RefParent />
      <p>うごくかも</p>
      <RefFCustomTextInput />
      <hr />
      <h3>Render Props 4</h3>
      <MouseTracker4 />
      <hr />
      <h3>Events</h3>
      <EverntsExample />
    </details>
    <details open>
      <summary>Hooks</summary>
      <UseEffectSample />
      <hr />
      <h3>class:use effect.</h3>
      <ClassUseEffect />
      <h3>クリーンアップを有する副作用</h3>
        class is...<FriendStatus friend={{id:10}}/><br />
        hooks is...<FriendStatusHooks friend={{id:10}}/>
      <hr />
      <h3>カスタムフック</h3>
        <FriendStatusCustomHook friend={{id:10}}/> 
        <ul><FriendListItem friend={{id:10,name:'react man'}}/>  </ul>
      <h3>フック間で情報を受け渡す</h3>
        <ChatRecipientPicker/>
    </details>
  </React.StrictMode>,
  document.getElementById("root")
);

// Ref
console.log(`ref.current?.type is "${ref.current?.type}"`);
