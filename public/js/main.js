angular.module("contatooh", ["ngRoute"])
    .config(function($routeProvider){
        
        $routeProvider.when("/contatos", {
            templateUrl: "partials/contatos.html",
            controller: "ContatosController"
        });
    
        $routeProvider.when("/contatos/:idContato", {
            templateUrl: "partials/contato.html",
            controller: "ContatoController"
        });
    
        $routeProvider.otherwise({redirectTo: "/contatos"});
    });