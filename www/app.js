angular.module('devtest', ["ui.router"])
  .config(function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    $stateProvider
      .state("article", {
        url: "/article",
        templateUrl: "../templates/article.html",
        controller: "articleCtrl",
        controllerAs: "articleCtrl",
      })
      .state("tiles",{
        url: "/tiles",
        templateUrl: "../templates/tiles.html",
      })
      .state("tile",{
        url:"/tile",
        templateUrl: "../templates/tile.html",
        controller: "tileCtrl",
        controllerAs: "tileCtrl",
      })
      $urlRouterProvider.otherwise("/article");
      $sceDelegateProvider.resourceUrlWhitelist([
         'self',
         '*://www.youtube.com/**'
      ]);
  })
