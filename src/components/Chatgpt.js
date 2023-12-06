import { useState , useEffect } from "react"
import './chatgpt.css';


const Chatgpt=() => {

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
    <div id="app">
      <section id="side-bar">
      <button id='newmessage' onClick={createNewChat}> + New Chat </button>
      <ul className="history">


      {uniqueTitle?.map((uniqueTitle , index) => <li key={index} onClick={() => handleClick(uniqueTitle)}>{uniqueTitle}</li> )}

      </ul>
      <nav>
  <a href="#" >
    <p>HOME</p>
  </a>
</nav>
      </section>

      <section id="main">
       {!currentTitle && <h1>ChatGPT</h1>}
        <ul className="feed">
        {currentChat?.map((ChatMessage , index) => <li key={index}> 
        <p className="role"> {ChatMessage.role}</p>
        <p> {ChatMessage.content} </p>
       
        </li>)}
        </ul>
        <div className="bootom-section">
          <div className="input-container"> 
          <input value={value || ''} onChange={(e) => setValue(e.target.value)}/> 
          <div id="submit" onClick={getMessages}> <p className="p1">➢ </p> </div>
  
           </div>
          <p className="info">GPT-3.5 models can understand and generate natural language or code. The most capable and effective model </p>
        </div>
      </section>

    </div>
  );
}

export default Chatgpt;
