import { useRef, useState, useEffect, useCallback } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
  onCanPlayThrough?: () => void;
}

const LazyVideo = ({
  src,
  className = "",
  muted = true,
  loop = true,
  autoPlay = true,
  playsInline = true,
  preload = "none",
  onCanPlayThrough,
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);

  // Intersection Observer — detect when video enters viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasStartedLoading) {
          setHasStartedLoading(true);
        }
      },
      { rootMargin: "200px", threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStartedLoading]);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasStartedLoading) return;

    if (isInView && autoPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, hasStartedLoading, autoPlay]);

  const handleCanPlayThrough = useCallback(() => {
    setIsLoaded(true);
    onCanPlayThrough?.();
  }, [onCanPlayThrough]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ overflow: "hidden" }}
    >
      {/* Shimmer skeleton — shown until video loads */}
      {!isLoaded && <div className="skeleton-shimmer absolute inset-0 z-10" />}

      {/* Actual video — only set src after entering viewport */}
      {hasStartedLoading && (
        <video
          ref={videoRef}
          src={src}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          onCanPlayThrough={handleCanPlayThrough}
          className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "opacity 0.5s ease" }}
        />
      )}
    </div>
  );
};

export default LazyVideo;
