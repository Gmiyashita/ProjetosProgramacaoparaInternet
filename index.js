//Aplicação desenvolvida com auxílio da biblioteca /módulo 
//Express - é um framework pra ajudar.
//Reduz a complexidade do protocolo HTTP
//para instalar o express, usa o comando 
//npm install express
//sem o type module, CommonJS --> const express = require("express");

import express from "express";

const host ="0.0.0.0"; //disponivel em todas as interfaces de rede do computador
const porta=3000; //identifica a aplicacao como sendo 3000 ou seja, porta 3000
const app=express(); //aplicação servidor web que se comunica utilizando o HTTP.
function paginaInicial (requisicao, resposta){
    resposta.send(`<h1>Seja bem vindo!</h1>
                <br/>
                <h2>Executaremos uma tabuada.</h2>
                `); //a crase no lugar da "" permite que continue escrevendo em várias linhas
}
function tabuada(entrada,saida){
    const num=parseInt(entrada.query.num);
    const qtd=parseInt(entrada.query.qtd);

        for(let i=0;i<=qtd;i++){
            let resp=0;
            resp=i*num;
            saida.write(resp);
            
        }
        saida.end();
}
                //---> a Função não é executada, passada como parâmetro, por isso n usa o ()
                //|
app.get("/",paginaInicial); //http:localhost:3000/ <-- Raiz da aplicação
app.get("/tabuada",tabuada);
app.listen(porta,host,()=>{
    console.log("Servidor em execução http://"+host+":"+porta);
}); //funcao anonima sintaxe mais moderna, arrow function ou função de seta.




