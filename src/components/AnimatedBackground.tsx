import { useRef, useEffect, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  seedY: number;
}

const PARTICLE_COUNT = 130;
const CONNECTION_DISTANCE = 150;
const MOUSE_RADIUS = 300;
const MOUSE_FORCE = 0.1;
const RETURN_SPEED = 0.025;
const PARTICLE_COLOR = "160, 160, 160";
const LINE_OPACITY_BASE = 0.1;
const LINE_OPACITY_MOUSE = 0.35;
const LINE_WIDTH_BASE = 0.6;
const LINE_WIDTH_MOUSE = 1.4;
const DOT_OPACITY_BASE = 0.22;
const DOT_OPACITY_MOUSE = 0.6;
const DRIFT_SPEED = 0.12;
const DOT_RADIUS_MIN = 1.0;
const DOT_RADIUS_MAX = 2.4;
const SCROLL_DRIFT = 0.06;

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const scrollOffset = useRef(0);
  const raf = useRef(0);

  const createParticles = useCallback((w: number, h: number) => {
    const arr: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      arr.push({
        x,
        y,
        baseX: x,
        baseY: y,
        seedY: y,
        vx: (Math.random() - 0.5) * DRIFT_SPEED,
        vy: (Math.random() - 0.5) * DRIFT_SPEED,
        radius: Math.random() * (DOT_RADIUS_MAX - DOT_RADIUS_MIN) + DOT_RADIUS_MIN,
      });
    }
    return arr;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      particles.current = createParticles(w, h);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    const onScroll = () => {
      scrollOffset.current = window.scrollY;
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const scroll = scrollOffset.current;
      const pts = particles.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        p.baseX += p.vx;
        const scrolledBaseY = p.seedY - (scroll * SCROLL_DRIFT) % h;
        p.baseY += p.vy;
        p.baseY += (((scrolledBaseY % h) + h) % h - p.baseY) * 0.01;

        if (p.baseX < -20) p.baseX = w + 20;
        if (p.baseX > w + 20) p.baseX = -20;
        if (p.baseY < -20) p.baseY = h + 20;
        if (p.baseY > h + 20) p.baseY = -20;

        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) ** 2;
          p.x -= (dx / dist) * force * MOUSE_FORCE * MOUSE_RADIUS;
          p.y -= (dy / dist) * force * MOUSE_FORCE * MOUSE_RADIUS;
        }

        p.x += (p.baseX - p.x) * RETURN_SPEED;
        p.y += (p.baseY - p.y) * RETURN_SPEED;
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const midX = (pts[i].x + pts[j].x) / 2;
            const midY = (pts[i].y + pts[j].y) / 2;
            const mouseDx = mx - midX;
            const mouseDy = my - midY;
            const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

            const mouseProximity = mouseDist < MOUSE_RADIUS
              ? ((MOUSE_RADIUS - mouseDist) / MOUSE_RADIUS) ** 1.5
              : 0;

            const baseFade = 1 - dist / CONNECTION_DISTANCE;
            const opacity = baseFade * (LINE_OPACITY_BASE + mouseProximity * (LINE_OPACITY_MOUSE - LINE_OPACITY_BASE));
            const lineWidth = LINE_WIDTH_BASE + mouseProximity * (LINE_WIDTH_MOUSE - LINE_WIDTH_BASE);

            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const dx = mx - p.x;
        const dy = my - p.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        const mouseProximity = mouseDist < MOUSE_RADIUS
          ? ((MOUSE_RADIUS - mouseDist) / MOUSE_RADIUS) ** 1.5
          : 0;

        const dotOpacity = DOT_OPACITY_BASE + mouseProximity * (DOT_OPACITY_MOUSE - DOT_OPACITY_BASE);
        const dotScale = 1 + mouseProximity * 0.6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * dotScale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${dotOpacity})`;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 m-0 p-0 pointer-events-none"
      style={{ zIndex: -50 }}
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
