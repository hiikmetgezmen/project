const express = require('express');
const app = express();
const {appmiddle,appmiddlefor} = require('./Middleware/appMiddleware');

app.use(appmiddle);

app.get('/hello' ,(req,res)=>{
    res.send('Merhaba get isteği attınız.');
});
app.post('/hello',appmiddlefor, (req,res)=>{
    res.send('Merhaba post isteği attınız.');
});
app.put('/hello',(req,res)=>{
    res.send('Merhaba put isteği attınız.');
});
app.delete('/hello',(req,res)=>{
    res.send('Merhaba delete isteği attınız.');
});

app.listen(3000,(err)=>{
    if(err)console.log(err);
});