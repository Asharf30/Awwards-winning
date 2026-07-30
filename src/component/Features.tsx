import { TiLocationArrow } from "react-icons/ti";
import { useState, useRef } from "react";

interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({});
  const [sheenStyle, setSheenStyle] = useState<React.CSSProperties>({});
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 8;
    const tiltY = (relativeX - 0.5) * -8;

    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.97, .97, .97)`,
    );

    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${relativeX * 100}% ${relativeY * 100}%, 
        rgba(100, 200, 255, 0.25) 0%, 
        rgba(79, 183, 221, 0.12) 45%, 
        transparent 70%)`,
    });

    setSheenStyle({
      background: `linear-gradient(
        ${105 + relativeX * 60}deg,
        transparent 30%,
        rgba(100, 200, 255, 0.08) 50%,
        transparent 70%
      )`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
    setGlowStyle({ opacity: 0 });
    setSheenStyle({ opacity: 0 });
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.1s ease, box-shadow 0.3s ease",
        boxShadow: transformStyle
          ? "0 0 25px rgba(100,200,255,0.2), 0 0 60px rgba(79,183,221,0.1), inset 0 0 20px rgba(100,200,255,0.05)"
          : "none",
      }}
    >
      {children}

      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-md transition-opacity duration-300"
        style={glowStyle}
      />

      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-md transition-opacity duration-200"
        style={sheenStyle}
      />
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  descripiton?: string;
}

const BentoCard = ({ src, title, descripiton }: BentoCardProps) => {
  return (
    <div className="size-full relative">
      <video
        src={src}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        className="absolute left-0 top-0 z-0 size-full object-cover object-center"
      />
      <div
        className="absolute inset-0 z-20 flex size-full flex-col justify-between
       p-5 text-blue-50"
      >
        <div>
          <h1 className="bento-title special-font"> {title}</h1>
          {descripiton && (
            <p className="max-w-64 text-xs md:text-base mt-3">{descripiton}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-black pb-50">
      <div className="container mx-auto px-3 md:px-10  ">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-500">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>
        <BentoTilt
          className="border-hsla relative  mb-7 h-96 w-full overflow-hidden 
      rounded-md md:h-[65vh]"
        >
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            descripiton="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>
        <div className="grid h-auto md:h-[135vh] w-full grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 h-72 md:h-auto md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              descripiton="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-72 md:h-auto">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              descripiton="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-72 md:h-auto">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              descripiton="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 h-64 md:h-auto">
            <div className="group flex size-full flex-col justify-between bg-[#00D4FF] p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end cursor-pointer text-black transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-12 group-hover:scale-[5.4]" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 h-64 md:h-auto">
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              playsInline
              preload="metadata"
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </div>
  );
};

export default Features;
