import React, { useState } from "react";

import "./ChatInput.css";

import { db } from "../../../firebase";
import firebase from "firebase";

import { useStateValue } from "../../../ContextApi/StateProvider";

import { Button } from "@material-ui/core";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });

      setInput("");
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
