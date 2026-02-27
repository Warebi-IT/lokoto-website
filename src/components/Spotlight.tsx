import { useEffect, useRef } from 'react';

/**
 * Aceternity-style Spotlight
 * Radial gradient that follows the cursor — desktop only.
 */
const Spotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(46, 204, 113, 0.07), transparent 40%)`;
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 hidden md:block transition-[background] duration-100"
    />
  );
};

export default Spotlight;
