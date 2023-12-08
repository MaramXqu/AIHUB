import React from "react";
import { useState , useEffect } from "react"
import './chatgpt.css';
import Header from "../components/Header/Header";



const Chatgpt = () => {

  const[value , setValue]= useState(null) 
  const [ message , setMessage]= useState(null)  
  const [previouseChats , setPreviouseChats]= useState([]) 
  const [currentTitle, setCurrentTitle] = useState(null)

  
  // NEW CHAT : DONE
  const createNewChat = () => {
    setMessage(null)
    setValue("")
    setCurrentTitle(null)
  }


  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle)
    setMessage(null)
    setValue("")


  }


// GET MESSAGE FROM API TO CONSOLE : DONE
  const getMessages= async () =>{
    const Options ={
      method:'POST',
      body: JSON.stringify({
      message: JSON.stringify(value)

    }),
    headers: {
      "content-Type": "application/json"}
    }
    try{
    const response = await fetch('http://localhost:3000/chatapi', Options)
    const data= await response.json()
    setMessage(data.result) 

    } catch(error){

      console.error(error)
    }
  }

//console.log(message)


// show current chat with previous chats

useEffect(() => {

console.log(currentTitle, value, message)

if (!currentTitle && value && message){

  setCurrentTitle(value)
}
if (currentTitle && value && message)
{
  setPreviouseChats( previouseChats => (
    [...previouseChats,{

     
      title: currentTitle,
      role:"user",
      content:value


    }, {

     
      title:currentTitle,
      role:"assistant",
      content: message

    }
  ]
  ))
}

}, [message , currentTitle])

console.log(previouseChats)

// conversation under the same title 

const currentChat = previouseChats.filter(previouseChats => previouseChats.title === currentTitle)
const uniqueTitle= Array.from(new Set(previouseChats.map(previouseChats => previouseChats.title)))
console.log(uniqueTitle)


  return (
    <>
    <Header/>
    <div id="Chatapp">
      <section id="Chatside-bar">
      <button id='Chatnewmessage' onClick={createNewChat}> + New Chat </button>
      <ul id="Chathistory">


      {uniqueTitle?.map((uniqueTitle , index) => <li key={index} onClick={() => handleClick(uniqueTitle)}>{uniqueTitle}</li> )}

      </ul>
      <nav id="ChatNav">
  <a href="#" >
    <p>HOME</p>
  </a>
</nav>
      </section>

      <section id="Chatmain">
       {!currentTitle && <h1>ChatGPT</h1>}
        <ul id="Chatfeed">
        {currentChat?.map((ChatMessage , index) => <li key={index}> 
        <p id="Chatrole"> {ChatMessage.role}</p>
        <p> {ChatMessage.content} </p>
       
        </li>)}
        </ul>
        <div id="Chatbootom-section">
          <div id="Chatinput-container"> 
          <input id="ChatInput" value={value || ''} onChange={(e) => setValue(e.target.value)}/> 
          <div id="Chatsubmit" onClick={getMessages}> <p id="Chatp1">➢ </p> </div>
  
           </div>
          <p id="Chatinfo">GPT-3.5 models can understand and generate natural language or code. The most capable and effective model </p>
        </div>
      </section>

    </div>
    </>
  );
};

export default Chatgpt;

