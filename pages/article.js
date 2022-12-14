import Head from "next/head";
import Image from "next/image";
import Logo from "../components/Logo";
import Navigator from "../components/Navigator";
import TitleWrapper from "../components/TitleWrapper";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="wrap">
        <Logo />
        <Navigator />
        <TitleWrapper />
        <div class="image-area">
          <img src="images/iiii.png" />
        </div>
        <div class="article">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          consequuntur excepturi libero minima placeat quasi, reiciendis.
          Aperiam atque culpa, expedita fugiat, inventore ipsum libero
          necessitatibus odio pariatur provident totam vel. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Aliquam consequuntur excepturi
          libero minima placeat quasi, reiciendis. Aperiam atque culpa, expedita
          fugiat, inventore ipsum libero necessitatibus odio pariatur provident
          totam vel.
        </div>
      </div>
    </div>
  );
}
