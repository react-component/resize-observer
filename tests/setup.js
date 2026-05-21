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
