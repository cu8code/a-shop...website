import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar, from "../components/navigationBar/main";

const Home: NextPage = () => {

  return (
    <div className="m-1">
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
    </div>
  );
};

export default Home;
