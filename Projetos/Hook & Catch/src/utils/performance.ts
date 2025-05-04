
/**
 * Utility functions for performance optimization
 */

// Function to defer non-critical operations
export const deferOperation = (callback: () => void, delay = 100) => {
  if (typeof window !== 'undefined') {
    setTimeout(callback, delay);
  }
};

// Debounce function to limit function calls
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
};

// Function to detect when element is in viewport
export const useIntersectionObserver = (
  element: HTMLElement | null,
  callback: (isIntersecting: boolean) => void,
  options = { rootMargin: '200px', threshold: 0.1 }
) => {
  if (!element || typeof IntersectionObserver === 'undefined') {
    callback(true); // Fallback for older browsers
    return () => {};
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      callback(entry.isIntersecting);
    },
    options
  );

  observer.observe(element);
  return () => observer.disconnect();
};

// Browser idle callback utility
export const runWhenIdle = (callback: () => void) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 200);
  }
};

// Preload critical images
export const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};
