import React, { useState } from 'react';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput
} from '@chatscope/chat-ui-kit-react';

import type { MessageModel } from '@chatscope/chat-ui-kit-react';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<MessageModel[]>([
    {
      direction: 'incoming',
      message: 'Hi! Ask me anything about Abhik.',
      position: 'single' // ✅ Required field to fix the error
    }
  ]);

  const handleSend = async (text: string) => {
    // Add user message
    setMessages(prev => [
      ...prev,
      {
        direction: 'outgoing',
        message: text,
        position: 'single'
      }
    ]);

    try {
      const response = await fetch('http://localhost:5000/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text })
      });

      const data = await response.json();

      // Add bot's reply
      setMessages(prev => [
        ...prev,
        {
          direction: 'incoming',
          message: data.answer,
          position: 'single'
        }
      ]);
    } catch (error) {
      // Add error message from bot if server fails
      setMessages(prev => [
        ...prev,
        {
          direction: 'incoming',
          message: 'Error contacting server',
          position: 'single'
        }
      ]);
    }
  };

  return (
    <MainContainer>
      <ChatContainer>
        <MessageList>
          {messages.map((msg, i) => (
            <Message
              key={i}
              model={{
                message: msg.message,
                direction: msg.direction,
                position: msg.position
              }}
            />
          ))}
        </MessageList>
        <MessageInput
          attachButton={false}
          onSend={handleSend}
          placeholder="Ask about Abhik..."
        />
      </ChatContainer>
    </MainContainer>
  );
};

export default ChatBot;
