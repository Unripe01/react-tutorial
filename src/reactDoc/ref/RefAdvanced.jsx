import React, { useRef } from "react";

export class RefAdvanced extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}

export class RefCustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // textInput DOM 要素を保持するための ref を作成します。
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 生の DOM API を使用して明示的にテキストの入力にフォーカスします。
    // 補足：DOM ノードを取得するために "current" にアクセスしています。
    this.textInput.current.focus();
  }

  render() {
    // コンストラクタで作成した `textInput` に <input> ref を関連付けることを
    // React に伝えます。
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

// ref 属性がカスタムクラスコンポーネントで使用されるとき、
// ref オブジェクトはコンポーネントのマウントされたインスタンスを current として受け取ります
// マウント直後にクリックされることをシミュレーションするために上記の
// CustomTextInput をラップしたい場合は、
// ref を使用してカスタムインプットにアクセスし、
// その focusTextInput メソッドを手動で呼び出せます。
export class RefAutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }
  // これは CustomTextInput がクラスとして宣言されている場合にのみ
  // 機能することに注意してください。
  render() {
    return <RefCustomTextInput ref={this.textInput} />;
  }
}

//   関数コンポーネントにはインスタンスがないため、
//   デフォルトでは関数コンポーネントに ref 属性を使用することはできません。
function MyFunctionComponent() {
  return <input />;
}
export class RefParent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // これは動き「ません」！
    return <MyFunctionComponent ref={this.textInput} />;
  }
}

export function RefFCustomTextInput(props) {
    // ref が参照できるように、textInput をここで宣言する必要があります。
    const textInput = useRef(null);
    
    function handleClick() {
      textInput.current.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );
  }