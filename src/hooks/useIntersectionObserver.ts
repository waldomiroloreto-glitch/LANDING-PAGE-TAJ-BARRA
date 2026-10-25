import { useEffect } from 'react';

interface IntersectionObserverHookOptions {
  selector?: string;
  threshold?: number;
  rootMargin?: string;
  activeClass?: string;
}

/**
 * Custom hook to observe DOM sections/elements and apply a CSS class
 * (e.g. 'is-visible') when they scroll into the viewport.
 */
export function useIntersectionObserver({
  selector = '.reveal-on-scroll',
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  activeClass = 'is-visible',
}: IntersectionObserverHookOptions = {}) {
  useEffect(() => {
    // If user prefers reduced motion or window is SSR, reveal all immediately
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const elements = document.querySelectorAll(selector);

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add(activeClass));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
            // Once revealed, no need to observe again (prevents flickering)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [selector, threshold, rootMargin, activeClass]);
}
