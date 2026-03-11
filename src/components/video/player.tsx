/* eslint-disable @typescript-eslint/ban-ts-comment */
// components/VideoPlayer.tsx
"use client";

export const VideoPlayer = () => {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        muted
        // @ts-expect-error
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
