angular.module("singlepageapp").factory("APIService",
    function($http){

    var _listarCurso = function(){
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/"+1+"/"+100
        });
    };

    var _listarDisciplina  = function(){
            return $http({
                method:"GET",
                url: "http://siscadcpwiv.herokuapp.com/disciplina/list/"+1+"/8"
            });
    };

    var _listarAluno  = function(){
           return $http({
                method:"GET",
               url: "http://siscadcpwiv.herokuapp.com/aluno/list/"+1+"/"+8});
    };

        var _listarAlunoPagina  = function(id){
            return $http({
                method:"GET",
                url: "http://siscadcpwiv.herokuapp.com/aluno/list/"+id+"/8"});
        };




        var _listarDisciplinaPagina  = function(id){
            return $http({
                method:"GET",
                url: "http://siscadcpwiv.herokuapp.com/aluno/list/"+id+"/8"});
        };


        var _salvarCurso = function(dados){
        return $http({
            method:"POST",
            url: " http://siscadcpwiv.herokuapp.com/curso/ ",
            data:dados
            });
    };

    var _salvarDisciplina = function(dados){
            return $http({
                method:"POST",
                url: " http://siscadcpwiv.herokuapp.com/disciplina/ ",
                data:dados
            });
    };

    var _salvarAluno = function(dados){
            return $http({
                method:"POST",
                url: " http://siscadcpwiv.herokuapp.com/aluno/ ",
                data:dados
            });
    };


    return {

        listarCurso: _listarCurso,
        listarDisciplina: _listarDisciplina,
        listarAluno: _listarAluno,
        listarAlunoPagina: _listarAlunoPagina,
        salvarCurso: _salvarCurso,
        salvarDisciplina: _salvarDisciplina,
        salvarAluno: _salvarAluno
    }
});
