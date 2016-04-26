var MakeSlidyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

inherit(MakeSlidyDancer, MakeDancer);

MakeSlidyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    left: "+=10",
    top: "+=10",
    // top: "+=10",
    // bottom: "+=10",
    height: "toggle"
  }, 100, function() {
    // Animation complete.
  });
};
