import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

// import Navbar from "../modules/nav";
import Hero from "../modules/hero";
import About from "../modules/about";
import Contact from "../modules/contact";
import Products from "../modules/products";
import Footer from "../modules/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>yaget - Let's Build This!</title>
        <meta name="description" content="Yet Another Good Enough Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
    <Footer />
    </div>
  );
};

export default Home;
