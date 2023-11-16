export const isWithinTimestamps = (word, currentVideoTime) => {
  return (
    currentVideoTime >= word.start_timestamp - 0.25 &&
    currentVideoTime <= word.end_timestamp + 0.5
  );
};

export const secondsToTimecode = (seconds) => {
  const timecode = new Date(Math.floor(1000 * seconds));
  return timecode.toISOString().substring(11, 19);
};
