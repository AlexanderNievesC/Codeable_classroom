import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import styled from "@emotion/styled";
import { createUser } from "../services/users-services";

const Stylediv = styled.div`
  min-height: 490px;
`;

function ChatBox() {
  const [username, setUserName] = useState("username");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  let allMessages = [];

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("555779b0b3fa88b8adf4", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("chat");
    channel.bind("message", function (data) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    await createUser({ username });
    setMessage("");
  };

  return (
    <div>
      <div>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <Stylediv>
        {messages.map((message) => {
          return (
            <div>
              <div>{message.username}</div>
              <div>{message.message}</div>
            </div>
          );
        })}
      </Stylediv>
      <form onSubmit={(e) => submit(e)}>
        <input
          placeholder="Write a message"
          onChange={(e) => setMessage(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default ChatBox;
