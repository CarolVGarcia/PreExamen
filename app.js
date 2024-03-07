//const express = require("express");
import express from 'express';

//const http = require("http");
import http from 'http';
import { fileURLToPath } from 'url';
import json from 'body-parser';
import path from 'path';
import misRutas from './ROUTER/index.js'




const puerto = 80;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




//Declarar la variable punto de inicio

const main = express();

main.set("view engine", "ejs");
main.set(express.static(__dirname+ '/public'));
main.use(json.urlencoded({extendeds:true}))
main.use(misRutas.router);


main.listen(puerto,()=>{
    console.log("Se inicio el servidor por el puerto: " + puerto)
})