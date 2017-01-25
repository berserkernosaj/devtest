angular.module('devtest').controller('mCtrl', function ($scope, $state) {
  var self = this;
  self.go = function (where) {
    console.log(where);
    $state.go(where);
  }

})
