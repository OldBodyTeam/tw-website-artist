// components/VideoPlayer.tsx
"use client";

export const VideoPlayer = () => {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
