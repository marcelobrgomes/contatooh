angular.module("contatooh").controller("ContatosController", function($scope, $resource) {
    $scope.contatos = [];
    $scope.filtro = '';
    
    var promise = $http.get("/contatos");
    
    promise.success(function(data) {
        $scope.contatos = data
    });
    
    promise.error(function(statusText) {
       console.log("Não foi possível obter a lista de contatos:"); 
       console.log(statusText); 
    });
    
});