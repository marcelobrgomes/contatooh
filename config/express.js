//A variável express armazena uma função que retorna uma instância do Express.
var express = require("express");

module.exports = function() {
	var app = express();

	//Variável de ambiente
	app.set("port", 3000);
	return app;
};