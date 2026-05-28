import { useState, useRef, useEffect } from "react";
import Button from "./component/Button.tsx";
import { TiLocationArrowOutline } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoding, setIsLoding] = useState(true);
  const [lodedVideos, setLodedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const miniVideoRef = useRef(null);
  const [bgIndex, setBgIndex] = useState(1);

  const comingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVideo = () => {
    setHasClicked(true);

    setCurrentIndex(comingVideoIndex);
  };
  const getVideoSrc = (index) => {
    return `/videos/hero-${index}.mp4`;
  };

  const hendelVideoLoad = () => {
    setLodedVideos((prev) => prev + 1);
  };

  const safePlay = (videoEl) => {
    if (!videoEl) return;
    const playPromise = videoEl.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => safePlay(nextVideoRef.current),
          onComplete: () => {
            setBgIndex(currentIndex);
          },
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true },
  );

  useEffect(() => {
    if (lodedVideos === totalVideos - 1) {
      setIsLoding(false);
    }
  }, [lodedVideos]);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0%",
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "top top",
        end: "bottom   top",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh overflow-x-hidden">
      {isLoding && (
        <div className="flex-center absolute z-50 h-dvh w-screen  overflow-hidden">
          <div className=" three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10
          h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div
          className="mask-clip-path scale-50 opacity-0 transition-all 
          absolute-center z-50  duration-500 ease-in hover:scale-100 hover:opacity-100
         absolute size-64 cursor-pointer overflow-hidden rounded-lg"
        >
          <div onClick={handleMiniVideo} className="origin-center">
            <video
              ref={miniVideoRef}
              src={getVideoSrc(comingVideoIndex)}
              muted
              loop
              playsInline
              preload="metadata"
              id="current-video"
              onCanPlayThrough={hendelVideoLoad}
              className="size-64 origin-center scale-150 object-cover object-center"
            />
          </div>
        </div>
        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlayThrough={hendelVideoLoad}
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
        />

        <video
          src={getVideoSrc(hasClicked ? bgIndex : currentIndex)}
          loop
          muted
          autoPlay
          playsInline
          preload="auto"
          onCanPlayThrough={hendelVideoLoad}
          className="left-0 absolute top-0 size-full object-cover object-center"
        />
        <h1 className="special-font hero-heading  z-40 right-5 bottom-5 text-blue-75  absolute ">
          G<b>a</b>ming
        </h1>
        <div className="absolute z-40  top-0 left-0 ">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>
              <b>e</b>
            </h1>
            <p className="mb-5 max-w-64 text-blue-100 font-robert-regular">
              Enter the Metagame Layer <br /> Unleash teh play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrowOutline />}
              containerClass="!bg-yellow-300 flex-center gap-1 hover:!bg-blue-300"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading   right-5 bottom-5 text-black absolute ">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
