const Card = ({ title, description, href }) => (
  <div className="w-15">
    <a
      href={href}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </a>
  </div>
);

const Home = () => (
  <div className="flex flex-col justify-center items-center gap-2">
    <h1 className="py-3 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Demo Dashboard for Recall.ai
    </h1>
    <p>
      This is a sample project using Next.js + Tailwind CSS + Recall.ai +
      Deepgram. This example is useful if you want to build:
    </p>
    <ul>
      <li className="list-item">
        A platform where you can review your Zoom or Teams calls
      </li>
      <li className="list-item">
        Transcription services synced to the meeting recordings
      </li>
    </ul>
    <div className="flex flex-row gap-5">
      <Card title="New Bot" description="Create a new bot" href="/new" />
      <Card
        title="Previous Sessions"
        description="Your list of meetings"
        href="/sessions"
      />
    </div>
  </div>
);

export default Home;
