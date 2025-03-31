import { forwardRef } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

type YouTubeIFrameProps = ReactPlayerProps & {
  videoKey: string;
  autoplay?: boolean;
};

const YouTubeIFrame = forwardRef<ReactPlayer, YouTubeIFrameProps>(
  function YouTubeIFrame({ videoKey, autoplay = false, ...props }, ref) {
    const YT_URL = "https://www.youtube.com/watch?v=";

    if (!videoKey) {
      console.error("Video key not provided!");
      return null;
    }

    const videoURL = YT_URL + videoKey;

    return (
      <div className="yt-player">
        <ReactPlayer
          ref={ref}
          url={videoURL}
          width="100%"
          height="100%"
          playing={autoplay}           // 🔥 Autoplay enabled
          muted={true}                 // 🔥 Mute by default
          loop={true}                  // 🔥 Loop the trailer
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,      // Removes YouTube branding
                iv_load_policy: 3,      // Disables annotations
                rel: 0,                 // Shows related videos from the same channel
                autoplay: 0,            // Force autoplay
              },
            },
          }}
          {...props}
        />
      </div>
    );
  }
);

export default YouTubeIFrame;
