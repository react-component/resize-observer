const Enzyme = require('enzyme');

const { _rs: onResize } = require('../src/utils/observerUtil');

Object.assign(Enzyme.ReactWrapper.prototype, {
  findObserver(index = 0) {
    return this.find('ResizeObserver').at(index);
  },
  triggerResize(index = 0) {
    const target = this.findObserver(index).getDOMNode();
    onResize([{ target }]);
  },
});

// Mock for ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(target) {
    this.callback([{ target }]);
  }

  unobserve() {}
};
