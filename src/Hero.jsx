import { useState, useRef } from "react";
import Button from "./component/Button";
import { TiLocationArrowOutline } from "react-icons/ti";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoding, setIsLoding] = useState(true);
  const [lodedVideos, setLodedVideos] = useState(true);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const miniVideoRef = useRef(null); // ✅ ref منفصل

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
  return (
    <div className="relative h-dvh overflow-x-hidden">
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
          onCanPlayThrough={hendelVideoLoad}
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
        />

        <video
          src={getVideoSrc(currentIndex)}
          loop
          muted
          autoPlay
          onCanPlayThrough={hendelVideoLoad}
          className="left-0 absolute top-0 size-full object-cover object-center"
        />
      </div>
      <h1 className="special-font hero-heading  z-40 right-5 bottom-5 text-black  absolute ">
        G<b>a</b>ming
      </h1>
      <div className="absolute z-40  top-0 left-0">
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
      <h1 className="special-font hero-heading bottom-2.5 z-40 right-5  text-blue-75 absolute ">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
