//rotas com hífens e pontos

const express = require('express');

const app=express();

server.listen(3000,()=>{
    console.log("Servidor no ar");
});

//rota base

app.get('/',(req,res)=>{
    res.send("Teste com parâmetro");
})

//rotas com hífens
app.get('/distancia/:pontoA-:pontoB',(req,res)=>{
    const pontoA=req.params.pontoA;
    const pontoB=req.params.pontoB;
    const distancia=pontoA.pontoB;
    res.send(`A distância, usando ponto, entre ${pontoA} e ${pontoB} é ${distancia}`);
})
