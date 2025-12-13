import * as React from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

export function useInView(options: UseInViewOptions = {}) {
  const [ref, setRef] = React.useState<Element | null>(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || '0px',
        root: options.root || null,
      }
    );

    observer.observe(ref);

    return () => {
      observer.unobserve(ref);
    };
  }, [ref, options.threshold, options.rootMargin, options.root]);

  return { ref: setRef, isInView };
}
