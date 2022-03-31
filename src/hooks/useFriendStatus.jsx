import { useState, useEffect } from "react";

/** Hooks抽出 */
export function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    const chat = new ChatAPI();
    chat.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      chat.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  },[friendID]);
  return isOnline;
}

// hooks 共有して使う
/** １つめ */
export function FriendStatusCustomHook(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return <>Loading...</>;
  }
  return isOnline ? <>Online</> : <>Offline</>;
}
/** ２つめ */
export function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);
  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}

/** Hooksは毎回かならずunmountするのでsetTimeoutすれば十分・・・ */
class ChatAPI {
  constructor() {
    this.myStatus = false;
    this.myEventId = 0;
  }

  subscribeToFriendStatus(id, fn) {
    const _this = this;
    fn({ isOnline: undefined })//select変更されたときに一旦戻している
    //   console.log("subscribeToFriendStatus");
    this.myEventId = setInterval(() => {
      _this.myStatus = !_this.myStatus;
      fn({ isOnline: _this.myStatus });
    }, 3000);
    //   console.log(`this.myEventId= ${this.myEventId}`)
  }

  unsubscribeFromFriendStatus(id, fn) {
    const _this = this;
    //   console.log("unsubscribeFromFriendStatus");
    clearInterval(_this.myEventId);
    // fn({ isOnline: false });
  }
}

////// フック間で情報を受け渡す
function Circle(color) {
  return <span style={color}>●</span>;
}

const friendList = [
  { id: 1, name: "Phoebe" },
  { id: 2, name: "Rachel" },
  { id: 3, name: "Ross" },
];

export function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);//recipientIDを渡して伝搬させる

  return (
    <>
      <Circle color={isRecipientOnline ? "green" : "red"} />
      <select
        value={recipientID}
        onChange={(e) => setRecipientID(Number(e.target.value))}//state変化させたら、useFriendStatusがunmountされてイベント発火する（赤に戻る）
      >
        {friendList.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
}
