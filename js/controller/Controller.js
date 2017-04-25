angular.module("singlepageapp").controller("Controller", function ($scope, APIService, $location) {


    $scope.curs = [];

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };


    var listarCurso = function(){

        var sucesso = function(dados){
            $scope.curs = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

       APIService.listarCurso().then(sucesso,erro);
    };


    listarCurso();




});



