import express from 'express'
import { getChatbotReply } from '../services/chatbot.js'
import bodyParser from 'body-parser'

const routerChatBot = express.Router()

routerChatBot.use(bodyParser.json())

routerChatBot.post('/chatBot', async (req,res) =>{
try{
  
    const { mensaje,sessionId } = req.body;
    const respuesta = await getChatbotReply(mensaje, sessionId);
    res.status(200).json({ respuesta });

}catch (error) {
    console.error('Error en chatbot:', error);
    res.status(500).send('Error interno');
  }
});

export default routerChatBot;
