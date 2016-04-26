var MakeSlidyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

inherit(MakeSlidyDancer, MakeDancer);

MakeSlidyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    left: "+=10",
    top: "+=10",
    //right: "-=10",
    //bottom: "-=10",
    height: "toggle"
  }, 100, function() {
    // Animation complete.
  });
 // console.log(this.top, this.left);
};

// on click for interact dancers
// iterate over the dancers array
  // run the pathgorean theorm for 
    // every dancer compared to every other dancer
    // if the distance is less than some value
      // 


// var getDistance = function(x1, y1, x2, y2) {
//   var a = x1 - x2;
//   \
// };


