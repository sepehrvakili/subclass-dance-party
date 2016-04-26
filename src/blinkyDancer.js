var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"><img src="assets/dog-dance.gif"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

inherit(MakeBlinkyDancer, MakeDancer);

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};
