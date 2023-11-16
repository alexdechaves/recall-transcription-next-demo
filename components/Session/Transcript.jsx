import { secondsToTimecode, isWithinTimestamps } from "@/utils";

const Paragraph = ({ speaker, seek, currentVideoTime }) => {
  const paragraph =
    speaker &&
    speaker.words.map((word, index) => {
      return (
        <button key={index} onClick={() => seek(word.start_timestamp)}>
          <span
            className={`${
              isWithinTimestamps(word, currentVideoTime)
                ? "text-white"
                : "text-gray-700 hover:text-white"
            }`}
          >
            {word.text}&nbsp;
          </span>
        </button>
      );
    });

  return paragraph;
};

const Transcript = ({ transcript, seek, currentVideoTime }) => {
  return (
    <div>
      {transcript &&
        transcript.map((speaker, index) => (
          <div key={index} className="bg-gray-400 rounded py-5 px-10 mx-2 mb-5">
            <h1 className="text-xl text-gray-800">
              Speaker: {speaker.speaker}
            </h1>
            <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {secondsToTimecode(speaker.words[0].start_timestamp)}
            </span>
            <Paragraph
              currentVideoTime={currentVideoTime}
              seek={seek}
              speaker={speaker}
            />
          </div>
        ))}
    </div>
  );
};

export default Transcript;
