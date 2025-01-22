export type ResizeListener = (element: Element) => void;

// =============================== Const ===============================
const elementListeners = new Map<Element, Set<ResizeListener>>();

function onResize(entities: ResizeObserverEntry[]) {
  entities.forEach(entity => {
    const { target } = entity;
    elementListeners.get(target)?.forEach(listener => listener(target));
  });
}

const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(onResize) : undefined;

// Dev env only
export const _el = process.env.NODE_ENV !== 'production' ? elementListeners : null; // eslint-disable-line
export const _rs = process.env.NODE_ENV !== 'production' ? onResize : null; // eslint-disable-line

// ============================== Observe ==============================
export function observe(element: Element, callback: ResizeListener) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}

export function unobserve(element: Element, callback: ResizeListener) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
