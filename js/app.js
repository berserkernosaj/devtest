angular.module('devtest', ["ui.router"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("article", {
        url: "/story",
        templateUrl: "/templates/article.html",
        controller: "articleCtrl",
        controllerAs: "articleCtrl"
      })
  })
