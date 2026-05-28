import { useState, useCallback } from "react";

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
  loading?: "lazy" | "eager";
}

const LazyImage = ({
  src,
  alt = "",
  className = "",
  loading = "lazy",
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback((): void => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative" style={{ width: "100%", height: "100%" }}>
      {/* Shimmer skeleton — shown until image loads */}
      {!isLoaded && <div className="skeleton-shimmer absolute inset-0 z-10" />}

      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 0.5s ease" }}
      />
    </div>
  );
};

export default LazyImage;
