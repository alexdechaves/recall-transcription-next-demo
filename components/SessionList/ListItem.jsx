import Link from "next/link";
import { GiVideoConference } from "react-icons/gi";

const ListItem = ({ title, description, href, join_at }) => (
  <div className="w-15r">
    <Link
      href={href}
      className="flex flex-col items-left justify-left max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full"
    >
      <GiVideoConference className="w-full" size={25} />
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <span>Created at: {join_at}</span>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        ID: {description}
      </p>
    </Link>
  </div>
);

export default ListItem;
