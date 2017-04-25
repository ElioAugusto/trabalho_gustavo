angular.module("singlepageapp").controller("disciplinaContrller", function ($scope, APIService, $location) {



    $scope.disci = [];

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };


    var listarDisciplina = function(){

        var sucesso = function(dados){
            $scope.disci = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

        APIService.listarDisciplina().then(sucesso,erro);
    };

    $scope.salvarDisciplina = function(disciplina){

        APIService.salvarDisciplina(disciplina).then(function(disciplina){
            alert("cadastrada com sucesso");
            $location.url("/cadastroDeDisciplina");
        },function(err){
            alert("Deu tilt");
        });
    }

    var listarCurso = function(){

        var sucesso = function(dados){
            $scope.curs = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

        APIService.listarCurso().then(sucesso,erro);
    };

    listarDisciplina();
    listarCurso();



});

