import { useEffect, useRef } from 'react';

export const useGameLoop = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  update: () => void,
  draw: (ctx: CanvasRenderingContext2D) => void
) => {
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gameLoop = () => {
      update();
      draw(ctx);
      frameRef.current = requestAnimationFrame(gameLoop);
    };

    frameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [canvasRef, update, draw]);
};