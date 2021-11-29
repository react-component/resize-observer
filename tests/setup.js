const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { _rs: onResize } = require('../src/utils/observerUtil');

Enzyme.configure({ adapter: new Adapter() });

Object.assign(Enzyme.ReactWrapper.prototype, {
  findObserver(index = 0) {
    return this.find('ResizeObserver').at(index);
  },
  triggerResize(index = 0) {
    const target = this.findObserver(index).getDOMNode();
    onResize([{ target }]);
  },
});
