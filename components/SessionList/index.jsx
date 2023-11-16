import { useState, useEffect } from "react";
import BackButton from "../BackButton";
import ListItem from "./ListItem";

const SessionList = () => {
  const [sessions, setSessions] = useState();

  useEffect(() => {
    fetch("/api/list_bot")
      .then((data) => data.json())
      .then((bots) => setSessions(bots.results));
  }, []);

  return (
    <>
      <h1 className="flex flex-row items-center gap-4 py-3 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <BackButton href="/" />
        Sessions
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {sessions &&
          sessions.map((session, index) => (
            <ListItem
              key={index}
              title={session.meeting_metadata?.title}
              description={session.id}
              join_at={session.join_at}
              href={`/session/${session.id}`}
            />
          ))}
      </div>
    </>
  );
};

export default SessionList;
