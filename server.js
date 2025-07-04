const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'https://webpagegenerator-f.onrender.com'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  credentials: true
}));
app.use(bodyParser.json());

const ai = new GoogleGenAI({});

app.get('/', (req, res) => {
  res.json("Hi my job is done is here!");
});

app.post( '/api',async(req,res)=>{
    const prompt=req.body.query;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  res.json(response.text);
});


PORT=process.env.PORT;
app.listen(PORT,'0.0.0.0', () => {
  console.log("Server is running mate! at "+PORT);
});