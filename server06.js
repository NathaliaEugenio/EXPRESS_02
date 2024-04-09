//incorporar respostas a partir de outros arquivos

const express = require('express');

const app=express();

app.listen(3000,()=>{
    console.log("Servidor na área bro");
});

const funcoes=require('./function.js')

app.get('/add/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado=funcoes.add(a,b)
    res.send(`A soma de ${a} e ${b} é igual a ${resultado}`);
})

app.get('/sub/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado=funcoes.sub(a,b)
    res.send(`A diferença de ${a} e ${b} é igual a ${resultado}`);
})

app.get('/mul/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado=funcoes.mul(a,b)
    res.send(`A multiplicação de ${a} e ${b} é igual a ${resultado}`);
})

app.get('/div/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado=funcoes.div(a,b)
    res.send(`A divisão de ${a} e ${b} é igual a ${resultado}`);
})


