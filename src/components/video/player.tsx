// components/VideoPlayer.tsx
"use client";

export const VideoPlayer = () => {
  return (
    <div data-vjs-player className="w-full h-full">
      <video
        preload="auto"
        aria-label="Video player"
        muted
        autoPlay
        loop
        className="w-full h-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
