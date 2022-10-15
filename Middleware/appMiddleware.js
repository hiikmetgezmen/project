const express = require('express');


const appmiddle = (req,res,next)=>{
    console.log('yeni bir istek geldi');
    next();
};

const appmiddlefor = (req,res,next)=>{
    console.log('Post isteği için istek gönderildi');
    next();
};
module.exports = {appmiddle,appmiddlefor};