import { ReactTinyLink } from "react-tiny-link";
import Layout from "../components/Layout";

const InterestingLinks = (): JSX.Element => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Interesting Links</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Here are some interesting links that I&apos;ve found on the internet.
      </p>
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url="https://emanuelferreira.substack.com/p/how-to-be-antifragile-for-developers"
      />
    </Layout>
  )
};

export default InterestingLinks;