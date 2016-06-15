describe('slidyDancer', function() {
  
  var slidyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidyDancer = new MakeSlidyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slidyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node slide', function() {
    sinon.spy(slidyDancer.$node, 'animate');
    slidyDancer.step();
    expect(slidyDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slidyDancer, 'step');
      expect(slidyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(slidyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(slidyDancer.step.callCount).to.be.equal(2);
    });
  });
});
