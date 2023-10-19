import React from 'react';
import { mount } from 'enzyme';
import ResizeObserver from '../src';
import { _el as elementListeners } from '../src/utils/observerUtil';

describe('ResizeObserver.ref', () => {
  it('support nativeElement', () => {
    const wrapper = mount(
      <ResizeObserver>
        <div />
      </ResizeObserver>,
    );

    wrapper.setProps({ disabled: true });
    expect(elementListeners.get(wrapper.getDOMNode())).toBeFalsy();
  });
});
