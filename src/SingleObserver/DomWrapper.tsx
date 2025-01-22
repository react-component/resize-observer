import * as React from 'react';

/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
class DomWrapper extends React.Component<React.PropsWithChildren> {
  render() {
    return this.props.children;
  }
}

export default DomWrapper;
