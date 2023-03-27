(function (){
  'use strict';
  angular.module('Lunch Check',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=["$scope"];
  function LunchCheckController($scope){
    $scope.name="Lunch Check";
    $scope.upper=function(){
    };
    const str="enjoy Too Much";
    console.log(words[0]);
    console.log(words[1][2]);
  }
})
