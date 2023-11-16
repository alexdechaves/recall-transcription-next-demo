import Session from "@/components/Session";
import { LOCAL_URL } from "@/constants";

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const res = id && (await fetch(`${process.env.NODE_ENV == 'development' && LOCAL_URL}/api/get_bot?id=${id}`)); // This is needed in dev
  const bot = await res.json();

  return { props: { bot } };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

const SessionPage = ({ bot }) => (
  <main className="flex min-h-screen flex-col items-baseline justify-start p-24">
    {bot && <Session bot={bot} />}
  </main>
);

export default SessionPage;
