'use client';

import { useEffect, useRef, useState } from 'react';

const LOAD_DURATION_MS = 3000;
const FADE_DURATION_MS = 700;

const RAIN_CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}+-=*/\\|';

export function LoadingScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, LOAD_DURATION_MS);

    const hideTimer = window.setTimeout(() => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      setIsVisible(false);
    }, LOAD_DURATION_MS + FADE_DURATION_MS);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);

      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const canvasElement = canvasRef.current;

    if (!canvasElement) {
      return;
    }

    const contextResult = canvasElement.getContext('2d');

    if (!contextResult) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasElement;
    const context: CanvasRenderingContext2D = contextResult;

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    let animationFrameId = 0;
    let previousFrameTime = 0;
    let drops: number[] = [];
    let canvasWidth = 0;
    let canvasHeight = 0;

    const fontSize = 16;
    const frameInterval = 50;

    function randomCharacter() {
      return RAIN_CHARACTERS[
        Math.floor(Math.random() * RAIN_CHARACTERS.length)
      ];
    }

    function resizeCanvas() {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;

      canvas.width = Math.floor(canvasWidth * pixelRatio);
      canvas.height = Math.floor(canvasHeight * pixelRatio);
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.font =
        `700 ${fontSize}px ` +
        'SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      context.textBaseline = 'top';

      const columnCount = Math.ceil(canvasWidth / fontSize);

      drops = Array.from(
        { length: columnCount },
        () => Math.floor(Math.random() * -60)
      );
    }

    function drawStaticRain() {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.fillStyle = 'rgba(214, 255, 216, 0.14)';

      drops.forEach((drop, columnIndex) => {
        const x = columnIndex * fontSize;
        const startingY = drop * fontSize;

        for (let row = 0; row < 12; row += 1) {
          context.fillText(
            randomCharacter(),
            x,
            startingY + row * fontSize
          );
        }
      });
    }

    function drawRain() {
      context.fillStyle = 'rgba(0, 0, 0, 0.13)';
      context.fillRect(0, 0, canvasWidth, canvasHeight);

      context.fillStyle = 'rgba(214, 255, 216, 0.28)';

      drops.forEach((drop, columnIndex) => {
        const x = columnIndex * fontSize;
        const y = drop * fontSize;

        context.fillText(randomCharacter(), x, y);

        if (y > canvasHeight && Math.random() > 0.975) {
          drops[columnIndex] = Math.floor(Math.random() * -20);
        } else {
          drops[columnIndex] += 1;
        }
      });
    }

    function animate(timestamp: number) {
      if (timestamp - previousFrameTime >= frameInterval) {
        drawRain();
        previousFrameTime = timestamp;
      }

      animationFrameId = window.requestAnimationFrame(animate);
    }

    function startAnimation() {
      window.cancelAnimationFrame(animationFrameId);
      context.clearRect(0, 0, canvasWidth, canvasHeight);

      if (reducedMotionQuery.matches) {
        drawStaticRain();
        return;
      }

      animationFrameId = window.requestAnimationFrame(animate);
    }

    function handleResize() {
      resizeCanvas();
      startAnimation();
    }

    resizeCanvas();
    startAnimation();

    window.addEventListener('resize', handleResize);
    reducedMotionQuery.addEventListener('change', startAnimation);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      reducedMotionQuery.removeEventListener('change', startAnimation);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`loading-screen${
        isLeaving ? ' loading-screen--leaving' : ''
      }`}
      role="status"
      aria-label="Digital resume loading"
    >
      <canvas
        ref={canvasRef}
        className="loading-screen-rain"
        aria-hidden="true"
      />

      <div className="loading-screen-inner">
        <h1 className="loading-screen-name">Travis Kirby</h1>

        <p className="loading-screen-status">
          <span className="loading-screen-prompt" aria-hidden="true">
            &gt;
          </span>

          <span>Digital Resume Loading...</span>
        </p>

        <div
          className="loading-screen-progress"
          aria-hidden="true"
        >
          <div className="loading-screen-progress-fill" />
        </div>
      </div>
    </div>
  );
}