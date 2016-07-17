var app = angular.module('my-app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "static/views/home.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
   })
});