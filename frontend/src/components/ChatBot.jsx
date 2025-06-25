import { useState } from "react";
import "./ChatBot.css";
import botIcon from "../assets/bot.jpg"; // Make sure this path is correct

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! 🤖" },
    { role: "bot", content: "How can I help?" },
  ]);
  const [input, setInput] = useState("");
  const [showChat, setShowChat] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setTimeout(() => {
        const botMsg = { role: "bot", content: data.response || "..." };
        setMessages((prev) => [...prev, botMsg]);
      }, 400);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "⚠️ Error: Server not responding." },
      ]);
      console.error(err);
    }
  };

  return (
    <div className="chatbot-wrapper">
      <img
        src={botIcon}
        alt="Chat"
        className="chatbot-icon"
        onClick={() => setShowChat(!showChat)}
      />

      {showChat && (
        <div className="chatbox">
          <div className="chatbox-header">
            <div className="bot-info">
              <img src={botIcon} alt="Bot" className="bot-avatar" />
              <span>Chat Assistant</span>
            </div>
            <button className="close-btn" onClick={() => setShowChat(false)}>×</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-bubble ${msg.role === "user" ? "user" : "bot"}`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="send-btn">➤</button>
          </div>
        </div>
      )}
    </div>
  );
}
