import { useEffect, type DependencyList, type RefObject } from "react";
import gsap from "gsap";

const useGsap = (
  targetRef: RefObject<HTMLElement | null>,
  animationFn: (el: HTMLElement) => void,
  deps: DependencyList = []
) => {
  useEffect(() => {
    if (targetRef.current) {
      const ctx = gsap.context(() => {
        animationFn(targetRef.current!);
      }, targetRef.current!);

      return () => ctx.revert();
    }
  }, deps);
};

export default useGsap;