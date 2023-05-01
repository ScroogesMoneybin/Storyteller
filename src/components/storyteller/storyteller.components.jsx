import { useState, Fragment } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import {StoryContainer} from './storyteller.styles.jsx';


const Storyteller =() => {

  const API_KEY = process.env.REACT_APP_CHATGPT_API_KEY;
  const chatModelVersion = "gpt-3.5-turbo";
  const systemMessage = { 
  "role": "system", 
  "content": process.env.REACT_APP_CHATGPT_SYSTEM_MESSAGE_CONTENT_PROMPT
  }

const [chatting, setChatting] = useState([
    {
      message: "Greetings, stranger!  I am an ancient traveler, who has seen and heard much.  If you wish, I shall share some of the stories I have heard.",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  
  const [isThinking, setIsThinking] = useState(false);

  const handleInteract = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...chatting, newMessage];
    
    setChatting(newMessages);

    setIsThinking(true);
    await processMessageToAi(newMessages);
  };

  const processMessageToAi= async (chatMessages) => { 

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

    const apiRequestBody = {
      "model": chatModelVersion,
      "messages": [systemMessage, ...apiMessages]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    })
    .then((res) => res.json())
    .then((response) => {
        setChatting([...chatMessages, {
        message: response.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsThinking(false);
    });
  }

return (
    <Fragment>
      <StoryContainer>
        <MainContainer>
          <ChatContainer>       
            <MessageList scrollBehavior="smooth" typingIndicator={isThinking ? <TypingIndicator content="The Ancient One is Remembering" /> : null}>
              {chatting.map((message, i) => <Message key={i} model={message} />)}
            </MessageList>
            <MessageInput placeholder="Speak to the Ancient One" onSend={handleInteract} />        
          </ChatContainer>
        </MainContainer>
      </StoryContainer>
    </Fragment>
  )

}

export default Storyteller;