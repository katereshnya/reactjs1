import React, { useState, useEffect } from "react";
import "./App.css";

const FunctionComponent = ({ onClick }) => {
  const [messages, setMessages] = useState(["Hello from bot"]);

  useEffect(() => {
    const TEXT = "Hello from bot";
    const lastMessages = messages[messages.length - 1];
    let timerId = null;

    if (lastMessages !== TEXT) {
      timerId = setTimeout(() => {
        setMessages([...messages, TEXT]);
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  let textInput = React.createRef();

  const sendMessage = () => {
    setMessages([...messages, textInput.current.value]);
    console.log(textInput.current.value);
  };

  return (
    <div class="App">
      <div>
        <input
          type="text"
          placeholder="Введите сообщение ..."
          ref={textInput}
        />
        <button onClick={() => sendMessage()}>Send</button>
      </div>

      <p>
        {messages.map((m) => (
          <div>{m}</div>
        ))}
      </p>
    </div>
  );
};

export const App = () => {
  return <FunctionComponent />;
};
