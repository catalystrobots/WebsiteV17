import { useEffect, useRef } from 'react';

interface UseParallaxProps {
  speed?: number;
  disabled?: boolean;
}

export const useParallax = ({ speed = 0.5, disabled = false }: UseParallaxProps = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * speed * 50;
      const yPos = (clientY / innerHeight - 0.5) * speed * 50;

      elementRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [speed, disabled]);

  return elementRef;
};