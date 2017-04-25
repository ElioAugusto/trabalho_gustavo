angular.module("singlepageapp").controller("alunoController", function ($scope, APIService, $location) {



    $scope.aul = [];
    $scope.pagina = [];

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };

    $scope.proxPag = function (pagina) {
        $scope.pagina = pagiana + 1;
        APIService.listarAlunoPagina($scope.pagina).thead(function (dados) {
            if (!dados.data.length == 0) {
                $cope.Aluno == dados.data;
            }
            ;

        }, function (err) {
            alert("ERRo" + err);

        });


    };



    $scope.voltaPag = function (pagina) {
        $scope.pagina = pagiana-1;

        if($cope.pagina == 0){
            $cope.pagina = 1;
        }
        APIService.listarAlunoPagina($scope.pagina).thead(function (dados) {
            if(!dados.data.length == 0){
                $cope.Aluno == dados.data;
            };

        },function (err) {
            alert("ERRo"+err);

        });

    };




    var listarAluno = function(){

        var sucesso = function(dados){
            $scope.aul = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

        APIService.listarAluno().then(sucesso,erro);
    };

    $scope.salvarAluno = function(aluno){

        APIService.salvarAluno(aluno).then(function(aluno){
            alert("cadastrada com sucesso");
            $location.url("/cadastroDeAluno");
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

    listarAluno();
    listarCurso();


});