import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head></Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
