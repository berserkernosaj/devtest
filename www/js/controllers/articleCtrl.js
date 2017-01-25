angular.module('devtest').controller('articleCtrl', function ($scope, $state) {
  var self = this;
  self.img1 = "../images/photo01.jpg";
  self.img2 = "../images/photo02.jpg";
  self.img3 = "../images/photo03.jpg"

  self.changeImage = function (img1, img2) {
    self.img1 = img2;
    if(img2 === self.img2){
      self.img2 = img1;
    }else {
      self.img3 = img1;
    }
  }

})
