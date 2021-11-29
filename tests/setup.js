const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { _el: elementListeners } = require('../src/utils/observerUtil');

Enzyme.configure({ adapter: new Adapter() });

Object.assign(Enzyme.ReactWrapper.prototype, {
  findObserver() {
    return this.find('ResizeObserver');
  },
  triggerResize() {
    const dom = this.findObserver().getDOMNode();
    elementListeners.get(dom).forEach(listener => {
      listener(dom);
    });
  },
});
