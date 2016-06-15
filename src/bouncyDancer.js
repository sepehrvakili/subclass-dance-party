var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"><img src="assets/Dancing-Cat.gif"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

inherit(MakeBouncyDancer, MakeDancer);

MakeBouncyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggleClass('bouncyToggle');
};
