//app.js
var express = require('express')
const http = require('http');
var app = express()

app.get('/',(req,res)=>{
    res.send('hello express');
})

app.get('/api/user',(req,res)=>{
    res.json('hi,user')
})

app.listen(3065,()=>{
    console.log('서버 실행 중')
});