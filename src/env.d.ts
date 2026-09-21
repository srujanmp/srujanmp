/// <reference types="astro/client" />

declare global {
  interface Window {
    __inkTrail?: { canvas: HTMLCanvasElement; dispose: () => void };
    __revealObserver?: IntersectionObserver;
    __revealReady?: boolean;
    __noDragBound?: boolean;
    __timelineCleanup?: () => void;
    __inkSnakeDone?: boolean;
  }
}

export {};
