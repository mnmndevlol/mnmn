import Head from "next/head";
import Image from "next/image";
import Contents from "../components/Contents";
import Logo from "../components/Logo";
import Navigator from "../components/Navigator";
import TopImage from "../components/TopImage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrap">
        <TopImage />

        <Logo />
        <Navigator />

        <Contents />
      </div>
    </div>
  );
}
