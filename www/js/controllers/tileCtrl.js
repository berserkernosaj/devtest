angular.module('devtest').controller('tileCtrl', function ($scope, $state) {
  var self = this;
  self.littleVid = {
    vid: "https://www.youtube.com/embed/Znzx2HXY8fo" ,
    type: "News Release",
    title: "University of Utah Names Historic Building After President Monson",
    description: "A historic mansion in downtown Salt Lake City has been renamed the Tomas S. Monson Center after the current president of The Church of Jesus Christ of Latter-day Saints."
  };
  self.bigVid = {
    vid: "https://www.youtube.com/embed/IrNqGqy5kbQ",
    type: "Different",
    title: "University of Iowa Names Historic Building After President Hinckley",
    description: "A historic palace in downtown Iowa Town City has been renamed the Gordon B Hinckley Center after the previous president of The Church of Jesus Christ of Latter-day Saints."
  };
  self.switchVid = function (little, big) {
    console.log("hey man, your a boss");
    self.littleVid = big;
    self.bigVid = little;
    self.bigVid.vid = self.bigVid.vid + "?autoplay=1"
    if (self.littleVid.vid.indexOf("?autoplay=1") !== -1) {
      self.littleVid.vid = self.littleVid.vid.slice(0, self.littleVid.vid.indexOf("?autoplay=1"))
    }
  }
})
