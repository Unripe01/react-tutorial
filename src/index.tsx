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
import { Reducer, Reducer2, State } from "./hooks/StateVsReduser";
import { ShowAlert } from "./hooksQuestion/ShowAlert";
import { NG, OK } from "./hooksQuestion/NotSafeOrOK";
import { NgHightFrequency, OkHightFrequency } from "./hooksQuestion/HightFrequency";
import { UseMemoSample } from "./hooksQuestion/UseMemoSample";

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
    <details>
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
        <hr />
      <h3>フック API リファレンス</h3>
      <State initialCount={0}/><br />
      <Reducer />
      <h4>--遅延初期化</h4>
      <Reducer2 initialCount={0}/>
    </details>
    <details open>
      <summary>フックに関するよくある質問</summary>
      <h3>関数内で古い props や state が見えているのはなぜですか？</h3>
        <ShowAlert/>
      <h3>依存の配列から関数を省略しても大丈夫ですか？</h3>
        <NG someProp={'NG'} /><br/>
        <OK someProp={'NG'} />
      <h3>副作用の依存リストが頻繁に変わりすぎる場合はどうすればよいですか？</h3>
        <NgHightFrequency />
        <OkHightFrequency />
      <h3>パフォーマンスのコツ</h3>
        <UseMemoSample a={123} b={'bbb'}/>
    </details>
  </React.StrictMode>,
  document.getElementById("root")
);

// Ref
console.log(`ref.current?.type is "${ref.current?.type}"`);
