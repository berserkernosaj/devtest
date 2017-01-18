angular.module('devtest', ["ui.router"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("article", {
        url: "/article",
        templateUrl: "../templates/article.html",
        controller: "articleCtrl",
        controllerAs: "articleCtrl",
      })
      $urlRouterProvider.otherwise("/article");
  })
