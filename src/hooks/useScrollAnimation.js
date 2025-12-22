import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    // ✅ FIX: თუ უკვე ჩანს viewport-ში (anchor / refresh)
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add("visible");
      observer.unobserve(element);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
