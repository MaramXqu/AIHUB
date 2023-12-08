
const express= require('express')
const cors =require('cors')
const app= express()
app.use(express.json())
app.use(cors())
require('dotenv').config()
app.use(express.static(path.resolve(__dirname,"../build")));
app.post ('/chatapi', async (req ,res) => {

 const options = {
    method:'POST',
    headers: {
      'content-type': 'application/json',
		'X-RapidAPI-Key': 'd935b06896msh9653f65915cc8a3p15dc18jsn59eb36443912',
		'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'

    },
    body : JSON.stringify({

       messages: [
            {
                role: "user",
                content: JSON.stringify(req.body)
            }
        ],
        web_access: false
  
    })

 }
  try{
    const response= await fetch('https://open-ai21.p.rapidapi.com/conversationgpt', options)
    const data = await response.json()
    res.send(data)
  } 
   catch(error){
    console.error(error)
  }
})

app.get('/*', function(req,res){
  res.sendFile(path.json(__dirname,'..bulid ', 'index.html'))
})

const {PORT} =process.env;
app.listen(PORT,() => console.log('your server is running'+PORT));


   
