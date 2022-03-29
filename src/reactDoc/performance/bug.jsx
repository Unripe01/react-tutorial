const React = require('react');

class ListOfWords extends React.PureComponent {
    render() {
      return <div>{this.props.words.join(',')}</div>;
    }
  }

// 問題は PureComponent が this.props.words の古い値と新しい値を単純に比較していることにあります。
// 上記のコードでは WordAdder の handleClick メソッド内で words 配列の内容をミューテートしてしまうので、
// this.props.words の新旧の値は、たとえ配列内の実際の単語が変更されていたとしても、比較の結果同じだとみなしてしまうのです。
// そのため ListOfWords はレンダーすべき新しい単語が追加されているにも関わらず、更新されません。

export class WordAdder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        words: ['marklar']
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      // This section is bad style and causes a bug
      const words = this.state.words;
      //以下のように修正すると、オブジェクトが新しくなるので問題を解消することができる。
      // words.push('marklar');
      // this.setState({words: words});
      this.setState(state => ({
        words: [...state.words, 'marklar'],
      }));
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleClick} >インクリメント</button>
          <ListOfWords words={this.state.words} />
        </div>
      );
    }
  }