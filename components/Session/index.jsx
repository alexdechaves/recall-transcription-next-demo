import { useState, useEffect, useRef } from "react";
import Transcript from "./Transcript";
import BackButton from "../BackButton";

const Session = ({ bot }) => {
  const [transcript, setTranscript] = useState();
  const [currentVideoTime, setCurrentVideoTime] = useState();
  const videoRef = useRef();

  const seek = (start_time) => {
    videoRef.current.currentTime = start_time;
    videoRef.current.play();
  };

  useEffect(() => {
    fetch(`/api/transcript?id=${bot.id}`)
      .then((data) => data.json())
      .then((transcriptData) => setTranscript(transcriptData));
  }, []);

  return (
    <>
      <BackButton href="/sessions" />
      {bot.video_url ? (
        <div className="py-3">
          <h1>{bot.meeting_metadata.title}</h1>
          <div className="flex flex-row">
            <video
              controls
              onTimeUpdate={(e) => setCurrentVideoTime(e.target.currentTime)}
              ref={videoRef}
              src={bot.video_url}
            />
            <Transcript
              currentVideoTime={currentVideoTime}
              seek={seek}
              transcript={transcript}
            />
          </div>
        </div>
      ) : (
        "No video recorded"
      )}
    </>
  );
};

export default Session;
