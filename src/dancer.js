var inherit = function(child, parent) {
  var parentCopy = Object.create(parent.prototype);
  parentCopy.constructor = child;
  child.prototype = parentCopy;
};

// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  // this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  MakeDancer.prototype.step.call(this);
  MakeDancer.prototype.setPosition.call(this, top, left);
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(function() {
    context.step();
  }, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
