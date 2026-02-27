/**
 * Aceternity UI — Wavy Background
 * Source: https://ui.aceternity.com/components/wavy-background
 * Adapted for React 19 + TypeScript (no "use client" directive needed in Vite)
 */
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
  /** Position verticale des vagues : 0 = haut, 1 = bas. Défaut 0.72 */
  yPosition?: number;
  /** Amplitude des vagues en pixels. Défaut 100 */
  amplitude?: number;
}

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
  yPosition = 0.72,
  amplitude = 100,
}: WavyBackgroundProps) {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const getSpeed = () => (speed === 'slow' ? 0.001 : 0.002);

  const waveColors = colors ?? ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let nt = 0;

    ctx.filter = `blur(${blur}px)`;

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    window.addEventListener('resize', handleResize);

    const drawWave = (n: number) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth ?? 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * amplitude;
          ctx.lineTo(x, y + h * yPosition);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.fillStyle = backgroundFill ?? '#000';
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blur, speed, waveOpacity, backgroundFill]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')
    );
  }, []);

  return (
    <div className={cn('relative flex flex-col items-center justify-center', containerClassName)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      />
      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
}
