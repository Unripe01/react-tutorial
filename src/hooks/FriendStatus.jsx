import React, { useState, useEffect } from "react";

/** クラス構文 */
export class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.chat = new ChatAPI()
  }
  componentDidMount() {
    this.chat.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  componentWillUnmount() {
    this.chat.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  handleStatusChange(status) {
    // console.log(`handleStatusChange called! ${JSON.stringify(status)}`);
    this.setState({
      isOnline: status.isOnline,
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return "Loading...";
    }
    return this.state.isOnline ? "Online" : "Offline";
  }
}

/** Hooks構文 */
export function FriendStatusHooks(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    var chat = new ChatAPI()
    chat.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      chat.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOnline]);

  if (isOnline === null) {
    return <>Loading...</>;
  }
  return isOnline ? <>Online</> : <>Offline</>
}

class ChatAPI {
  constructor() {
    this.myStatus = false;
    this.myEventId = 0;
  }

  subscribeToFriendStatus(id,fn) {
    const _this = this
    // console.log("subscribeToFriendStatus");
    this.myEventId = setInterval(() => {
      _this.myStatus = !_this.myStatus;
      fn({ isOnline: _this.myStatus });
    }, 5000);
    // console.log(`this.myEventId= ${this.myEventId}`)

    //30秒で監視をやめる
    setTimeout(() => {
      // console.log("clearInterval");
      clearInterval(_this.myEventId);
    }, 30000);
  }

  unsubscribeFromFriendStatus(id,fn) {
    const _this = this
    // console.log("unsubscribeFromFriendStatus");
    clearInterval(_this.myEventId);
    // fn({ isOnline: false });
  }
}
