import {useCallback, useEffect, useRef, useState} from "react";

const defaultOptions = {
  threshold: 0.5,
  root: null,
  rootMargin: "0px 0px 0px 0px",
};

function useInfiniteScroll(): [React.RefObject<HTMLDivElement>, number] {
  const [count, setCount] = useState(1);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        setCount((prev) => prev + 1);
        observer.disconnect();
      }
    },
    [count]
  );

  useEffect(() => {
    const observe = new IntersectionObserver(
      handleIntersection,
      defaultOptions
    );
    targetRef.current && observe.observe(targetRef.current);

    return () => {
      observe.disconnect();
    };
  }, [handleIntersection, targetRef.current]);

  return [targetRef, count];
}

export default useInfiniteScroll;
