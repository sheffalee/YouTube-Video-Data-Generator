// const readline = require('readline')

const express = require('express');
const { generateMeta, generateImage } = require('./controllers/openaiControllers')

//app setup
const app = express();
app.listen(4000 ,  ()=>console.log('listening for request on port 4000'))

//middleware
app.use(express.json())
app.use(express.static('public'))

//routes
app.post('/openai/meta'  ,generateMeta)
app.post('/openai/image' , generateImage)


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question("YouTube Video Title: \n", (title) => generateMeta(title))
// r1.question("Describe your youtube thumbnail ? :\n", (title)=>generateImage(title));
// rl.question("YouTube Thumbnail: \n", (title) => generateImage(title))