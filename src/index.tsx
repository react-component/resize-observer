import * as React from 'react';
import findDOMNode from 'rc-util/lib/Dom/findDOMNode';
import toArray from 'rc-util/lib/Children/toArray';
import warning from 'rc-util/lib/warning';
import ResizeObserver from 'resize-observer-polyfill';

type DomElement = Element | null;

interface ResizeObserverProps {
  children: React.ReactNode;
  disabled?: boolean;
  /** Trigger if element resized. Will always trigger when first time render. */
  onResize?: (size: { width: number; height: number }) => void;
}

interface ResizeObserverState {
  height: number;
  width: number;
}

type RefNode = React.ReactInstance | HTMLElement | null;

// Still need to be compatible with React 15, we use class component here
class ReactResizeObserver extends React.Component<
  ResizeObserverProps,
  ResizeObserverState
> {
  static displayName = 'ResizeObserver';

  resizeObserver: ResizeObserver | null = null;

  childNode: RefNode = null;

  currentElement: Element | null = null;

  state = {
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.onComponentUpdated();
  }

  componentDidUpdate() {
    this.onComponentUpdated();
  }

  componentWillUnmount() {
    this.destroyObserver();
  }

  onComponentUpdated() {
    const { disabled } = this.props;

    // Unregister if disabled
    if (disabled) {
      this.destroyObserver();
      return;
    }

    // Unregister if element changed
    const element = findDOMNode(this.childNode || this) as Element;
    const elementChanged = element !== this.currentElement;
    if (elementChanged) {
      this.destroyObserver();
      this.currentElement = element;
    }

    if (!this.resizeObserver && element) {
      this.resizeObserver = new ResizeObserver(this.onResize);
      this.resizeObserver.observe(element);
    }
  }

  onResize: ResizeObserverCallback = (entries: ResizeObserverEntry[]) => {
    const { onResize } = this.props;

    const { target } = entries[0];

    const { width, height } = target.getBoundingClientRect();

    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    const fixedWidth = Math.floor(width);
    const fixedHeight = Math.floor(height);

    if (this.state.width !== fixedWidth || this.state.height !== fixedHeight) {
      const size = { width: fixedWidth, height: fixedHeight };

      this.setState(size);

      if (onResize) {
        onResize(size);
      }
    }
  };

  destroyObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }

  render() {
    const { children } = this.props;
    const childNodes = toArray(children);

    if (childNodes.length > 1) {
      warning(
        false,
        'Find more than one child node with `children` in ResizeObserver. Will only observe first one.',
      );
    } else if (childNodes.length === 0) {
      warning(
        false,
        '`children` of ResizeObserver is empty. Nothing is in observe.',
      );

      return null;
    }

    const childNode = childNodes[0];

    if (React.isValidElement(childNode)) {
      const { ref } = childNode as any;

      childNodes[0] = React.cloneElement(childNode as any, {
        ref: (node: RefNode) => {
          this.childNode = node;

          // Should forward ref
          if (!ref) {
            return;
          }

          const type = typeof ref;
          if (type === 'function') {
            ref(node);
          } else if (type === 'object') {
            ref.current = node;
          }
        },
      });
    }

    return childNodes.length === 1 ? childNodes[0] : childNodes;
  }
}

export default ReactResizeObserver;
