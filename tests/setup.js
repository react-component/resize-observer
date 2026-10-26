// Mock for ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(target) {
    if (!target || !(target instanceof Element)) {
      throw new TypeError(
        "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element'.",
      );
    }
    this.callback([{ target }]);
  }

  unobserve(target) {
    if (!target || !(target instanceof Element)) {
      throw new TypeError(
        "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element'.",
      );
    }
  }
};
