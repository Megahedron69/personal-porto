import { type FC, useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  onClose: () => void;
};

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const ImageViewer: FC<Props> = ({ src, onClose }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTranslate = useRef({ x: 0, y: 0 });

  // Touch pinch tracking
  const pinchStart = useRef<{ distance: number; scale: number } | null>(null);

  // Double tap/click
  const lastTap = useRef(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const reset = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    lastTranslate.current = { x: 0, y: 0 };
  };

  const getBounds = () => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return { maxX: 0, maxY: 0 };

    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const iw = img.clientWidth * scale;
    const ih = img.clientHeight * scale;

    const maxX = Math.max(0, (iw - cw) / 2);
    const maxY = Math.max(0, (ih - ch) / 2);
    return { maxX, maxY };
  };

  const clampTranslate = (tx: number, ty: number) => {
    const { maxX, maxY } = getBounds();
    return { x: clamp(tx, -maxX, maxX), y: clamp(ty, -maxY, maxY) };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
    lastTranslate.current = { ...translate };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    const nx = lastTranslate.current.x + dx;
    const ny = lastTranslate.current.y + dy;
    setTranslate(clampTranslate(nx, ny));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch (err) {
      // ignore
      void err;
    }
    setIsDragging(false);
    lastTranslate.current = { ...translate };
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const rect = container.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2 - translate.x;
    const cy = e.clientY - rect.top - rect.height / 2 - translate.y;

    const delta = -e.deltaY * 0.0015;
    const nextScale = clamp(scale * (1 + delta), 1, 4);

    // adjust translate so point under cursor remains approximately fixed
    const factor = nextScale / scale;
    const nx = translate.x - cx * (factor - 1);
    const ny = translate.y - cy * (factor - 1);

    setScale(nextScale);
    setTranslate(clampTranslate(nx, ny));
    lastTranslate.current = { x: nx, y: ny };
  };

  // Touch handlers for pinch and pan
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const [t1, t2] = [e.touches[0], e.touches[1]];
      const dx = t1.clientX - t2.clientX;
      const dy = t1.clientY - t2.clientY;
      pinchStart.current = { distance: Math.hypot(dx, dy), scale };
    } else if (e.touches.length === 1) {
      setIsDragging(true);
      lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      lastTranslate.current = { ...translate };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStart.current) {
      const [t1, t2] = [e.touches[0], e.touches[1]];
      const dx = t1.clientX - t2.clientX;
      const dy = t1.clientY - t2.clientY;
      const dist = Math.hypot(dx, dy);
      const nextScale = clamp(
        (pinchStart.current.scale * dist) / pinchStart.current.distance,
        1,
        4
      );
      setScale(nextScale);
      // keep translate reasonable
      setTranslate((t) => clampTranslate(t.x, t.y));
      lastTranslate.current = { ...translate };
    } else if (e.touches.length === 1 && isDragging) {
      const touch = e.touches[0];
      const dx = touch.clientX - lastPos.current.x;
      const dy = touch.clientY - lastPos.current.y;
      const nx = lastTranslate.current.x + dx;
      const ny = lastTranslate.current.y + dy;
      setTranslate(clampTranslate(nx, ny));
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length === 0) {
      setIsDragging(false);
      pinchStart.current = null;
      lastTranslate.current = { ...translate };
    }
  };

  const onDoubleClick = (clientX?: number, clientY?: number) => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      // double tap
      if (scale > 1.05) {
        reset();
      } else {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const cx =
          (clientX ?? rect.left + rect.width / 2) -
          rect.left -
          rect.width / 2 -
          translate.x;
        const cy =
          (clientY ?? rect.top + rect.height / 2) -
          rect.top -
          rect.height / 2 -
          translate.y;
        const nextScale = 2.5;
        const factor = nextScale / scale;
        const nx = translate.x - cx * (factor - 1);
        const ny = translate.y - cy * (factor - 1);
        setScale(nextScale);
        setTranslate(clampTranslate(nx, ny));
      }
      lastTap.current = 0;
    } else {
      lastTap.current = now;
    }
  };

  return (
    <div
      className="image-viewer-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="image-viewer-container"
        ref={containerRef}
        onClick={(e) => {
          // If the user clicked the container (i.e. not the image), close viewer.
          // e.target === e.currentTarget means click happened on the container background.
          if (e.target === e.currentTarget) onClose();
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onDoubleClick={(e) => onDoubleClick(e.clientX, e.clientY)}
      >
        <img
          ref={imgRef}
          src={src}
          alt="preview"
          className="image-viewer-image"
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          }}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onClick={(e) => {
            // prevent image clicks from bubbling to the container/backdrop
            e.stopPropagation();
            // handle tap/double-tap
            onDoubleClick(e.clientX, e.clientY);
          }}
        />
      </div>
    </div>
  );
};

export default ImageViewer;
