const Video = () => {
  return (
    <video
      src="./src/assets/videos/video.webm"
      type="video/webm"
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-[60px] -z-10 h-2/5 w-full max-w-7xl object-cover md:top-[75px] md:min-h-[400px] lg:top-[90px]"
    />
  );
};

export default Video;
