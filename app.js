const express = require("express")
const tweetRouter = require('./src/routes/tweetRoutes'); 
const userRouter = require('./src/routes/userRoutes');

const app= express();
const port= 3000

app.use('/tweet', tweetRouter);
app.use('/user', userRouter)

app.listen(port, () => console.log(`Voici mon application node est demarrée: sur http://localhost:${port}`));

module.exports= app;