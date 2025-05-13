import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import gsap from "gsap";
import { assets } from "../utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = function () {
  // Storing DOM elements
  const videoRef = useRef([]);
  const videoDivRef = useRef([]);
  const videoSpanRef = useRef([]);

  // - State to store video data
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  // - Trigger when video section enters screen
  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },

      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  // useEffect for when video is ready and should play
  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [videoId, startPlay, isPlaying, loadedData]);

  // useEffect to animate progress circle
  useEffect(() => {
    let currentProgress = 0;

    let span = videoSpanRef.current;

    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                    ? "10vw"
                    : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });

            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      //restart the animation
      if (videoId === 0) {
        anim.restart();
      }

      // Animation for when video is playing
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration,
        );
      };

      // Add or remove the animation based on isPlaying state
      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay, isPlaying]);

  // Function to handle video process
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: i + 1,
        }));
        break;

      case "video-last":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: true,
        }));
        break;

      case "video-reset":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: false,
          videoId: 0,
        }));
        break;

      case "play":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !prev.isPlaying,
        }));
        break;

      case "pause":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !prev.isPlaying,
        }));
        break;

      default:
        break;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((prev) => [...prev, e]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => {
          return (
            <div key={list.id} id="slider" className="pr-10 sm:pr-20">
              <div className="video-carousel_container">
                <div className="flex-center h-full w-full overflow-hidden rounded-3xl bg-black">
                  <video
                    id="video"
                    playsInline={true}
                    muted
                    preload="auto"
                    ref={(el) => (videoRef.current[i] = el)}
                    onEnded={() => {
                      i !== 3
                        ? handleProcess("video-end", i)
                        : handleProcess("video-last");
                    }}
                    onPlay={() => {
                      setVideo((prev) => ({
                        ...prev,
                        isPlaying: true,
                      }));
                    }}
                    onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                  >
                    <source src={list.video} type="video/mp4" />
                  </video>
                </div>
                <div className="absolute top-10 left-[5%] z-10">
                  {list.textLists.map((title) => {
                    return (
                      <p
                        key={title}
                        className="text-lg font-medium sm:text-2xl"
                      >
                        {title}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex-center relative mt-10">
        <div className="flex-center rounded-full bg-gray-300 px-7 py-5 backdrop-blur">
          {videoRef.current.map((_, i) => {
            return (
              <span
                key={i}
                ref={(el) => (videoDivRef.current[i] = el)}
                className="relative mx-2 h-3 w-3 cursor-pointer rounded-full bg-gray-200"
              >
                <span
                  className="absolute h-full w-full rounded-full"
                  ref={(el) => (videoSpanRef.current[i] = el)}
                />
              </span>
            );
          })}
        </div>
        <button className="control-btn">
          <img
            src={
              isLastVideo
                ? assets.replayImg
                : !isPlaying
                  ? assets.playImg
                  : assets.pauseImg
            }
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                  ? () => handleProcess("play")
                  : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
