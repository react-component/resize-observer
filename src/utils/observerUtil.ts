import ResizeObserver from 'resize-observer-polyfill';

export type ResizeListener = () => void;

// =============================== Const ===============================
const elementListeners = new Map<HTMLElement, Set<ResizeListener>>();

const resizeObserver = new ResizeObserver((entities) => {});

// ============================== Observe ==============================
export function observe(element: HTMLElement, callback: ResizeListener) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }

  elementListeners.get(element).add(callback);
}

export function unobserve(element: HTMLElement, callback: ResizeListener) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
